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
      {({ values, handleChange, handleSubmit, errors }) => (
        <form onSubmit={handleSubmit}>
          <FormLabel>Email</FormLabel>
          <InputGroup>
            <Input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              error={errors.email}
            />
          </InputGroup>

          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              error={errors.password}
            />
          </InputGroup>

          <Button type="submit">Login</Button>
        </form>
      )}
    </Formik>
  );
};

export default LoginForm;
