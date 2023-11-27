import { Box, Text, Heading } from "@chakra-ui/layout";
import { Activity } from "../models/Activity";

const ActivityCard = ({ activity }: { activity: Activity }) => {
  return (
    <Box {...CardView}>
      <Heading size={"md"}>{activity.title}</Heading>
      <Text {...cityAndDate}>
        {" "}
        {activity.city} {activity.date}{" "}
      </Text>
      <Text>{activity.description}</Text>
    </Box>
  );
};

export default ActivityCard;

const CardView = {
  height: "25vh",
  width: "100%",
  paddingTop: "5vh",
  paddingLeft: "10px",
};

const cityAndDate = {
  fontSize: "sm",
  textColor: "grey",
};
