import Box from "@components/common/Box";
import Text from "@components/common/Text";
import EventCard from "@components/home/EventCard";
import Header from "@components/home/Header";
import useAppNavigation from "@hooks/useAppNavigation";
import useEvents from "@hooks/useEvents";
import { memo } from "react";
import { FlatList, Pressable, RefreshControl } from "react-native";

import { ScreenNames } from "../routes/screenNames";

function Home() {
  const navigation = useAppNavigation();
  const { loading, error, events, refresh } = useEvents();
  console.log({ loading, error, events });
  if (loading) {
    return (
      <Box flex={1} backgroundColor="white">
        <Header />
        <Box flex={1} alignItems="center" justifyContent="center">
          <Text variant="title">Loading Events...</Text>
        </Box>
      </Box>
    );
  }
  return (
    <Box flex={1} backgroundColor="white">
      <Header />
      <FlatList
        data={events}
        keyExtractor={(item: Event) => String(item.id)}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={refresh} />
        }
        renderItem={({ item: event, index }) => {
          const sharedTransitionTag = "sharedTransitionTag" + index;
          return (
            <Pressable
              onPress={() =>
                navigation.navigate(ScreenNames.Detail, {
                  event,
                  sharedTransitionTag,
                })
              }
            >
              <EventCard {...event} sharedTransitionTag={sharedTransitionTag} />
            </Pressable>
          );
        }}
      />
    </Box>
  );
}
export default memo(Home);
