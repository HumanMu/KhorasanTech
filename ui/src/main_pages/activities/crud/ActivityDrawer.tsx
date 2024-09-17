import { Box, Button, FormErrorMessage, useDisclosure } from "@chakra-ui/react";
import {Drawer, DrawerOverlay,
  DrawerContent, DrawerCloseButton,
  DrawerBody, Input, Textarea,
  FormControl, FormLabel, Image,
} from "@chakra-ui/react";
import { v4 as uuidv4 } from 'uuid';
import { ChangeEvent, useEffect, useState } from "react";
import { Activity } from "../../../models/Activity";
import { useStore } from "../../../stores/Store";
import FileUpload from "./FileUpload";


interface Props {
  activity?: Activity | undefined;
  closeEditMode: () => void;
  isCreateActivity: boolean;
}


export default function ActivityDrawer({
  activity: selectedActivity,
  closeEditMode,
  isCreateActivity,
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
  }, []);

  const [images, setImages] = useState<File[]>([]);

  const handleImageChange = (newImages: File[]) => {
    console.log("Image path: ", newImages);
    setImages(newImages);
  };


  function handleInputChanges(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value }); // "name" er nøglen til hvilken element er der sket en ændring i
  }

  function handleEditSubmit() {
    closeEditMode();
    activityStore.editActivity(activity);
    console.log("Edit activity: ");
    onClose();
  }

  function handleCancelSubmit() {
    closeEditMode();
    onClose();
  }

  async function handleCreateSubmit() {
    const formData = new FormData();
    formData.append('file', images[0]);
  
    const imageUrl = URL.createObjectURL(images[0]);

    const newActivity : Activity = {
      id: uuidv4(),
      title: activity.title,
      description: activity.description,
      date: new Date().toISOString(),
      category: activity.category,
      city: activity.city,
      venue: activity.venue,
      imageUrl: imageUrl,
    }

    await activityStore.createActivity(newActivity);
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
            { activity.imageUrl? (<Image
              borderRadius={10}
              marginBottom={5}
              src={activity.imageUrl}
            />) : <FileUpload onImageChange={handleImageChange}/>}
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
                <FormErrorMessage>Title is required</FormErrorMessage>
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
                  <FormErrorMessage>Description is required</FormErrorMessage>
                </FormControl>
              </DrawerBody>
              <Button
                backgroundColor={"red"}
                textColor={"white"}
                marginTop={2}
                onClick={isCreateActivity? handleCreateSubmit : handleEditSubmit}
                isDisabled={activity.description.trim() === "" || activity.title.trim() === ""}
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
