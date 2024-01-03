import * as React from 'react';

import { CalendarModuleViewProps } from './CalendarModule.types';

export default function CalendarModuleView(props: CalendarModuleViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
