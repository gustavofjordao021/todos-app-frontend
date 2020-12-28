import React, { useState } from "react";

import { Box, Flex, Icon, Button, useDisclosure } from "@chakra-ui/react";

import { IoIosAddCircle } from "react-icons/io";

import NavItem from "./navItem";
import DrawerMenu from "./menu";

const Header = (props) => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="purple.500"
      color="white"
      boxShadow="xl"
      {...props}
    >
      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        <NavItem onOpen={onOpen} onClose={onClose} ref={btnRef}>
          menu
        </NavItem>
        <NavItem>home</NavItem>
        <NavItem>settings</NavItem>
      </Box>
      <Box
        display={{ sm: show ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Button bg="transparent" border="1px">
          <Icon w="1.5em" h="1.5em" mr="5px" as={IoIosAddCircle} /> New Todo
        </Button>
      </Box>
      <Box>
        <DrawerMenu isOpen={isOpen} onClose={onClose} />
      </Box>
    </Flex>
  );
};

export default Header;
