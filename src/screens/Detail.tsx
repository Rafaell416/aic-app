import Box from "@components/common/Box";
import FreeBadge from "@components/common/FreeBadge";
import HTMLSection from "@components/common/HTMLSection";
import Text, { AnimatedText } from "@components/common/Text";
import Hero from "@components/detail/Hero";
import { Feather as Icon } from "@expo/vector-icons";
import useFavoriteEvents from "@hooks/events/useFavoriteEvents";
import colors from "@theme/colors";
import modifyTimeInISODate from "@utils/modifyTimeInISODate";
import { memo } from "react";
import { StyleSheet, ScrollView, Alert } from "react-native";
import { FadeIn, FadeOut } from "react-native-reanimated";
import { DetailsRouteProp } from "src/@types/navigation";

import { saveEventToCalendar } from "../../modules/calendar-module";

const Detail: React.FC<{ route: DetailsRouteProp }> = ({
  route: {
    params: { event },
  },
}) => {
  const { toggleEventFav, isEventSaved } = useFavoriteEvents();
  const { saved } = isEventSaved(event);

  const handleSaveEventToCalendar = () => {
    const start = modifyTimeInISODate(event.start_date, event.start_time);
    const end = modifyTimeInISODate(event.end_date, event.end_time);
    saveEventToCalendar(event.title, start, end)
      .then((_) => {
        Alert.alert("Done ✅", "Event saved in your calendar");
      })
      .catch((e) => {
        Alert.alert(
          "Error",
          "There was an error saving this event to your calendar, please try again."
        );
      });
  };

  return (
    <ScrollView>
      <Box flex={1} backgroundColor="white" paddingBottom="y-32">
        <Hero
          image_url={event.image_url}
          onClickSaveScheduleButton={handleSaveEventToCalendar}
          onClickFavButton={() => toggleEventFav(event)}
          eventSaved={saved}
        />
        {event?.date_display && (
          <Box marginHorizontal="x-20" marginTop="y-20">
            <AnimatedText
              entering={FadeIn.delay(150).duration(1000)}
              exiting={FadeOut}
              variant="label"
            >
              {event.date_display}
            </AnimatedText>
          </Box>
        )}
        <AnimatedText
          marginTop="y-6"
          variant="title"
          marginLeft="x-20"
          entering={FadeIn.delay(150).duration(1000)}
          exiting={FadeOut}
        >
          {event.title}
        </AnimatedText>
        <AnimatedText
          variant="body"
          marginVertical="y-10"
          marginHorizontal="x-20"
          textAlign="justify"
          entering={FadeIn.delay(300).duration(1000)}
          exiting={FadeOut}
        >
          <HTMLSection content={event.description} />
        </AnimatedText>
        <Box
          width="88%"
          alignSelf="center"
          borderTopWidth={StyleSheet.hairlineWidth}
          borderTopColor="graySeven"
          marginBottom="y-10"
        />
        <Box flexDirection="row" alignItems="center" marginLeft="x-20">
          <Icon size={15} name="map-pin" color={colors.gray.six} />
          <Text variant="label" marginLeft="x-4">
            {event.location}
          </Text>
        </Box>
        {event.is_free && (
          <Box marginLeft="x-20">
            <FreeBadge />
          </Box>
        )}
      </Box>
    </ScrollView>
  );
};

export default memo(Detail);
