import {
  NativeModulesProxy,
  EventEmitter,
  Subscription,
} from "expo-modules-core";

import CalendarModule from "./src/CalendarModule";
import {
  ChangeEventPayload,
  CalendarModuleViewProps,
} from "./src/CalendarModule.types";
import CalendarModuleView from "./src/CalendarModuleView";

export async function saveEventToCalendar(
  title: string,
  startDate: string,
  endDate: string
): Promise<string> {
  return await CalendarModule.saveEventToCalendar(title, startDate, endDate);
}

const emitter = new EventEmitter(
  CalendarModule ?? NativeModulesProxy.CalendarModule
);

export function addChangeListener(
  listener: (event: ChangeEventPayload) => void
): Subscription {
  return emitter.addListener<ChangeEventPayload>("onChange", listener);
}

export { CalendarModuleView, CalendarModuleViewProps, ChangeEventPayload };
