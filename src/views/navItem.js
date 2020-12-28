import React from "react";

import { Icon, Link } from "@chakra-ui/react";
import { IoMdHome, IoIosMenu, IoMdSettings } from "react-icons/io";
import { Link as Route } from "react-router-dom";

const NavItem = (props) => {
  const { onOpen, children } = props;
  return (
    <>
      <Link
        as={Route}
        to={
          children === "menu" ? "" : children === "home" ? "/" : `/${children}`
        }
        mt={{ base: 4, md: 0 }}
        mr={6}
        display="block"
        onClick={onOpen}
      >
        <Icon
          w="1.5em"
          h="1.5em"
          as={
            children === "menu"
              ? IoIosMenu
              : children === "home"
              ? IoMdHome
              : IoMdSettings
          }
        />
      </Link>
    </>
  );
};

export default NavItem;
