import { ErrorMessage, Formik } from "formik";
import { useStore } from "../../stores/Store";
import { Button, Card, Center, Flex, FormLabel, Input, InputGroup, VStack, Text, CardBody, Link as ChakraLink, Image, } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { Form, Link as ReactRouterLink } from "react-router-dom";
import KhorasanLogo from "./../../assets/WebIcon.png";


export default observer(function LoginForm() {
  const { userStore } = useStore();

  return ( <Formik
      initialValues={{ username: "", password: "", error: null}}
      onSubmit={(values, { setErrors }) =>
        userStore.login(values).catch(() => setErrors({ error: 'Invalid email or password' })
      )}
    >
      {({values, handleChange, handleSubmit, errors }) => (
        <Form onSubmit={handleSubmit}>
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
                    <FormLabel>Username</FormLabel>
                      <InputGroup>
                        <Input
                          type="username"
                          name="username"
                          value={values.username}
                          onChange={handleChange}
                          borderColor={'black'}
                        />
                      </InputGroup>
                      <FormLabel>Password</FormLabel>
                      <InputGroup>
                        <Input
                          type="password"
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                          borderColor={'black'}
                        />
                      </InputGroup>
                      <ErrorMessage name={"error"}
                        render={()=> 
                          <FormLabel 
                            marginBottom={"5px"} 
                            textColor={'yellow'}
                            borderColor={"yellow"}> 
                            {errors.error}
                          </FormLabel>
                        }
                      />
                      <Button {...LoginButton} type="submit">Login</Button>
                    </CardBody>
                    </Card>
                  </CardBody>
                  <ChakraLink {...CreateAccountLink} as={ReactRouterLink} to="/register">
                    Create account
                  </ChakraLink>
                </Card>
              </Flex>
            </Center>
        </Form>
      )}
    </Formik>
  );
});




/*


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
};*/

// Firestore fra minut: 29:45

const LoginButton =  {
  position: "absolute" as const,
  marginTop: "5px",
  marginRight: "20px",
  bg: "green",
  size: "sm",
  borderRadius: "10px",
  padding: "15px",
  _hover: { bg: "#81b182" },
  href: "#",
};

const signInHeader = {
  position: "absolute" as const,
  top: "5px",
  left: "50%",
  transform: "translateX(-50%)",
  fontWeight: "bold",
  fontSize: ["10px", "12px", "15px", "20px"],
  textColor: "black",
};

const CreateAccountLink = {
    position: "absolute" as const,
    bottom: "5px" as const,
    right: "6vw" as const,
    textColor: "black" as const,
    as: "ins" as const,
    fontSize: ["12px", "15", "20px"],
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
  borderColor: "black",
  borderWidth: "1px",
  w: ["80vw", 400, 500, 600],
  minWidth: 400,
  justifyContent: "flex-start",
  padding: "3vw",
};

/*const LoginTextLabel = (tColor: string) => {
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
};*/
const Logo = {
  alt: "Login Logo",
  maxW: "100px",
  maxH: "100px",
};


