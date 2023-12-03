import { VStack } from "@chakra-ui/react";
import ActivityCard from "../../../components/cards/ActivityCard";
import { Activity } from "../../../models/Activity";

interface Props {
  activities: Activity[],
}

export default function ActivityDashboard({ activities}: Props) {
  return (
    <VStack justifyItems={"left"}>
      {activities.map((activity: Activity) => (
        <ActivityCard key={activity.id} activity={activity}></ActivityCard>
      ))}
    </VStack>
  );
}
