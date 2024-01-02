import Box, { AnimatedBox } from "@components/common/Box";
import Image from "@components/common/Image";
import Text from "@components/common/Text";
import { StyleSheet } from "react-native";

interface EventCardProps extends Event {
  sharedTransitionTag: string;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  short_description,
  is_free,
  image_url,
  sharedTransitionTag,
}) => {
  return (
    <Box width="100%" paddingHorizontal="x-20" paddingVertical="y-10">
      <Box
        borderBottomWidth={StyleSheet.hairlineWidth}
        borderBottomColor="grayEleven"
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
            sharedTransitionTag={sharedTransitionTag}
            style={{
              height: "100%",
              width: "100%",
            }}
            alt={title}
            contentFit="contain"
          />
        </Box>
        <Text variant="label" marginTop="y-10">
          TOUR
        </Text>
        <Text marginTop="y-6" variant="title">
          {title}
        </Text>
        <Text variant="body" marginVertical="y-12">
          {short_description}
        </Text>
        <Text variant="body" marginTop="y-2">
          Thurs, Jan 4 | 12:00–2:00
        </Text>
        {is_free && (
          <Box
            backgroundColor="brown"
            maxWidth={60}
            paddingVertical="y-8"
            paddingHorizontal="x-12"
            borderRadius={2}
            alignItems="center"
            justifyContent="center"
            marginTop="y-16"
          >
            <Text variant="label" color="white">
              FREE
            </Text>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default EventCard;
