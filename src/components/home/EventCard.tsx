import Box from "@components/common/Box";
import Text from "@components/common/Text";
import { StyleSheet } from "react-native";

interface EventCardProps {}

const EventCard: React.FC<EventCardProps> = ({}) => {
  return (
    <Box width="100%" paddingHorizontal="x-20" paddingVertical="y-10">
      <Box
        borderBottomWidth={StyleSheet.hairlineWidth}
        borderBottomColor="grayEight"
        paddingBottom="y-16"
      >
        <Box width="100%" height={200} backgroundColor="grayEight" />
        <Text variant="label" marginTop="y-10">
          TOUR
        </Text>
        <Text marginTop="y-6" variant="title">
          Visita Guiada en Español
        </Text>
        <Text variant="body" marginVertical="y-12">
          ¿Quieres explorar el museo, pero no sabes por dónde empezar? Únete a
          un guía experto para un recorrido de 45 minutos sobre obras de arte
          icónicas y otros tesoros menos conocidos del museo. Este recorrido
          comienza en el Ala Moderna de Griffin Court.
        </Text>
        <Text variant="body" marginTop="y-2">
          2:00 - 2:45
        </Text>
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
      </Box>
    </Box>
  );
};

export default EventCard;
