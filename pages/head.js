import React from "react";
import {
  Heading,
  Flex,
  Link
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

        <Heading as="h1" textAlign="center" size="lg" letterSpacing={"tighter"}>
            <Link href="/" >Demo Formulario de pago</Link>
        </Heading>
      </Flex>

     
    </Flex>
  );
};

export default Header;