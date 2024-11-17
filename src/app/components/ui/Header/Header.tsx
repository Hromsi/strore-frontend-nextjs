'use client';

import { HStack, Icon, Image, Button, Avatar, Box } from "@chakra-ui/react";
import ButtonColorMode from "../../ButtonColorMode";
import { LuShoppingCart } from "react-icons/lu";
import Container from "../Container/Container";

const Header = () => {
  return (
    <HStack
      as="header"
      minH="100px"
      borderBottom="1px solid"
      borderColor="blue.300"
      backgroundColor="var(--chakra-colors-chakra-body-bg)"
      position="sticky"
      top={0}
      zIndex={10}
    >
      <Container justifyContent="space-between" alignItems="center" >
        <Image src="/logo.svg" alt='Tech Heim logo' height="63px" width="56px" />
        <HStack>
          {/* TODO: create CartSummaryButton component */}
          <Button
            leftIcon={
              <Icon as={LuShoppingCart} w={6} h={6} color='gray.500' />
            }
            color="gray.500"
            borderRadius="full"
            variant="ghost"
          >
            0
          </Button>
          <ButtonColorMode />
          {/* <Avatar name='Admin' src='https://bit.ly/broken-link' title="Admin" bgColor="gray.400" /> */}
        </HStack>
      </Container>
    </HStack >
  );
}

export default Header;
