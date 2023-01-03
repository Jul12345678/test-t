import {
  AspectRatio,
  Button,
  Card,
  Flex,
  Heading,
  Image,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";

function SingleCard() {
  return (
    <Flex px="1em" py="1em">
      <Card maxW="sm">
        {" "}
        <AspectRatio ratio={16 / 9} w="100%">
          <Image src="https://picsum.photos/1000/1000" borderRadius="lg" />
        </AspectRatio>
        <Stack mt="6" ml="1em" spacing="3">
          <Heading size="md">
            AWS Certified Solutions Architect - Association 2020
          </Heading>
          <Text>AWS Certified Solutions Architect - Association 2020</Text>
          <Text color="blue.600" fontSize="2xl">
            ***** 5
          </Text>
        </Stack>
        <Spacer />
        <Stack px="1em" pb="1em">
          <Text color="blue.600" fontSize="1em">
            73 Videos 8:38h Average 7 min
          </Text>
          <Button
            variant="solid"
            colorScheme="red"
            mx="3em"
            h="30px"
            borderRadius="100px"
          >
            Buy now
          </Button>
        </Stack>
      </Card>
    </Flex>
  );
}
export default SingleCard;
