import { makeObservable } from "mobx";
import { User } from "../models/User";
import agent from "../api/Agent";

export default class UserStore {
  user: User | null = null;

  constructor() {
    makeObservable(this);
  }

  login = async (cred: User) => {
    const user = await agent.Account.login(cred);
    console.log(user);
  };
}
