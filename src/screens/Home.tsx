import Box from "@components/common/Box";
import EventCard from "@components/home/EventCard";
import Header from "@components/home/Header";

function Home() {
  return (
    <Box flex={1} backgroundColor="white">
      <Header />
      <EventCard />
    </Box>
  );
}
export default Home;
