import { Flex, Spacer, Button, Heading, Input, Text } from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useState } from "react";

import {
  useContractRead,
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";

import { address, abi } from "./MyContract";

function App() {
  const [inputGreeting, setInputGreeting] = useState("");

  const { data: contractGreeting } = useContractRead({
    address: address,
    abi: abi,
    functionName: "getGreeting",
    watch: true,
  });

  const {
    config: writeConfig,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    address: address,
    abi: abi,
    functionName: "setGreeting",
    args: [inputGreeting],
  });

  const {
    data: writeData,
    error: writeError,
    isError: isWriteError,
    write,
  } = useContractWrite(writeConfig);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: writeData?.hash,
  });

  return (
    <Flex direction={"column"} height={"100vh"}>
      <Flex direction={"row"} justifyContent={"space-between"} px={5}>
        <Heading>Storage Dapp</Heading>
        <ConnectButton />
      </Flex>
      <Flex
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"60%"}
        gap={5}
      >
        <Spacer />
        <Heading>{contractGreeting}</Heading>
        <Spacer />
        <Input
          placeholder="Set Greeting here..."
          width={"30%"}
          onChange={(e) => {
            setInputGreeting(e.target.value);
          }}
        />
        <Button isDisabled={!write || isLoading} onClick={write}>
          Set Greeting
        </Button>
        {isSuccess && <Text>Success!</Text>}
        {(isPrepareError || isWriteError) && (
          <Text> {(prepareError || writeError)?.message}</Text>
        )}
      </Flex>
    </Flex>
  );
}

export default App;
