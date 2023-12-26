import { VStack } from "@chakra-ui/react";
import { Activity } from "../../../models/Activity";
import ActivityList from "./ActivityList";

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

export default function ActivityDashboard({ 
  activities,
  selectedActivity,
  cancelSelectedActivity,
  editMode,
  openForm,
  closeForm,
  createOrEditActivity
  }: Props) {

  return (
    <VStack justifyItems={"left"} marginTop={100} maxW={"100vw"}>
      <ActivityList
        activities={activities}
        createOrEditActivity={createOrEditActivity}
        cancelSelectedActivity={cancelSelectedActivity}
        closeForm={closeForm}
        openForm={openForm} 
        selectedActivity={selectedActivity} 
        editMode={editMode}      />
      {/* editMode? 
        <EditActivity 
          activity={selectedActivity} 
          createOrEditActivity={createOrEditActivity}
          cancelSelectedActivity={cancelSelectedActivity }
          closeForm={closeForm}
          openForm={openForm}
        />
  : ""*/} 
    </VStack>
  );
}
