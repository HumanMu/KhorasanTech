import {
  VStack,
  Image,
  FormControl,
  FormLabel,
  Card,
  Text,
} from "@chakra-ui/react";
import {
  Input,
  Center,
  Flex,
  CardBody,
  Stack,
  Button,
  Link as ChakraLink,
} from "@chakra-ui/react";
import KhorasanLogo from "./../../assets/WebIcon.png";
import { Link as ReactRouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const SignUp = () => {
  const LoginLinkProps = LoginLink();
  const SignUpButton = RegisterButton();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const signUp = async () => {
    try {
      // Sign up here
    } catch (e) {
      console.log("Login failed!");
    }
  };

  return (
    <>
      <Center {...ContentMargin}>
        <Flex direction="column" align="center">
          <VStack as="header" spacing="6" mt="5">
            <Image src={KhorasanLogo} {...SignUpLogo} />
          </VStack>
          <Card {...ParentCard}>
            <Text {...signUpHeader}> Sign up to Khorasan Technology</Text>
            <CardBody style={{ position: "relative" }}>
              <Card {...CardOuter}>
                <CardBody style={{ position: "relative" }}>
                  <Stack>
                    <VStack>
                      <FormControl>
                        <FormLabel {...LoginTextLabel("white")}>
                          {" "}
                          Name
                        </FormLabel>
                        <Input
                          {...InputFormUsername}
                          onChange={(e) => setName(e.target.value)}
                        ></Input>
                        <FormLabel {...LoginTextLabel("white")}>
                          {" "}
                          Last name
                        </FormLabel>
                        <Input
                          {...InputFormUsername}
                          onChange={(e) => setLastName(e.target.value)}
                        ></Input>
                        <FormLabel {...LoginTextLabel("white")}>
                          {" "}
                          Email address
                        </FormLabel>
                        <Input
                          {...InputFormUsername}
                          onChange={(e) => setEmail(e.target.value)}
                        ></Input>
                      </FormControl>
                    </VStack>
                    <FormControl>
                      <FormLabel {...LoginTextLabel("white")}>
                        {" "}
                        Password
                      </FormLabel>
                      <Input
                        {...InputFormPassword}
                        onChange={(e) => setPassword(e.target.value)}
                      ></Input>
                      <FormLabel {...LoginTextLabel("white")}>
                        {" "}
                        Re-enter Password
                      </FormLabel>
                      <Input
                        {...InputFormPassword}
                        onChange={(e) => setRePassword(e.target.value)}
                      ></Input>
                    </FormControl>
                  </Stack>
                  <Button
                    {...SignUpButton}
                    onClick={signUp}
                    style={{ position: "absolute", right: 0 }}
                  >
                    {" "}
                    SignUp{" "}
                  </Button>
                </CardBody>
              </Card>
            </CardBody>
            <ChakraLink {...LoginLinkProps} as={ReactRouterLink} to="/login">
              Have already an account? Login
            </ChakraLink>
          </Card>
        </Flex>
      </Center>
    </>
  );
};

const ContentMargin = {
  marginTop: ["0px", "50px"],
  marginBottom: ["0px", "50px"],
};

const SignUpLogo = {
  alt: "Login Logo",
  maxW: "100px",
  maxH: "100px",
};

const LoginLink = () => {
  return {
    position: "absolute" as const,
    bottom: "5px" as const,
    right: "6vw" as const,
    textColor: "black" as const,
    as: "ins" as const,
    fontSize: ["12px", "15", "20px"],
  };
};

const signUpHeader = {
  position: "absolute" as const,
  top: "5px",
  left: "50%",
  transform: "translateX(-50%)",
  fontWeight: "bold",
  fontSize: ["10px", "12px", "15px", "20px"],
  textColor: "white",
};

const ParentCard = {
  bg: "#db3e00", // Background
  borderRadius: "10px",
  justifyContent: "relative",
  marginTop: "10px",
  padding: "3vw",
};

const CardOuter = {
  bg: "#db3e00", // Background
  variant: "outline",
  borderRadius: "10px",
  justifyContent: "flex-start",
  borderWidth: "2px",
  w: [150, 200, 300, 400, 500, 600],
  padding: "3vw",
};

const LoginTextLabel = (tColor: string) => {
  return {
    fontSize: ["xs", "sm", "md"],
    textColor: tColor != "" ? tColor : "black",
  };
};

const InputFormUsername = {
  type: "text",
  bg: "white",
  borderColor: "#2f2724",
  borderRadius: "10px",
  height: "30px",
};

const InputFormPassword = {
  type: "password",
  bg: "white",
  borderColor: "#2f2724",
  borderRadius: "10px",
  height: "30px",
};

const RegisterButton = () => {
  return {
    position: "absolute" as const,
    marginTop: "5px" as const,
    marginRight: "20px",
    bg: "green" as const,
    size: "sm" as const,
    borderRadius: "10px" as const,
    padding: "15px" as const,
    _hover: { bg: "#81b182" } as const,
  };
};
