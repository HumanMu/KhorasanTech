import { makeAutoObservable } from "mobx";
import { Activity } from "../models/Activity";
import agent from "../api/Agent";

export default class ActivityStore {
  activities: Activity[] = [];
  selectedActivites: Activity | null = null;
  editMode = false;
  loading = false;
  loadingInitial = false;

  constructor() {
    makeAutoObservable(this);
  }

  loadActivities = async () => {
    this.setLoadingInitial(true);
    try {
      const response = await agent.Activities.list();
      console.log("Activities response: ", response);
      response.forEach((activity) => {
        activity.date = activity.date.split("T")[0];
        this.activities.push(activity);
      });
      this.setLoadingInitial(false);
    } catch (error) {
      this.setLoadingInitial(false);
    }
  };

  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };

  createActivity = async (activity: Activity) => {
    try {
      const response = await agent.Activities.create(activity);
      if (response) {
        console.log("This looks like a success response: ", response);
      }
    } catch (error) {
      console.log("Activity create response: ", error);
      console.log("An error happened while creating...", error);
    }
  };

  editActivity = async (activity: Activity) => {
    console.log("Updated data: " + activity.description);

    try {
      const response = await agent.Activities.update(activity);
      if (response) {
        console.log("This looks like a success response: ", response);
      }
    } catch (error) {
      console.log("An error happened while editing...", error);
    }
  };

  deleteActivity = async (id: string) => {
    console.log("Deleting activity with id: " + id);

    try {
      const response = await agent.Activities.delete(id);
      if (response) {
        console.log("This looks like a success response: ", response);
      }
    } catch (error) {
      console.log("An error happened while deleting...", error);
    }
  };
}


// Video 71, refactoring the app to use  MobX