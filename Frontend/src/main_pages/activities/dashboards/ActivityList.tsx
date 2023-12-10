import { Box, Input, VStack } from "@chakra-ui/react";
import { Activity } from "../../../models/Activity";
import ActivityCard2 from "../../../components/cards/ActivityCard2";

interface Props {
  activities: Activity[],
}

export default function ActivityList({activities} : Props) {

  return(
    <VStack justifyItems={"left"} maxW={'100vw'} marginTop={70}>
      <Box width={'100%'}>
        <Input width={'100%'} placeholder="What do you have in mind?" >
        
        </Input>
      </Box>
      {activities.map((activity: Activity) => (
        <ActivityCard2
          key={activity.id}
          activity={activity}
        ></ActivityCard2>
      ))}
    </VStack>
  )

}