import EventCard from "@components/home/EventCard";
import useAppNavigation from "@hooks/useAppNavigation";
import { memo } from "react";
import { FlatList, Pressable, RefreshControl } from "react-native";

import { ScreenNames } from "../../routes/screenNames";

interface EventsListProps {
  events: Event[];
  loading: boolean;
  refresh: () => void;
}

const EventsList: React.FC<EventsListProps> = ({
  events,
  loading,
  refresh,
}) => {
  const navigation = useAppNavigation();
  return (
    <FlatList
      data={events}
      keyExtractor={(item: Event) => String(item.id)}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={refresh} />
      }
      renderItem={({ item: event, index }) => {
        return (
          <Pressable
            onPress={() =>
              navigation.navigate(ScreenNames.Detail, {
                event,
              })
            }
          >
            <EventCard {...event} />
          </Pressable>
        );
      }}
    />
  );
};

export default memo(EventsList);
