import React from "react";

import {
  Icon,
  Drawer,
  Button,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
} from "@chakra-ui/react";

import { IoIosAddCircle } from "react-icons/io";

let DrawerMenu = (props) => {
  const logoutHandler = (event) => {
    localStorage.removeItem("AuthToken");
    return props.history.push("/login");
  };

  const btnRef = React.useRef();
  const { isOpen, onClose } = props;

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader>
              Create your account
              <DrawerCloseButton />
            </DrawerHeader>
            <DrawerBody></DrawerBody>
            <DrawerFooter w="100%">
              <Button
                w="100%"
                variant="solid"
                border="1px"
                colorScheme="purple"
              >
                <Icon w="1.5em" h="1.5em" mr="5px" as={IoIosAddCircle} /> New
                Todo
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default DrawerMenu;
