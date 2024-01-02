import useFavoriteEventsStore from "../../store/events/useFavoriteEventsStore";

interface useFavoriteEventsResponse {
  favoriteEvents: Event[];
  toggleEventFav: (event: Event) => void;
  isEventSaved: (event: Event) => { saved: boolean };
}

export default function useFavoriteEvents(): useFavoriteEventsResponse {
  const { favoriteEvents, saveEvent, unsaveEvent } = useFavoriteEventsStore();

  const isEventSaved = (event: Event) => {
    const saved = !!favoriteEvents?.find((e) => e.id === event.id);

    return {
      saved,
    };
  };

  const toggleEventFav = (event: Event) => {
    const { saved } = isEventSaved(event);

    if (saved) {
      unsaveEvent(event.id);
    } else {
      saveEvent(event);
    }
  };

  return {
    isEventSaved,
    favoriteEvents,
    toggleEventFav,
  };
}
