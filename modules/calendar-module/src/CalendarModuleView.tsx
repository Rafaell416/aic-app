import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { CalendarModuleViewProps } from './CalendarModule.types';

const NativeView: React.ComponentType<CalendarModuleViewProps> =
  requireNativeViewManager('CalendarModule');

export default function CalendarModuleView(props: CalendarModuleViewProps) {
  return <NativeView {...props} />;
}
