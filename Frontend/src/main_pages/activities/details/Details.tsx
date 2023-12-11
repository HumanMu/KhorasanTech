import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure } from "@chakra-ui/react";


export function DetailsActivity() {
  const { isOpen, onOpen, onClose } = useDisclosure();


  const handleClick = () => {
    onOpen();
  };


  return (
    <>
      <Button onClick={() => handleClick()}></Button>


    </>
  );
}



const Images = {
  flex: 1,
  height: "40vh",
};

// For inspiration https://blog.tubikstudio.com/types-of-web-pages/
