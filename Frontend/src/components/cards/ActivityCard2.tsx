import { Avatar, Box, Card, 
  CardBody, CardHeader, Flex, 
  Heading, Text, Image, 
  CardFooter, Button, Menu, 
  MenuList, MenuItem, MenuButton, 
  useDisclosure, Drawer, DrawerOverlay, 
  DrawerContent, DrawerCloseButton, 
  DrawerBody, Input, Textarea, } from "@chakra-ui/react";
import { BsThreeDots  } from 'react-icons/bs';
import { BiShareAlt } from "react-icons/bi";
import { FaCommentMedical } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { Activity } from "../../models/Activity";
import Shirdagh from '../../assets/shirdagh.jpg';

export default function ActivityCard2 ({ activity }: { activity: Activity }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    onOpen();
  };

  return (
    <>
    <Card maxW="lg">
      <CardHeader>
        <Flex>
          <Flex flexWrap={"initial"} {...FlexAvatar}>
            <Avatar
              name="Human Muzaffari"
              src="https://www.facebook.com/photo?fbid=6855143707896607&set=a.101171233293922"
            />
            <Box>
              <Heading size="sm">{"Human Muzaffari"} </Heading>
              <Text>{activity.title}</Text>
            </Box>
          </Flex>
          <Menu>
            <MenuButton {...MenuBtn} rightIcon={<BsThreeDots />}
            />
            <MenuList>
              <MenuItem onClick={handleClick}>Edit</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Report</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>
          With Chakra UI, I wanted to sync the speed of development with the
          speed of design. I wanted the developer to be just as excited as the
          designer to create a screen.
        </Text>
      </CardBody>
      <Image
        objectFit="cover"
        src={activity.imageUrl ? activity.imageUrl : Shirdagh}
        alt={`An image from ${activity.title}`}
      />

      <CardFooter {...Footer} flexWrap="wrap">
        <Button {...Buttons} leftIcon={<FcLike />}>           Like </Button>
        <Button {...Buttons} leftIcon={<FaCommentMedical />}> Comment </Button>
        <Menu>              
          <MenuButton {...MenuBtn} leftIcon={<BiShareAlt/>}>  Share </MenuButton>
          <MenuList>
            <MenuItem icon={<FaFacebook color={"blue"} />}>   Facebook</MenuItem>
            <MenuItem icon={<FaInstagramSquare color={"#860c0c"}/>}> Instagram </MenuItem>
            <MenuItem icon={<FaTiktok />}>Tiktok</MenuItem>
          </MenuList>
        </Menu>
      </CardFooter>
    </Card>
    <Drawer onClose={onClose} isOpen={isOpen} size={"xl"}>
  <Box marginBottom={10}>
    <DrawerOverlay scrollSnapType={'both'} />
    <DrawerContent
      padding={'3vw'}
      borderWidth={2}
      borderLeftRadius={10}
      overflowY="auto" // Set overflow-y to auto
    >
      <DrawerCloseButton />
      <Image marginBottom={5} boxSize={'inherit'} src={activity.imageUrl ? activity.imageUrl : Shirdagh} />
      <Box borderWidth={2} borderRadius={10} padding={5} marginBottom={50}>
        <Input {...Header} defaultValue={activity.title} />
        <DrawerBody padding={0}>
          <Textarea
            marginBottom={'10px'}
            contentEditable={'true'}
            h={'200px'}
            whiteSpace={'pre-wrap'}
            focusBorderColor={'false'}
            maxBlockSize={250}
            defaultValue={activity.description}
          />
        </DrawerBody>
        <Button backgroundColor={'red'} textColor={'white'} marginTop={3}>
          Save
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
}

const FlexAvatar = {
  flex:'1',
  gap: '4',
  alignItems: 'center',
};

const Buttons = {
  variant:'ghost',
  as:Button,
  backgroundColor: 'white'
}

const Footer = {
  justify:'space-between',
}

const MenuBtn = {
  as: Button,
  fontSize: "16px",
  cursor: "pointer",
  backgroundColor: "white",
  py: 0,
}

