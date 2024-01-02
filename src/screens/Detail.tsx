import Box from "@components/common/Box";
import Image from "@components/common/Image";
import Text, { AnimatedText } from "@components/common/Text";
import Hero from "@components/detail/Hero";
import { Feather as Icon } from "@expo/vector-icons";
import colors from "@theme/colors";
import { memo } from "react";
import { StyleSheet, ScrollView } from "react-native";
import { FadeIn, FadeOut } from "react-native-reanimated";
import RenderHTML, {
  CustomBlockRenderer,
  CustomTagRendererRecord,
  CustomTextualRenderer,
  useIMGElementProps,
} from "react-native-render-html";
import { DetailsRouteProp } from "src/@types/navigation";

const Detail: React.FC<{ route: DetailsRouteProp }> = ({
  route: {
    params: { source, sharedTransitionTag },
  },
}) => {
  return (
    <ScrollView>
      <Box flex={1} backgroundColor="white">
        <Hero
          image_url={source.image_url}
          sharedTransitionTag={sharedTransitionTag}
        />
        <Box
          marginHorizontal="x-20"
          marginTop="y-20"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Text variant="label">TOUR</Text>
          <Text variant="label" marginLeft="x-4">
            Thurs, Jan 4 | 12:00–2:00
          </Text>
        </Box>
        <AnimatedText
          marginTop="y-6"
          variant="title"
          marginLeft="x-20"
          entering={FadeIn.delay(100)}
          exiting={FadeOut}
        >
          Visita Guiada en Español
        </AnimatedText>
        <AnimatedText
          variant="body"
          marginVertical="y-10"
          marginHorizontal="x-20"
          textAlign="justify"
          entering={FadeIn.delay(100)}
          exiting={FadeOut}
        >
          <RenderHTML
            source={{
              html: source.description,
            }}
          />
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
            {source.location}
          </Text>
        </Box>
        <Box
          backgroundColor="brown"
          maxWidth={60}
          paddingVertical="y-8"
          paddingHorizontal="x-12"
          borderRadius={2}
          alignItems="center"
          justifyContent="center"
          marginTop="y-16"
          marginLeft="x-20"
        >
          <Text variant="label" color="white">
            FREE
          </Text>
        </Box>
      </Box>
    </ScrollView>
  );
};

export default memo(Detail);
