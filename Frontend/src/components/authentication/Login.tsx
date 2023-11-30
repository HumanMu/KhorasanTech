import {
  Text,
  VStack,
  Image,
  FormControl,
  FormLabel,
  Card,
  Button,
} from "@chakra-ui/react";
import {
  Input,
  Center,
  Flex,
  CardBody,
  Stack,
  HStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import KhorasanLogo from "./../../assets/WebIcon.png";
import { useEffect, useState } from "react";

export const Login = () => {
  const linkProps = CreateAccountLink();
  const LoginButtonProps = LoginButton();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {}, []);

  function handleSignupSubmitting() {
    setSubmitting(true);
  }

  return (
    <>
      <Center marginTop={["0px", "50px"]}>
        <Flex direction="column" align="center">
          <VStack as="header" spacing="6" mt="5">
            <Image src={KhorasanLogo} {...Logo} />
          </VStack>
          <Card {...ParentCard}>
            <Text {...signInHeader}> Sign in to Khorasan Technology</Text>
            <CardBody style={{ position: "relative" }}>
              <Card {...CardOuter}>
                <CardBody style={{ position: "relative" }}>
                  <Stack>
                    <VStack>
                      <FormControl>
                        <FormLabel htmlFor="text" {...LoginTextLabel("white")}>
                          <Text>Username</Text>
                        </FormLabel>
                        <Input
                          id="username"
                          {...InputFormText}
                          onChange={(e) => setUsername(e.target.value)}
                        ></Input>
                      </FormControl>
                    </VStack>
                    <FormControl>
                      <HStack justifyContent="space-between">
                        <FormLabel
                          htmlFor="password"
                          {...LoginTextLabel("white")}
                        >
                          <Text>Password</Text>
                        </FormLabel>
                        <ChakraLink {...LoginTextLabel("#001a2e")}>
                          <Text>Forgot password?</Text>
                        </ChakraLink>
                      </HStack>
                      <Input
                        id="password"
                        {...InputFormPassword}
                        onChange={(e) => setPassword(e.target.value)}
                      ></Input>
                    </FormControl>
                  </Stack>
                  <Button
                    id="submit"
                    {...LoginButtonProps}
                    style={{ position: "absolute", right: 0 }}
                    onClick={handleSignupSubmitting}
                  >
                    <Text>Login</Text>
                  </Button>
                </CardBody>
              </Card>
            </CardBody>
            <ChakraLink {...linkProps} as={ReactRouterLink} to="/register">
              Create account
            </ChakraLink>
          </Card>
        </Flex>
      </Center>
    </>
  );
};

// Firestore fra minut: 29:45
const Logo = {
  alt: "Login Logo",
  maxW: "100px",
  maxH: "100px",
};

const signInHeader = {
  position: "absolute" as const,
  top: "5px",
  left: "50%",
  transform: "translateX(-50%)",
  fontWeight: "bold",
  fontSize: ["10px", "12px", "15px", "20px"],
  textColor: "white",
};

const CreateAccountLink = () => {
  return {
    position: "absolute" as const,
    bottom: "5px" as const,
    right: "6vw" as const,
    textColor: "black" as const,
    as: "ins" as const,
    fontSize: ["12px", "15", "20px"],
  };
};

const ParentCard = {
  bg: "#db3e00", // Background
  borderRadius: "10px",
  justifyContent: "center",
  marginTop: "10px",
  padding: "3vw",
};

const CardOuter = {
  bg: "#db3e00", // Background
  variant: "outline",
  borderRadius: "10px",
  borderWidth: "2px",
  w: ["80vw", 200, 300, 400, 500, 600],
  justifyContent: "flex-start",
  padding: "3vw",
};

const LoginTextLabel = (tColor: string) => {
  return {
    fontSize: ["xs", "sm", "md"],
    textColor: tColor != "" ? tColor : "black",
  };
};

const InputFormText = {
  type: "text",
  bg: "white",
  borderColor: "#2f2724",
  borderRadius: "10px",
  height: "30px",
  autoComplete: "email",
};

const InputFormPassword = {
  type: "password",
  bg: "white",
  borderColor: "#2f2724",
  borderRadius: "10px",
  height: "30px",
  autoComplete: "off",
};

const LoginButton = () => {
  return {
    position: "absolute" as const,
    marginTop: "5px" as const,
    marginRight: "20px",
    bg: "green" as const,
    size: "sm" as const,
    borderRadius: "10px" as const,
    padding: "15px" as const,
    _hover: { bg: "#81b182" } as const,
    href: "#",
  };
};
