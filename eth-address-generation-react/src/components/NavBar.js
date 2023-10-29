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
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex alignItems="Center" bg={useColorModeValue("gray.100", "gray.900")}>
      <Box ml="5">
        <Heading size="md"> Ethereum Address Generation </Heading>
      </Box>
      <Spacer />
      <ButtonGroup mr="5">
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

export { NavBar };
