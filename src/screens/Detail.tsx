import Box from "@components/common/Box";
import FreeBadge from "@components/common/FreeBadge";
import HTMLSection from "@components/common/HTMLSection";
import Text, { AnimatedText } from "@components/common/Text";
import Hero from "@components/detail/Hero";
import { Feather as Icon } from "@expo/vector-icons";
import colors from "@theme/colors";
import { memo } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { FadeIn, FadeOut } from "react-native-reanimated";
import { DetailsRouteProp } from "src/@types/navigation";

const Detail: React.FC<{ route: DetailsRouteProp }> = ({
  route: {
    params: { event, sharedTransitionTag },
  },
}) => {
  return (
    <ScrollView>
      <Box flex={1} backgroundColor="white" paddingBottom="y-32">
        <Hero
          image_url={event.image_url}
          sharedTransitionTag={sharedTransitionTag}
        />
        {event?.date_display && (
          <Box marginHorizontal="x-20" marginTop="y-20">
            <Text variant="label">{event.date_display}</Text>
          </Box>
        )}
        <AnimatedText
          marginTop="y-6"
          variant="title"
          marginLeft="x-20"
          entering={FadeIn.delay(100)}
          exiting={FadeOut}
        >
          {event.title}
        </AnimatedText>
        <AnimatedText
          variant="body"
          marginVertical="y-10"
          marginHorizontal="x-20"
          textAlign="justify"
          entering={FadeIn.delay(100)}
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
