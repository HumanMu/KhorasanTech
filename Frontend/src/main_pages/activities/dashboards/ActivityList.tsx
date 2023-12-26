import {VStack } from "@chakra-ui/react";
import { Activity } from "../../../models/Activity";
import ActivityCard from "../../../components/cards/ActivityCard";

interface Props {
  activities: Activity[];
  selectedActivity: Activity | undefined;
  //selectActivity: (id: string) => void;
  cancelSelectedActivity: () => void;
  editMode: boolean;
  openForm: (id: string) => void;
  closeForm: () => void;
  createOrEditActivity: (activity: Activity) => void;
  
}

function ActivityList({
  activities,
  selectedActivity,
  cancelSelectedActivity,
  editMode,
  openForm,
  closeForm,
  createOrEditActivity
} : Props) {

  return(
    <VStack justifyItems={"left"} maxW={'100vw'} marginTop={70}>
      {activities.map((activity: Activity) => (
        <ActivityCard 
          key={activity.id}
          activity={activity}
          createOrEditActivity={createOrEditActivity}
          cancelSelectedActivity={cancelSelectedActivity}
          closeForm={closeForm}
          openForm={openForm} 
          selectedActivity={selectedActivity} 
          editMode={editMode}        
        ></ActivityCard>
      ))}
    </VStack>
  )

}

export default ActivityList; 
