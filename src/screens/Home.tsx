import Box from "@components/common/Box";
import EventsList from "@components/common/EventsList";
import Text from "@components/common/Text";
import Header from "@components/home/Header";
import useEvents from "@hooks/events/useEvents";
import { memo } from "react";

function Home() {
  const { loading, events, refresh } = useEvents();
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
      <EventsList events={events} loading={loading} refresh={refresh} />
    </Box>
  );
}
export default memo(Home);
