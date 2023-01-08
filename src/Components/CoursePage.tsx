import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  HStack,
  Text,
} from "@chakra-ui/react";
import CardA from "./Course Cards/CardA";
import CardB from "./Course Cards/CardB";
import CardC from "./Course Cards/CardC";
import { useState } from "react";
import Card from "./Course Cards/Card";

function TwoHeadingsTwoButtons() {
  return (
    <Box>
      <Flex
        bgImg={"https://picsum.photos/1000/1000"}
        bgSize="cover"
        boxSizing="border-box"
        alignItems="center"
        justifyContent="center"
        pos="relative"
      >
        <Box maxW="1400px" p="4em">
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
      <Box>
        <Card />
      </Box>
    </Box>
  );
}
export default TwoHeadingsTwoButtons;
