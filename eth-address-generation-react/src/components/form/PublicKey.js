import {
  Box,
  HStack,
  Text,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

import { useState, useContext } from "react";
import { EthAddressContext } from "../../App";
import { getPublicKey } from "../../lib/tools.mjs";

const PublicKey = () => {
  const { privateKeyObj, publicKeyObj, setPublicKeyObj } =
    useContext(EthAddressContext);
  const [isError, setIsError] = useState(false);
  const validate = () => !privateKeyObj.hasOwnProperty("privateKey");
  const handleDerivePublicKey = () => {
    if (validate()) {
      setIsError(true);
    } else {
      setPublicKeyObj(getPublicKey(privateKeyObj.privateKey));
      setIsError(false);
    }
  };
  return (
    <HStack mb="100">
      <Box width="70%">
        <FormControl isInvalid={isError}>
          <FormLabel>Public Key</FormLabel>
          <Text fontSize="xl">{publicKeyObj.publicKeyHex}</Text>
          {!isError ? (
            <FormHelperText>
              Click the button to derive your public key from your private key
            </FormHelperText>
          ) : (
            <FormErrorMessage>
              You have to generate private key first
            </FormErrorMessage>
          )}
        </FormControl>
      </Box>
      <Box width="30%">
        <Button width="100%" onClick={handleDerivePublicKey}>
          Derive Public Key
        </Button>
      </Box>
    </HStack>
  );
};

export { PublicKey };
