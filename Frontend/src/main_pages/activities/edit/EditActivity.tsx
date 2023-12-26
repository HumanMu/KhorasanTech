import { Box, Button, useDisclosure } from "@chakra-ui/react";
import {Drawer, DrawerOverlay,
  DrawerContent, DrawerCloseButton,
  DrawerBody, Input, Textarea,
  FormControl, FormLabel, Image,

} from "@chakra-ui/react";
import { ChangeEvent, useEffect, useState } from "react";
import { Activity } from "../../../models/Activity";
import Shirdagh from "../../../assets/shirdagh.jpg"
import { useStore } from "../../../stores/Store";


interface Props {
  activity: Activity | undefined;
  closeEditMode: () => void;
}


export default function EditActivity({
  activity: selectedActivity,
  closeEditMode,
}: Props) {
  const initialState = selectedActivity || {
    // spørgsmåltegnerne betyder, hvis aktivitien er tomme, så skal den erstates med hvad der står til højre for prameteren, dvs. ingenting
    id: "",
    title: "",
    date: "",
    description: "",
    category: "",
    city: "",
    venue: "",
    imageUrl: "",
  };
  const [activity, setActivity] = useState(initialState);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { activityStore } = useStore();

  useEffect(() => {
    setActivity(selectedActivity || initialState);
    onOpen();
  }, [selectedActivity, initialState]);

  function handleInputChanges(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value }); // "name" er nøglen til hvilken element er der sket en ændring i
  }

  function handleEditSubmit() {
    closeEditMode();
    activityStore.editActivity(activity);
    onClose();
  }

  function handleCancelSubmit() {
    closeEditMode();
    onClose();
  }

  return (
    <>
      <Drawer size={"xl"} isOpen={isOpen} onClose={handleCancelSubmit}>
        <Box marginBottom={10} height={"100%"}>
          <DrawerOverlay scrollSnapType={"both"} />
          <DrawerContent
            padding={"3vw"}
            borderWidth={2}
            borderLeftRadius={10}
            overflowY="auto" // Set overflow-y to auto
          >
            <DrawerCloseButton />
            <Image
              borderRadius={10}
              marginBottom={5}
              src={activity.imageUrl ? activity.imageUrl : Shirdagh}
            />
            <Box borderRadius={10} marginBottom={50}>
              <FormControl isRequired>
                <FormLabel marginTop={2} marginBottom={0}>
                  Title
                </FormLabel>
                <Input
                  {...Header}
                  focusBorderColor="red"
                  name="title"
                  value={activity.title}
                  onChange={handleInputChanges}
                />
              </FormControl>
              <DrawerBody padding={0}>
                <FormControl isRequired>
                  <FormLabel marginTop={2} marginBottom={0}>
                    Description
                  </FormLabel>
                  <Textarea
                    h={"200px"}
                    whiteSpace={"pre-wrap"}
                    focusBorderColor="red"
                    name="description"
                    value={activity.description}
                    onChange={handleInputChanges}
                  />
                </FormControl>
              </DrawerBody>
              <Button
                backgroundColor={"red"}
                textColor={"white"}
                marginTop={2}
                onClick={handleEditSubmit}
              >
                Save
              </Button>
              <Button
                backgroundColor={"red"}
                textColor={"white"}
                marginTop={2}
                onClick={handleCancelSubmit}
              >
                Cancel
              </Button>
            </Box>
          </DrawerContent>
        </Box>
      </Drawer>
    </>
  );
}

const Header = {
  fontWeight: 'bold',
  fontSize: 20,
  focusBorderColor: 'red',
}
// For inspiration https://blog.tubikstudio.com/types-of-web-pages/
