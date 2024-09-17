import { FormControl, FormLabel, Textarea } from "@chakra-ui/react";
import { useState } from "react";


export default function AddActivity () {
  const [inputValue, setInputValue] = useState("");

  function handleInputChanges() {


  }
  return (
    <>
      <FormControl>
        <FormLabel marginTop={1} marginBottom={0}> What do you want to weite about</FormLabel>
        <FormLabel marginTop={1} marginBottom={0}>
          Description
        </FormLabel>
        <Textarea
          whiteSpace={"pre-wrap"}
          focusBorderColor="red"
          name="description"
          value={inputValue}
          onChange={handleInputChanges}
        />
      </FormControl>
    </>
  );

}