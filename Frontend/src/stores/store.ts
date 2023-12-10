import { createContext, useContext } from "react";
import UserStore from "./UserStore";
import CommonStore from "./CommonStore";
import ActivityStore from "./ActivityStore";

interface Store {
  commonStore: CommonStore;
  userStore: UserStore;
  activityStore: ActivityStore;
}

export const store: Store = {
  commonStore: new CommonStore(),
  userStore: new UserStore(),
  activityStore: new ActivityStore(),
}



export const StoreContext = createContext(store);   // Adding the "store" into the context

export function useStore() {                        // Making a hook to make the context available everywhere in the project  
  return useContext(StoreContext);
}
