function modifyTimeInISODate(isoDate: string, newTime: string): string {
  const [datePart, timeWithTimeZone] = isoDate.split("T");

  const timeZonePart = timeWithTimeZone.slice(8);

  const newDateTime = `${datePart}T${newTime + ":00"}${timeZonePart}`;

  if (isNaN(new Date(newDateTime).getTime())) {
    throw new Error("Invalid date after modification");
  }

  return newDateTime;
}

export default modifyTimeInISODate;
