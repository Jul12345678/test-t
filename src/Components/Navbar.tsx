import { Button, HStack, Link, Spacer } from "@chakra-ui/react";
import NavbarIcon from "../Icons/NavbarIcon";
import FilterGroup from "./Filter.tsx/FilterGroups";

const Navbar: React.FC = () => {
  return (
    <HStack fontSize="1em" px="1em" fontWeight={"normal"}>
      <NavbarIcon px="0.5em" href="/#">
        Logo
      </NavbarIcon>
      <Link
        px="0.5em"
        href="/#"
        sx={{
          "@media only screen and (max-width: 1026px) ": {
            display: "none",
          },
        }}
      >
        About
      </Link>
      <Link px="0.5em" href="/#">
        Courses
      </Link>
      <Link
        sx={{
          "@media only screen and (max-width: 1026px) ": {
            display: "none",
          },
        }}
        px="0.5em"
        href="/#"
      >
        Become a Partner
      </Link>
      <FilterGroup />
      <Spacer />
      <Button
        bg="transparent"
        sx={{
          "@media only screen and (max-width: 1026px) ": {
            display: "none",
          },
        }}
      >
        Einloggen
      </Button>
      <Button
        sx={{
          "@media only screen and (max-width: 1026px) ": {
            display: "none",
          },
        }}
        borderRadius="100px"
        h="30px"
        color="white"
        bgColor={"red.500"}
      >
        Konto erstellen
      </Button>
    </HStack>
  );
};
export default Navbar;
