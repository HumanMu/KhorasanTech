import { Box } from "@chakra-ui/layout";
import { VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Activity } from "../../models/Activity";
import agent from "../../api/Agent";
import { useStore } from "../../stores/Store";
import ActivityDashboard from "./dashboards/ActivityDashboard";

const Home = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const { userStore } = useStore();

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
          <ActivityDashboard activities={activities}/>
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
  padding: ["50px", "15px", "", "15px" ],
  bg: "blackAlpha.100",
};
