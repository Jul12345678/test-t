import {
  Button,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

const FilterGroup = () => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        colorScheme="none"
        color="black"
        border="1px solid"
      >
        Filtern nach
      </MenuButton>
      <MenuList>
        <MenuGroup>
          <MenuItem value="all">Show all</MenuItem>
          <MenuItem value="groupA">Group A</MenuItem>
          <MenuItem value="groupB">Group B </MenuItem>
          <MenuItem value="groupC">Group C </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};
export default FilterGroup;
