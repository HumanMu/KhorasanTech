import {  Formik } from "formik";
import { Input, InputGroup, FormLabel, Button } from "@chakra-ui/react";
import { useStore } from "../../stores/Store";

const LoginForm = () => {
  const { userStore } = useStore();
  return (
    <Formik
      initialValues={{ username: "", password: "", error: null}}
      onSubmit={(values, { setErrors }) =>
        userStore.login(values).catch(() => setErrors({ error: 'Invalid email or password' })
      )}
    >
      {({ values, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <FormLabel>Username</FormLabel>
          <InputGroup>
            <Input
              type="username"
              name="username"
              value={values.username}
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
