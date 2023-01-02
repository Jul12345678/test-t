import { Button, Grid, Heading, HStack, Text } from "@chakra-ui/react";

function TwoHeadingsTwoButtons() {
  return (
    <Grid alignItems={"center"} justifyContent="center">
      <Heading pt="3em" w="50%">
        React - Moderne UI für das Web entwickeln
      </Heading>
      <Text w="50%" fontSize="1.25em" pt="0.5em">
        ReactJS ist eine beliebte Open Source JavaScript-Bibliothek für die
        Entwicklung von komponentenbasierten Benutzeroberflächen für interaktive
        Websites
      </Text>
      <HStack pt="0.5em">
        <Button borderRadius="100px" h="30px" bg="red.500" color="white">
          Jetzt loslegen
        </Button>
        <Button borderRadius="100px" h="30px" bg="red.500" color="white">
          Zur Kursübersicht
        </Button>
      </HStack>
    </Grid>
  );
}
export default TwoHeadingsTwoButtons;
