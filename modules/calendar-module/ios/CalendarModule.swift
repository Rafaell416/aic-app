import ExpoModulesCore
import EventKit

public class CalendarModule: Module {
  let eventStore = EKEventStore()

  public func definition() -> ModuleDefinition {
    Name("CalendarModule")

    AsyncFunction("saveEventToCalendar") { (
      title: String,
      startDate: String,
      endDate: String,
      resolve: @escaping (Any?) -> Void,
      reject: @escaping (String, String, Error?) -> Void
    ) in
      let dateFormatter = ISO8601DateFormatter()

      guard let start = dateFormatter.date(from: startDate),
            let end = dateFormatter.date(from: endDate) else {
        reject("E_DATE_ERROR", "Invalid date format", nil)
        return
      }

      self.eventStore.requestAccess(to: .event) { granted, error in
        if let error = error {
          reject("E_CALENDAR_ACCESS_DENIED", "Access to the calendar was denied", error)
          return
        }

        if granted {
          let event = EKEvent(eventStore: self.eventStore)
          event.title = title
          event.startDate = start
          event.endDate = end
          event.calendar = self.eventStore.defaultCalendarForNewEvents

          do {
            try self.eventStore.save(event, span: .thisEvent)
            resolve(event.eventIdentifier)
          } catch let error as NSError {
            reject("E_CALENDAR_SAVE_ERROR", "Could not save event to the calendar", error)
          }
        } else {
          reject("E_CALENDAR_ACCESS_DENIED", "Access to the calendar was not granted", nil)
        }
      }
    }
  }
}

