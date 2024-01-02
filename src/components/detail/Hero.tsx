import Box, { AnimatedBox } from "@components/common/Box";
import IconButton from "@components/common/IconButton";
import Image from "@components/common/Image";
import useAppNavigation from "@hooks/useAppNavigation";
import React, { memo } from "react";
import { FadeIn, FadeOut } from "react-native-reanimated";

import FavButton from "./FavButton";

interface HeroProps {
  image_url: string;
  onClickFavButton: () => void;
  onClickSaveScheduleButton: () => void;
  eventSaved: boolean;
}

const Hero: React.FC<HeroProps> = ({
  image_url,
  onClickFavButton,
  onClickSaveScheduleButton,
  eventSaved,
}) => {
  const navigation = useAppNavigation();
  return (
    <AnimatedBox
      backgroundColor="grayTwelve"
      width="100%"
      height={300}
      entering={FadeIn.delay(150).duration(1000)}
      exiting={FadeOut}
    >
      <Image
        source={image_url}
        style={{
          height: "100%",
          width: "100%",
        }}
        contentFit="cover"
        onLoadStart={() => {}}
        onLoadEnd={() => {}}
      />
      <Box position="absolute" left={20} top={60}>
        <IconButton icon="chevron-left" onPress={() => navigation.goBack()} />
      </Box>
      <Box position="absolute" right={70} top={60}>
        <IconButton icon="calendar" onPress={onClickSaveScheduleButton} />
      </Box>
      <Box position="absolute" right={20} top={60}>
        <FavButton onPress={onClickFavButton} eventSaved={eventSaved} />
      </Box>
    </AnimatedBox>
  );
};

export default memo(Hero);
