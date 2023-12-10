
import { ErrorMessage, Formik } from "formik";
import { useStore } from "../../stores/Store";
import { Button, Card, Center, Flex, FormLabel, Input, InputGroup, VStack, Text, CardBody, Link as ChakraLink, Image } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { Form, Link as ReactRouterLink } from "react-router-dom";
import KhorasanLogo from "./../../assets/WebIcon.png";

export default observer(function SignUp() {
  const { userStore } = useStore();

  return ( <Formik
      initialValues={{ 
        username: "", 
        email: "", 
        firstname: "",
        lastname: "",
        password: "", 
        repassword: "", 
        error: null
      }}
      onSubmit={(values, { setErrors }) => {
        
        if(values.password === values.repassword){
          userStore.register(values).catch(() => setErrors({ error: "The username is taken" }))
        }
        else{
          setErrors({error: "Your password are not the same"})
        }
        
      }}
    >
      {({values, handleChange, handleSubmit, errors }) => (
        <Form onSubmit={handleSubmit}>
          <Center {...CenterStyle}>
            <Flex direction="column" align="center">
              <VStack as="header" spacing="6" mt="5">
                <Image src={KhorasanLogo} {...Logo} />
              </VStack>
              <Card {...ParentCard}>
                <Text {...signInHeader}> Signup to Khorasan Technology</Text>
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
                    <FormLabel>First name</FormLabel>
                      <InputGroup>
                        <Input
                          type="text"
                          name="firstname"
                          value={values.firstname}
                          onChange={handleChange}
                          borderColor={'black'}
                        />
                      </InputGroup>
                    <FormLabel>Last name</FormLabel>
                      <InputGroup>
                        <Input
                          type="text"
                          name="lastname"
                          value={values.lastname}
                          onChange={handleChange}
                          borderColor={'black'}
                        />
                      </InputGroup>
                      <FormLabel>Email</FormLabel>
                      <InputGroup>
                        <Input
                          type="email"
                          name="email"
                          value={values.email}
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
                      <FormLabel>Re-password</FormLabel>
                      <InputGroup>
                        <Input
                          type="password"
                          name="repassword"
                          value={values.repassword}
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
                    <Button {...SignUpButton} type="submit">Register</Button>
                    </CardBody>
                    </Card>
                  </CardBody>
                  <ChakraLink {...CreateAccountLink} as={ReactRouterLink} to="/login">
                    Have already an accoun? Login here
                  </ChakraLink>
                </Card>
              </Flex>
            </Center>
        </Form>
      )}
    </Formik>
  );
});

const CenterStyle = {
  marginTop: ["0px", "50px"],
  marginBottom: ["0px", "100px"]
}
const SignUpButton =  {
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

const Logo = {
  alt: "Login Logo",
  maxW: "100px",
  maxH: "100px",
};