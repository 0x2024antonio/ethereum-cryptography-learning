/* import { ConnectButton } from "@rainbow-me/rainbowkit"; */
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
const NavBar = () => {
  const bg = useColorModeValue("gray.100", "gray.900");
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex px={6} alignItems="Center" bg={bg}>
      <Box>
        <Heading size="md"> Ethereum Address Generation </Heading>
      </Box>
      <Spacer />
      <ButtonGroup>
        <Button bg={bg} onClick={toggleColorMode}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

export { NavBar };
