import { Box, Button, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import Card from "./Course Cards/Card";

function CoursePage() {
  return (
    <Box>
      <Flex
        bgImg={"https://picsum.photos/1000/1000"}
        bgSize="cover"
        bgColor="grey"
        boxSizing="border-box"
        alignItems="center"
        justifyContent="center"
        pos="relative"
      >
        <Box maxW="1300px" p="5em">
          <Heading color="white" pt="3em" w="50%">
            React - Moderne UI für das Web entwickeln
          </Heading>
          <Text color="white" w="50%" fontSize="1.25em" pt="0.5em">
            ReactJS ist eine beliebte Open Source JavaScript-Bibliothek für die
            Entwicklung von komponentenbasierten Benutzeroberflächen für
            interaktive Websites
          </Text>
          <HStack pt="0.5em">
            <Button borderRadius="100px" h="30px" bg="red.500" color="white">
              Jetzt loslegen
            </Button>
            <Button borderRadius="100px" h="30px" bg="red.500" color="white">
              Zur Kursübersicht
            </Button>
          </HStack>
        </Box>
      </Flex>
      <HStack maxW="1300px">
        <Card />
      </HStack>
    </Box>
  );
}
export default CoursePage;
