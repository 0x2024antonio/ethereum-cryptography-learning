import { Flex, Spacer, Button, Heading, Input, Text } from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useState } from "react";

import { useAccount } from "wagmi";

import {
  useContractRead,
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";

import { address, abi } from "./MyContract";

function App() {
  const [inputGreeting, setInputGreeting] = useState("");

  const { isConnected } = useAccount();

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
    <Flex direction={"column"} height={"100vh"} bg={"#282c34"}>
      <Flex direction={"row"} justifyContent={"space-between"} px={5}>
        <Heading color={"white"}>Storage Dapp</Heading>
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
        {!isConnected && (
          <Heading color={"white"}>Please connect to your wallet</Heading>
        )}
        {isConnected && <Heading color={"white"}>{contractGreeting}</Heading>}
        <Spacer />
        <Input
          color={"white"}
          placeholder="Set Greeting here..."
          width={"30%"}
          onChange={(e) => {
            setInputGreeting(e.target.value);
          }}
          isDisabled={!isConnected}
        />
        <Button
          isDisabled={!isConnected || !write || isLoading}
          onClick={write}
        >
          Set Greeting
        </Button>
        {isSuccess && <Text color={"white"}>Success!</Text>}
        {(isPrepareError || isWriteError) && (
          <Text color={"white"}> {(prepareError || writeError)?.message}</Text>
        )}
      </Flex>
    </Flex>
  );
}

export default App;
