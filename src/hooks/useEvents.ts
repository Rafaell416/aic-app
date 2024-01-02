import { fetchEvents } from "@api/events/fetchEvents";
import { useState, useEffect, useCallback } from "react";

interface useEventsResponse {
  loading: boolean;
  events: Event[];
  error: string | unknown;
  refresh: () => void;
}

export default function useEvents(): useEventsResponse {
  const [loading, setLoading] = useState<boolean>(false);
  const [eventsResponse, setEventsResponse] =
    useState<EventsApiResponse | null>(null);
  const [error, setError] = useState<string | unknown>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetchEvents();
      setEventsResponse(response);
    } catch (error) {
      setError(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }, [setLoading, setEventsResponse, setError]);

  useEffect(() => {
    fetchData();
  }, []);

  const refresh = useCallback(() => {
    fetchData();
  }, [fetchData]);

  return {
    loading,
    events: eventsResponse?.data ?? [],
    error,
    refresh,
  };
}
