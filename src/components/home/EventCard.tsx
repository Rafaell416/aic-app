import Box from "@components/common/Box";
import FreeBadge from "@components/common/FreeBadge";
import HTMLSection from "@components/common/HTMLSection";
import Image from "@components/common/Image";
import Text from "@components/common/Text";
import { memo } from "react";
import { StyleSheet } from "react-native";

interface EventCardProps extends Event {}

const EventCard: React.FC<EventCardProps> = ({
  title,
  short_description,
  is_free,
  image_url,
  date_display,
}) => {
  return (
    <Box width="100%" paddingHorizontal="x-20" paddingTop="y-10">
      <Box
        borderBottomWidth={StyleSheet.hairlineWidth}
        borderBottomColor="grayFive"
        paddingBottom="y-16"
      >
        <Box
          width="100%"
          height={200}
          backgroundColor="grayEight"
          borderRadius={5}
          overflow="hidden"
        >
          <Image
            source={image_url}
            style={{
              height: "100%",
              width: "100%",
            }}
            alt={title}
            contentFit="contain"
          />
        </Box>
        <Text marginTop="y-6" variant="title">
          {title}
        </Text>
        <Box marginVertical="y-4">
          <HTMLSection content={short_description} />
        </Box>
        <Text variant="body" marginTop="y-2">
          {date_display}
        </Text>
        {is_free && <FreeBadge />}
      </Box>
    </Box>
  );
};

export default memo(EventCard);
