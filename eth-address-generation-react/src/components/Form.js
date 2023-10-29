import { Container } from "@chakra-ui/react";
import { PrivateKey } from "./form/PrivateKey";
import { PublicKey } from "./form/PublicKey";
import { EthAddress } from "./form/EthAddress";

const Form = () => {
  return (
    <>
      <Container mt="100" maxW="60%">
        <PrivateKey />
        <PublicKey />
        <EthAddress />
      </Container>
    </>
  );
};

export { Form };
