import { Box, Text, Heading } from "@chakra-ui/layout";
import { Activity } from "../../models/Activity";
import { HStack, Image } from "@chakra-ui/react"
import Shirdagh from '../../assets/shirdagh.jpg';
import FullActivityImage from "../images/FullActivityImage";

const ActivityCard = ({ activity }: { activity: Activity }) => {
  return (
    <Box {...CardView}>
      <HStack marginBottom={"3px"}>
        <Heading size={"md"}>{activity.title}</Heading>
        <Text {...cityAndDate}>
          {activity.city} {activity.date}
        </Text>
      </HStack>
      <Image
        width="100vh"
        maxH="50vh"
        borderRadius={10}
        src={activity.imageUrl? activity.imageUrl : Shirdagh}
        onClick={()=> <FullActivityImage imageUrl={activity.imageUrl}  /> }
      />
      <Text>{activity.description}</Text>
    </Box>
  );
};

export default ActivityCard;

const CardView = {
  width: "100%",
  paddingBottom: "20px",
  borderBottomWidth: 10,
  borderBottomColor: 'white',
};

const cityAndDate = {
  fontSize: "sm",
  textColor: "grey",
};
