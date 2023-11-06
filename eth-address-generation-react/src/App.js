import { NavBar } from "./components/NavBar";
import { Form } from "./components/Form";
import { Footer } from "./components/Footer";
import { useState } from "react";
import { createContext } from "react";

import { Flex, Spacer } from "@chakra-ui/react";

export const EthAddressContext = createContext(null);

function App() {
  const [privateKeyObj, setPrivateKeyObj] = useState({});
  const [publicKeyObj, setPublicKeyObj] = useState({});
  const [ethAddress, setEthAddress] = useState("");

  return (
    <EthAddressContext.Provider
      value={{
        privateKeyObj,
        setPrivateKeyObj,
        publicKeyObj,
        setPublicKeyObj,
        ethAddress,
        setEthAddress,
      }}
    >
      <Flex direction={"column"} height={"100vh"}>
        <NavBar />
        <Form />
        <Spacer />
        <Footer />
      </Flex>
    </EthAddressContext.Provider>
  );
}

export default App;
