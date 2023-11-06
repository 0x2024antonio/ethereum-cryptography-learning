import {
  Flex,
  Heading,
  Spacer,
  Text,
  HStack,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";

import {
  //SiFacebook,
  SiTwitter,
  SiGithub,
  SiLinkedin,
  SiSubstack,
} from "react-icons/si";

const Footer = () => {
  const bg = useColorModeValue("gray.100", "gray.900");

  return (
    <footer>
      <Flex px={6} alignItems="Center" bg={bg}>
        <Heading size="md">Ethereum and Defi Research</Heading>
        <Spacer />
        <Text fontSize="sm">
          Copyright &copy; {new Date().getFullYear()} Antonio Sze-To
        </Text>
        <Spacer />
        <HStack spacing={1}>
          <IconButton
            bg={bg}
            aria-label="Substack"
            icon={<SiSubstack />}
          ></IconButton>
          <IconButton
            bg={bg}
            aria-label="Twitter"
            icon={<SiTwitter />}
          ></IconButton>
          <IconButton
            bg={bg}
            aria-label="LinkedIn"
            icon={<SiLinkedin />}
          ></IconButton>
          <IconButton
            bg={bg}
            aria-label="Github"
            icon={<SiGithub />}
          ></IconButton>
        </HStack>
      </Flex>
    </footer>
  );
};

export { Footer };
