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

type SingleCardPropsType = {
  cardData: CardType[];
};

type CardType = {
  id: number | number;
  title: string;
  subTitle: string;
  rating: string;
  data: string;
  type: string;
};

const SingleCardC = ({ cardData }: SingleCardPropsType) => {
  return (
    <>
      {cardData.map((cardDat: any) => {
        return (
          <Flex py="1em" px="1em" key={cardDat.id}>
            <Card maxW="sm">
              {" "}
              <AspectRatio ratio={16 / 9} w="100%">
                <Image
                  src="https://picsum.photos/1000/1000"
                  borderRadius="lg"
                />
              </AspectRatio>
              <Stack mt="6" ml="1em" spacing="3">
                <Heading size="md">{cardDat.title}</Heading>
                <Text>{cardDat.subTitle}</Text>
                <Text color="blue.600" fontSize="2xl">
                  {cardDat.rating}
                </Text>
              </Stack>
              <Spacer />
              <Stack px="1em" pb="1em">
                <Text color="blue.600" fontSize="0.75em">
                  {cardDat.data}
                </Text>
                <Button
                  variant="solid"
                  colorScheme="red"
                  mx="3em"
                  h="30px"
                  borderRadius="100px"
                  letterSpacing="0.25em"
                  fontSize="0.65em"
                  fontWeight="normal"
                >
                  KURS STARTEN
                </Button>
              </Stack>
            </Card>
          </Flex>
        );
      })}
    </>
  );
};
export default SingleCardC;
