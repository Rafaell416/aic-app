import Box from "@components/common/Box";
import EventCard from "@components/home/EventCard";
import Header from "@components/home/Header";
import useAppNavigation from "@hooks/useAppNavigation";
import { events } from "@utils/mock/events";
import { memo } from "react";
import { FlatList, Pressable } from "react-native";

function Home() {
  const navigation = useAppNavigation();
  return (
    <Box flex={1} backgroundColor="white">
      <FlatList
        data={events}
        keyExtractor={(item: Event) => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => <Header />}
        renderItem={({ item: source, index }) => {
          const sharedTransitionTag = "sharedTransitionTag" + index;
          return (
            <Pressable
              onPress={() =>
                navigation.navigate("Detail", {
                  source,
                  sharedTransitionTag,
                })
              }
            >
              <EventCard
                {...source}
                sharedTransitionTag={sharedTransitionTag}
              />
            </Pressable>
          );
        }}
      />
    </Box>
  );
}
export default memo(Home);
