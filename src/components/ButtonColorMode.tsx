'use client'

import { Button, Icon, useColorMode } from "@chakra-ui/react";
import { SunIcon } from '@chakra-ui/icons'
import { FaMoon } from "react-icons/fa";

const ButtonColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
      <Button onClick={toggleColorMode} variant="ghost" borderRadius="full">
        <Icon as={colorMode === 'light' ? FaMoon : SunIcon} color="gray.500" />
      </Button>
  );
}

export default ButtonColorMode;
