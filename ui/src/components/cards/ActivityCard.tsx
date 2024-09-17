import { Avatar, Box, Card,
  CardBody, CardHeader, Flex,
  Heading, Text, Image,
  CardFooter, Button, Menu,
  MenuList, MenuItem, MenuButton, HStack, Textarea, VStack,
} from "@chakra-ui/react";
import { BsThreeDots  } from 'react-icons/bs';
import { BiShareAlt } from "react-icons/bi";
import { FaCommentMedical } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { Activity } from "../../models/Activity";
import Shirdagh from '../../assets/shirdagh.jpg';
import { ChangeEvent, useEffect, useState } from "react";
import { useStore } from "../../stores/Store";
import ActivityDrawer from "../../main_pages/activities/crud/ActivityDrawer";
import { CommentPost } from "../../models/Comment";
import { observer } from "mobx-react-lite";


interface Props {
  activity: Activity ;
}


const ActivityCard: React.FC<Props> = observer(({ activity }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isComment, setIsComment] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const [comments, setComments] = useState<CommentPost[]>([]);
  const [comment, setComment] = useState("");
  const {activityStore, commentStore} = useStore();

  useEffect(() => {
    /*const initialComments = commentStore.comments
        .filter((c) => c.activityId === activity.id)
        .map((c) => {
          const splitDate = c.datetime.split("T")[0];
          c.datetime = splitDate;
          return c;
        });*/
    const com = commentStore.comments
    setComments(com);
  }, [commentStore, activity.id]);

  function handleEdit(isEditing: boolean) {
    setIsEditing(isEditing);
  }
  function handleDelete() {
    activityStore.deleteActivity(activity.id);
  }

  async function handleInputChanges(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setComment(event.target.value);
  }

  async function handleCreateComment() {
    setIsComment(false);
    if(comment === "") {
      return;
    }
    const newComment : CommentPost = {
      activityId: activity.id,
      comment: comment,
      datetime: new Date().toISOString(),
      likes: 0,
      dislikes: 0,
    } // "name" er nøglen til hvilken element er der sket en ændring i

    await commentStore.createComment(newComment);
  }

  async function handleComment() {
    setIsComment(isComment? false : true);
    setShowComment(isComment);
    try {
      await commentStore.loadComments(activity.id);
    } catch (error) {
      console.error("Error loading comments: ", error);
    }
  }

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
                <HStack>
                  <Text>{activity.title} | </Text>
                  <Text {...DateDesign}>{activity.date}</Text> 
                </HStack>
              </Box>
            </Flex>
            <Menu>
              <MenuButton {...MenuBtn} rightIcon={<BsThreeDots />} />
              <MenuList>
                <MenuItem {...MItems} onClick={() => handleEdit(true)}>
                  Edit
                </MenuItem>
                <MenuItem {...MItems} onClick={handleDelete}> Delete</MenuItem>
                <MenuItem {...MItems}> Report</MenuItem>
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
          src={activity?.imageUrl ? activity.imageUrl : Shirdagh}
          alt={`An image from ${activity?.title}`}
        />

        <CardFooter {...Footer} flexWrap="-moz-initial">
          <Button {...Buttons} leftIcon={<FcLike />}>
            Like
          </Button>
          <Button {...Buttons} 
            leftIcon={<FaCommentMedical />}
            onClick={handleComment}>
            Comment
          </Button>
          <Menu>
            <MenuButton {...MenuBtn} leftIcon={<BiShareAlt />}>
              Share
            </MenuButton>
            <MenuList>
              <MenuItem {...MItems} icon={<FaFacebook color={"blue"} />}>
                Facebook
              </MenuItem>
              <MenuItem
                {...MItems}
                icon={<FaInstagramSquare color={"#860c0c"} />}
              >
                Instagram
              </MenuItem>
              <MenuItem {...MItems} icon={<FaTiktok />}>
                Tiktok
              </MenuItem>
            </MenuList>
          </Menu>
        </CardFooter>
        {isComment && (
          <VStack alignContent={"flex-end"}>
            <Textarea
              style={{
                whiteSpace: "pre-wrap",
                borderColor: "black",
                width: `calc(100% - 20px)`,
              }}
              
              margin={"10px 10px 0px 10px"}
              name="comment"
              value={comment}
              onChange={handleInputChanges}
              placeholder="Write a comment..."
            />
            <HStack {...ButtonsParent} >
              <Button {...CommentButtons} 
                onClick={handleCreateComment}
              >Post</Button>
              <Button {...CommentButtons} onClick={() => setIsComment(false)}>Cancel</Button>
            </HStack>
            {showComment && (
              comments.map((com, index) => (
                <Text key={index}>{com.comment}</Text>                
              ))
            )}
          </VStack>
        )}
      </Card>
      {isEditing && (
        <ActivityDrawer
          activity={activity}
          isCreateActivity={false}
          closeEditMode={() => handleEdit(false)}
        />
      )}
    </>
  );
});

export default ActivityCard;

const DateDesign = {
  fontSize: "sm",
  color: "gray.400",
}

const MItems = {
  width: 'fit-content',
}

const FlexAvatar = {
  flex:'1',
  gap: '4',
  alignItems: 'center',
};

const Buttons = {
  variant:'ghost',
  as:Button,
  backgroundColor: 'white',
}

const ButtonsParent = {
  width:"100%",
  justifyContent:"flex-end",
  margin: "0px 30px 10px 10px",
  
}

const CommentButtons = {
  backgroundColor: 'red',
  color: 'white',
  as:Button,
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

