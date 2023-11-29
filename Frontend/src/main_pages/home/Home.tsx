import { Box } from "@chakra-ui/layout";
import { VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ActivityCard from "../../components/ActivityCard";
import { Activity } from "../../models/Activity";
import agent from "../../api/Agent";

const Home = () => {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    agent.Activities.list().then((response) => {
      let activities: Activity[] = [];
      response.forEach((activity) => {
        activity.date = activity.date.split("T")[0];
        activities.push(activity);
      });
      setActivities(activities);
    });
  }, []);

  return (
    <>
      <VStack>
        <Box {...ActivityLayout}>
          <VStack justifyItems={"left"}>
            {activities.map((activity: Activity) => (
              <ActivityCard
                key={activity.id}
                activity={activity}
              ></ActivityCard>
            ))}
          </VStack>
        </Box>
      </VStack>
    </>
  );
};

export default Home;

const ActivityLayout = {
  width: "50vw",
  height: "100%",
  paddingLeft: "5px",
  paddingTop: "50px",
  bg: "blackAlpha.100",
};
