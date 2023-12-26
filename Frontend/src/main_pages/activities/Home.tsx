
import { VStack } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { Activity } from "../../models/Activity";
import axios from "axios";

function Home() {
  const [activities, setActivities] = useState<Activity[]>([]);
  
  /*const { activityStore } = useStore();
  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);
*/
  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities').then(response => {
      const splitActivities = response.data.map(activity => {
        const splitDate = activity.date.split('T')[0];
        activity.date = splitDate;
        return activity;
      });
      setActivities(splitActivities);
    })
  }, [activities])

  return (
    <>
      <VStack maxW={'100vw'}>
      </VStack>
    </>
  );
}; 

export default observer(Home);

/*const ActivityLayout = {
  width: "50vw",
  height: "100%",
  paddingLeft: "5px",
  paddingTop: "50px",
  padding: ["50px", "15px", "", "15px" ],
  bg: "blackAlpha.100",
};*/
