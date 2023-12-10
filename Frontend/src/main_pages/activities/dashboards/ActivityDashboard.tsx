import { VStack } from "@chakra-ui/react";
import { Activity } from "../../../models/Activity";
import ActivityList from "./ActivityList";

interface Props {
  activities: Activity[],
}

export default function ActivityDashboard({ activities}: Props) {
  return (
    <VStack justifyItems={"left"} marginTop={100} maxW={'100vw'}>
      <ActivityList activities={activities}/>
    </VStack>
  );
}
