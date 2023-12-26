import { Box, VStack, Text } from "@chakra-ui/react";
import { Activity } from "../../../models/Activity";
import ActivityCard from "../../../components/cards/ActivityCard";
import { useState } from "react";
import EditActivity from "../edit/EditActivity";

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
  const [isAdding, setIsAdding]= useState(false);

  function handleAddActivity() {
    setIsAdding(true);
  }

  function handleCancelActivity() {
    setIsAdding(false)
  }

  return (
    <VStack justifyItems={"left"} marginTop={"70px"} maxW={"100vw"}>
      <Box onClick={handleAddActivity}>
        <Text>Wanna share anything ...</Text>
      </Box>
      {isAdding && (
        <EditActivity
          closeEditMode={() => handleCancelActivity()}
        />
      )}
      {activities.map((activity: Activity) => (
        <ActivityCard key={activity.id} activity={activity}></ActivityCard>
      ))}
    </VStack>
  );
}
