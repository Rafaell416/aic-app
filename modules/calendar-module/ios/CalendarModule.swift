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
      promise: Promise
    ) in
      let dateFormatter = ISO8601DateFormatter()

      guard let start = dateFormatter.date(from: startDate),
            let end = dateFormatter.date(from: endDate) else {
        promise.reject("E_DATE_ERROR", "Invalid date format")
        return
      }

      self.eventStore.requestAccess(to: .event) { granted, error in
        if let error = error {
          promise.reject("E_CALENDAR_ACCESS_DENIED", "Access to the calendar was denied")
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
            promise.resolve(event.eventIdentifier)
          } catch let error as NSError {
            promise.reject("E_CALENDAR_SAVE_ERROR", "Could not save event to the calendar")
          }
        } else {
          promise.reject("E_CALENDAR_ACCESS_DENIED", "Access to the calendar was not granted")
        }
      }
    }
  }
}

