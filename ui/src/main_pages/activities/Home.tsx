
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { Activity } from "../../models/Activity";
import { useStore } from "../../stores/Store";
import ActivityDashboard from "./dashboards/ActivityDashboard";
import axios from "axios";
import { VStack } from "@chakra-ui/react";

function Home() {
  const { commonStore, userStore, } = useStore();
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    if (commonStore.token) {
      //userStore.getUser().finally(() => commonStore.setAppLoaded());
      axios
            .get<Activity[]>("http://localhost:5000/api/activities")
            .then((response) => {
              const splitActivities = response.data.map((activity) => {
                const splitDate = activity.date.split("T")[0];
                activity.date = splitDate;
                console.log("Activity image: ${activity.title} ", activity.imageUrl?.toString());
                return activity;
              });
              setActivities(splitActivities);
            });
      commonStore.setAppLoaded();
    } else {
          axios
            .get<Activity[]>("http://localhost:5000/api/activities")
            .then((response) => {
              const splitActivities = response.data.map((activity) => {
                const splitDate = activity.date.split("T")[0];
                activity.date = splitDate;
                return activity;
              });
              setActivities(splitActivities);
            });
      commonStore.setAppLoaded();
    }
  }, [commonStore, userStore]);

  function handleSelectActivity(id: string) {
    setSelectedActivity(activities.find((x) => x.id === id));
  }

  function handleCancelSelectedActivity() {
    setSelectedActivity(undefined);
    setEditMode(false);
  }

  function handleFormOpen(id?: string) {
    id ? handleSelectActivity(id) : handleCancelSelectedActivity();
    setEditMode(true);
  }

  function handleFormClose() {
    setEditMode(false);
  }

  function handleCreateOrEditActivity(activity: Activity) {
    activity.id
      ? setActivities([
          ...activities.filter((x) => x.id !== activity.id),
          activity,
        ]) // If an there exist an activity with "id" in activities, replace with activity
      : setActivities([...activities, { ...activity, id: uuid() }]); // Else add activity in the activities with the provided id

    setEditMode(false);
    setSelectedActivity(activity);
  }


  return (
    <>
      <VStack maxW={"100vw"}>
        <ActivityDashboard
          activities={activities}
          selectedActivity={selectedActivity}
          selectActivity={handleSelectActivity}
          cancelSelectedActivity={handleCancelSelectedActivity}
          editMode={editMode}
          openForm={handleFormOpen}
          closeForm={handleFormClose}
          createOrEditActivity={handleCreateOrEditActivity}
        />
      </VStack>
    </>
  );
};

export default observer(Home);


function uuid(): string {
  throw new Error("Function not implemented.");
}
