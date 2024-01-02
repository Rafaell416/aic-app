import colors from "@theme/colors";
import fontFamilies from "@theme/fontFamilies";
import { normalize } from "@utils/normalize";
import { memo } from "react";
import RenderHTML from "react-native-render-html";

interface HTMLSectionProps {
  content: string;
}

const HTMLSection: React.FC<HTMLSectionProps> = ({ content }) => (
  <RenderHTML
    source={{
      html: content,
    }}
    systemFonts={[
      fontFamilies.ProzaLibreRegular,
      fontFamilies.PlayfairDisplayMedium,
    ]}
    tagsStyles={{
      p: {
        fontSize: normalize(14),
        fontFamily: fontFamilies.ProzaLibreRegular,
        color: colors.gray.one,
      },
      h2: {
        fontFamily: fontFamilies.PlayfairDisplayMedium,
        color: colors.black,
      },
    }}
    baseStyle={{
      margin: 0,
      padding: 0,
      marginBottom: 0,
      marginTop: 0,
      marginHorizontal: 0,
    }}
  />
);

export default memo(HTMLSection);
