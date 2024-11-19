'use client';

import { HStack, Image, Avatar } from "@chakra-ui/react";
import ButtonColorMode from "@/components/ButtonColorMode";
import Container from "@/components/ui/Container/Container";
import { usePathname } from 'next/navigation'
import Link from "next/link";
import { ROUTES } from "@/config/constants";
import Cart from "@/components/Cart/Cart";

const Header = () => {
  const pathname = usePathname();

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
        <Link href={ROUTES.index}>
          <Image src="/logo.svg" alt='Tech Heim logo' height="63px" width="56px" />
        </Link>
        <HStack>
          <ButtonColorMode />
          {pathname === ROUTES.index && (
            <Cart/>
          )}
          {pathname === ROUTES.admin && (
            <Avatar name='Admin' src='https://bit.ly/broken-link' title="Admin" bgColor="gray.400" />
          )}
        </HStack>
      </Container>
    </HStack >
  );
}

export default Header;
