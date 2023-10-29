import {
  Box,
  HStack,
  Text,
  Button,
  FormControl,
  FormLabel,
  //FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

import { useContext } from "react";
import { EthAddressContext } from "../../App";
import { getPrivateKey } from "../../lib/tools";

const PrivateKey = () => {
  const { privateKeyObj, setPrivateKeyObj } = useContext(EthAddressContext);
  const handleGeneratePrivateKey = () => {
    setPrivateKeyObj(getPrivateKey());
  };

  return (
    <HStack mb="100">
      <Box width="70%">
        <FormControl>
          <FormLabel>Private Key</FormLabel>
          <Text fontSize="xl">{privateKeyObj.privateKeyHex}</Text>
          <FormHelperText>
            Click the button to generate your private key
          </FormHelperText>
        </FormControl>
      </Box>
      <Box width="30%">
        <Button width="100%" onClick={handleGeneratePrivateKey}>
          Generate Private Key
        </Button>
      </Box>
    </HStack>
  );
};

export { PrivateKey };
