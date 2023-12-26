import { Container } from "@chakra-ui/react";
import LoadingComponents from "./layouts/LoadingComponents";
import { ToastContainer } from "react-toastify";
import { useStore } from "../stores/Store";
import { useEffect, useState } from "react";
import Navbar from "./navbar/Navbar";
import { Activity } from "../models/Activity";
import ActivityDashboard from "../main_pages/activities/dashboards/ActivityDashboard";
import {v4 as uuid} from 'uuid';
import axios from "axios";
import { Outlet } from "react-router-dom";


export default function App() {
  const {commonStore, userStore} = useStore();
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities').then(response => {
      const splitActivities = response.data.map(activity => {
        const splitDate = activity.date.split('T')[0];
        activity.date = splitDate;
        return activity;
      });
      setActivities(splitActivities);
    })

    console.log("Activities data: ", activities)
  }, [activities])
  

  useEffect(() => {
    if(commonStore.token) {
      userStore.getUser().finally(()=> commonStore.setAppLoaded());
    }
    else{
      commonStore.setAppLoaded();
    }
  }, [commonStore, userStore]);

  function handleSelectActivity(id: string) {
    setSelectedActivity(activities.find(x => x.id === id));
  }

  function handleCancelSelectedActivity() {
    setSelectedActivity(undefined);
  }

  function handleFormOpen(id? : string) {
    id? handleSelectActivity(id) : handleCancelSelectedActivity();
    setEditMode(true);
  }

  function handleFormClose() {
    setEditMode(false)
  }
  

  function handleCreateOrEditActivity(activity: Activity) {
    activity.id ? setActivities([...activities.filter(x => x.id !== activity.id), activity]) // If an there exist an activity with "id" in activities, replace with activity
      : setActivities([...activities, {...activity, id: uuid()}]);     // Else add activity in the activities with the provided id

    setEditMode(false);
    setSelectedActivity(activity);
  }


  return (
    <>
      <Navbar />
      <LoadingComponents />
      <Container  marginTop={0}>
        <Outlet />
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
      </Container>

      <ToastContainer position='bottom-right' hideProgressBar theme="colored"/>

    </>
  );


}

