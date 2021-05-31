import React from "react";
import {
  Heading,
  Flex
} from "@chakra-ui/react";


const Header = (props) => {

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="teal.500"
      color="white"
      {...props}
    >
      <Flex alignItems="center" textAlign="center" mr={5} justifyContent="center">
      Demo Formulario de pago

        <Heading as="h1" textAlign="center" size="lg" letterSpacing={"tighter"}>
        </Heading>
      </Flex>

     
    </Flex>
  );
};

export default Header;