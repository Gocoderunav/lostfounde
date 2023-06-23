

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import {
  FaCode,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { ReactNode } from "react";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      mt={8} // Add margin top of 8 (adjust the value as per your preference)
      py={4} // Add padding y of 4 (adjust the value as per your preference)
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>© Gaurav Gangwar</Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"Github"} href={"https://github.com/Gocoderunav"}>
            <FaGithub />
          </SocialButton>
         
          <SocialButton
            label={"linkdin"}
            href={"https://www.linkedin.com/in/gaurav-gangwar-a34110229/"}
          >
            <FaLinkedin />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}