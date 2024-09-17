import { Box, VStack, Text } from "@chakra-ui/react";
import { Activity } from "../../../models/Activity";
import ActivityCard from "../../../components/cards/ActivityCard";
import { useEffect, useState } from "react";
import ActivityDrawer from "../crud/ActivityDrawer";

interface Props {
  activities: Activity[];
  selectedActivity: Activity | undefined;
  selectActivity: (id: string) => void;
  cancelSelectedActivity: () => void;
  editMode: boolean;
  openForm: (id: string) => void;
  closeForm: () => void;
  createOrEditActivity: (activity: Activity) => void;
}

export default function ActivityDashboard({ activities }: Props) {
  const [isCreateActivity, setisCreateActivity]= useState(false);

  useEffect(() => {
    setisCreateActivity(false)
  }, [activities.length])

  function handleAddActivity() {
    setisCreateActivity(true);
  }

  function handleCancelActivity() {
    setisCreateActivity(false)
  }

  return (
    <VStack justifyItems={"left"} marginTop={"70px"} maxW={"100vw"}>
      <Box onClick={handleAddActivity}>
        <Text>Wanna share anything ...</Text>
      </Box>

      {activities.map((activity: Activity) => (
        <ActivityCard key={activity.id} activity={activity}></ActivityCard>
      ))}
      {isCreateActivity && (
        <ActivityDrawer
          isCreateActivity={isCreateActivity}
          closeEditMode={() => handleCancelActivity()}
        />
      )}

    </VStack>
  );
}
