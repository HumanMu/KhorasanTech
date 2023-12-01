import { makeObservable } from "mobx";
import { User, UserFormLogin } from "../models/User";
import agent from "../api/Agent";

export default class UserStore {
  user: User | null = null;

  constructor() {
    makeObservable(this);
  }

  login = async (cred: UserFormLogin) => {
    const user = await agent.Account.login(cred);
    console.log(user);
  };
}
