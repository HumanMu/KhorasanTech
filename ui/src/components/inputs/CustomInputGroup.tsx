import { FormLabel, Input, InputGroup } from "@chakra-ui/react";
import { Field, Form } from "formik";

interface Props {
  label?: string;
  placeHolder?: string;
  name: string;
  type?: string;
  required?: boolean;
}

export default function CustomInputGroup(props: Props) {
  return (
    <Form>
      <Field>
        <FormLabel>{props.label}</FormLabel>
        <InputGroup>
          <Input borderColor={"black"} type="email" name="email" />
        </InputGroup>
      </Field>
    </Form>
  );
}
