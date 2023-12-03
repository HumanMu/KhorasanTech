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
  marginBottom: "30px",
};

const cityAndDate = {
  fontSize: "sm",
  textColor: "grey",
};
