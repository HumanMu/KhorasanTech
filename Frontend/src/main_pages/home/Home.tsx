import { Box } from "@chakra-ui/layout";
import { VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ActivityCard from "../../components/cards/ActivityCard";
import { Activity } from "../../models/Activity";
import agent from "../../api/Agent";
import { useStore } from "../../stores/Store";
import { router } from "../../routes/Routes";

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
      {userStore.isLoggedIn ? (
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
        ) : (
          router.navigate('/login')
        )
      }
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
