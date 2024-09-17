import {VStack } from "@chakra-ui/react";
import { Activity } from "../../../models/Activity";
import ActivityCard from "../../../components/cards/ActivityCard";

interface Props {
  activities: Activity[];
}

function ActivityList({
  activities,
} : Props) {

  return(
    <VStack justifyItems={"left"} maxW={'100vw'} marginTop={70}>
      {activities.map((activity: Activity) => (
        <ActivityCard
          key={activity.id}
          activity={activity}
        ></ActivityCard>
      ))}
    </VStack>
  )

}

export default ActivityList;
