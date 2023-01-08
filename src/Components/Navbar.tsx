import { Button, HStack, Link, Spacer } from "@chakra-ui/react";
import NavbarIcon from "../Icons/NavbarIcon";
import FilterGroups from "./Filter.tsx/FilterGroups";
import { useState } from "react";

// if (groupAId?.style.display === "none") {
//   groupAId.style.display = "grid";
// } else {
//   groupAId.style.display = "none";
// }

function Navbar() {
  return (
    <HStack fontSize="1em" px="1em" fontWeight={"normal"}>
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
      <FilterGroups />
      <Spacer />
      <Button bg="transparent">Einloggen</Button>
      <Button borderRadius="100px" h="30px" color="white" bgColor={"red.500"}>
        Konto erstellen
      </Button>
    </HStack>
  );
}
export default Navbar;
