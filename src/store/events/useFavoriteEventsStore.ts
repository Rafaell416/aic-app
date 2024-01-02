import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface FavoriteEventsState {
  favoriteEvents: Event[];
  saveEvent: (event: Event) => void;
  unsaveEvent: (id: number) => void;
}

const useFavoriteEventsStore = create<FavoriteEventsState>()(
  persist(
    (set) => ({
      favoriteEvents: [],
      saveEvent: (event) =>
        set((state) => ({
          ...state,
          favoriteEvents: [...state.favoriteEvents, event],
        })),
      unsaveEvent: (id) =>
        set((state) => ({
          ...state,
          favoriteEvents: state.favoriteEvents.filter(
            (event) => event.id !== id
          ),
        })),
    }),
    {
      name: "favoriteEventsStore",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useFavoriteEventsStore;
