import { Box } from "@chakra-ui/layout";
import { VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
import ActivityCard from "../../components/ActivityCard";
import { Activity } from "../../models/Activity";

const Home = () => {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios
      .get<Activity[]>("http://localhost:5000/api/activities")
      .then((response) => {
        setActivities(response.data);
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
  bg: "blackAlpha.100",
};
