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
import { getEthAddress } from "../../lib/tools.mjs";

const EthAddress = () => {
  const { publicKeyObj, ethAddress, setEthAddress } =
    useContext(EthAddressContext);
  const [isError, setIsError] = useState(false);
  const validate = () => !publicKeyObj.hasOwnProperty("publicKey");
  const handleDeriveEthAddress = () => {
    if (validate()) {
      setIsError(true);
    } else {
      setEthAddress(getEthAddress(publicKeyObj.publicKey));
      setIsError(false);
    }
  };
  return (
    <HStack mb="100">
      <Box width="70%">
        <FormControl isInvalid={isError}>
          <FormLabel>Ethereum Address</FormLabel>
          <Text fontSize="xl">{ethAddress}</Text>
          {!isError ? (
            <FormHelperText>
              Click the button to derive your ETH address from the public key
            </FormHelperText>
          ) : (
            <FormErrorMessage>
              You have to derive your public key first
            </FormErrorMessage>
          )}
        </FormControl>
      </Box>
      <Box width="30%">
        <Button width="100%" onClick={handleDeriveEthAddress}>
          Derive ETH Address
        </Button>
      </Box>
    </HStack>
  );
};

export { EthAddress };
