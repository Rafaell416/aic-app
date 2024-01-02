import Box, { AnimatedBox } from "@components/common/Box";
import IconButton from "@components/common/IconButton";
import Image from "@components/common/Image";
import useAppNavigation from "@hooks/useAppNavigation";
import React, { memo } from "react";

interface HeroProps {
  image_url: string;
  sharedTransitionTag: string;
}

const Hero: React.FC<HeroProps> = ({ image_url, sharedTransitionTag }) => {
  const navigation = useAppNavigation();
  return (
    <Box backgroundColor="grayTwelve" width="100%" height={300}>
      <Image
        source={image_url}
        style={{
          height: "100%",
          width: "100%",
        }}
        contentFit="cover"
        sharedTransitionTag={sharedTransitionTag}
        onLoadStart={() => console.log("started...")}
        onLoadEnd={() => console.log("----ended")}
      />
      <Box position="absolute" left={20} top={60}>
        <IconButton icon="chevron-left" onPress={() => navigation.goBack()} />
      </Box>
      <Box position="absolute" right={70} top={60}>
        <IconButton icon="calendar" onPress={() => {}} />
      </Box>
      <Box position="absolute" right={20} top={60}>
        <IconButton icon="heart" onPress={() => {}} />
      </Box>
    </Box>
  );
};

export default memo(Hero);
