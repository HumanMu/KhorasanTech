import { Avatar, Box, Card, CardBody, CardHeader, Flex, Heading, Text, Image, CardFooter, Button, Menu, MenuList, MenuItem, MenuButton, } from "@chakra-ui/react";
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

  return (
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
            <MenuButton
              as={Button}
              rightIcon={<BsThreeDots />}
              iconSpacing={0}
              fontSize="16px"
              cursor="pointer"
              backgroundColor="white"
              justifyContent={"center"}
              py={0}
            />
            <MenuList>
              <MenuItem>Edit</MenuItem>
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
        <Button {...Buttons} leftIcon={<FcLike />}>
          {" "}
          Like{" "}
        </Button>
        <Button {...Buttons} leftIcon={<FaCommentMedical />}>
          {" "}
          Comment{" "}
        </Button>
        <Menu>
          <MenuButton
            as={Button}
            leftIcon={<BiShareAlt />}
            fontSize="16px"
            cursor="pointer"
            backgroundColor="white"
            py={0}
          >
            Share
          </MenuButton>
          <MenuList>
            <MenuItem icon={<FaFacebook color={"blue"} />}>Facebook</MenuItem>
            <MenuItem icon={<FaInstagramSquare color={"#860c0c"} />}>
              Instagram
            </MenuItem>
            <MenuItem icon={<FaTiktok />}>Tiktok</MenuItem>
          </MenuList>
        </Menu>
      </CardFooter>
    </Card>
  );
}
//<Button {...Buttons} leftIcon={<BiShareAlt />}>        Share </Button>

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
