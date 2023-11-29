import { User } from "../models/User";

export default class UserStore {
  user: User | null = null;


  constructor() {
    //makeAutoObservable(this)
  }

  
}