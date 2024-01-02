import Box from "@components/common/Box";
import EventsList from "@components/common/EventsList";
import { Header } from "@components/favorite/Header";
import useFavoriteEvents from "@hooks/events/useFavoriteEvents";
import { memo } from "react";

function Favorite() {
  const { favoriteEvents } = useFavoriteEvents();
  return (
    <Box flex={1} backgroundColor="white">
      <Header title="Favorite Events" showBackButton />
      <Box flex={1}>
        <EventsList
          events={favoriteEvents}
          loading={false}
          refresh={() => {}}
        />
      </Box>
    </Box>
  );
}

export default memo(Favorite);
