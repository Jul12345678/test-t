import {
  AspectRatio,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import SingleCard from "./SingleCard";

function Cards() {
  return (
    <Grid
      maxW="1400px"
      m="0 auto"
      px="3em"
      gridTemplateColumns={[
        "1fr",
        "1fr 1fr",
        "1fr 1fr 1fr",
        "repeat(auto-fill, 1fr)",
      ]}
    >
      <SingleCard />
      <SingleCard />
      <SingleCard />
    </Grid>
  );
}
export default Cards;
