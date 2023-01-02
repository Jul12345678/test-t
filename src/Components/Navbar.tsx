import { Button, Heading, HStack, Icon, Link, Spacer } from "@chakra-ui/react";
import NavbarIcon from "../Icons/NavbarIcon";

function Navbar() {
  return (
    <HStack fontSize="2vh" px="1em" fontWeight={"normal"}>
      <NavbarIcon px="0.5em" href="/#">
        Logo
      </NavbarIcon>
      <Link px="0.5em" href="/#">
        About
      </Link>
      <Link px="0.5em" href="/#">
        Courses
      </Link>
      <Link px="0.5em" href="/#">
        Become a Partner
      </Link>
      <Button px="0.5em" bg="transparent">
        Filtern nach
      </Button>
      <Spacer />
      <Button bg="transparent">Einloggen</Button>
      <Button borderRadius="100px" h="30px" color="white" bgColor={"red.500"}>
        Konto erstellen
      </Button>
    </HStack>
  );
}
export default Navbar;
