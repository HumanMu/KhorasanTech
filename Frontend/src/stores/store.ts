import { createContext, useContext } from "react";
import UserStore from "./UserStore";
import CommonStore from "./CommonStore";

interface Store {
  commonStore: CommonStore;
  userStore: UserStore;
}

export const store: Store = {
  commonStore: new CommonStore(),
  userStore: new UserStore(),
}



export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}
