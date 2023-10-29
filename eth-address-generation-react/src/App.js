import { NavBar } from "./components/NavBar";
import { Form } from "./components/Form";
import { useState } from "react";
import { createContext } from "react";

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
      <>
        <NavBar />
        <Form />
      </>
    </EthAddressContext.Provider>
  );
}

export default App;
