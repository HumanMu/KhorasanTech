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
    makeAutoObservable(this)
  }

  loadActivities = async () => {
    this.setLoadingInitial(true);
    try {
      const response = await agent.Activities.list();
      response.forEach(activity => {
        activity.date = activity.date.split('T')[0];
        this.activities.push(activity);
      });
      this.setLoadingInitial(false)

    } catch (error) {
      this.setLoadingInitial(false)
    }
  }
  
  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  }
}


// Video 71, refactoring the app to use  MobX