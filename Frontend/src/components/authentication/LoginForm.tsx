import { Formik } from "formik";
import { Input, InputGroup, FormLabel, Button } from "@chakra-ui/react";

const LoginForm = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => {
        // Handle form submission
        console.log(values);
      }}
    >
      {({ values, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <FormLabel>Email</FormLabel>
          <InputGroup>
            <Input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
          </InputGroup>

          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
          </InputGroup>

          <Button type="submit">Login</Button>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
