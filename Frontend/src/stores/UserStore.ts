import { makeObservable, runInAction } from "mobx";
import { User, UserFormLogin } from "../models/User";
import agent from "../api/Agent";
import { store } from "./Store";
import { router } from "../routes/Routes";

export default class UserStore {
  user: User | null = null;

  constructor() {
    makeObservable(this);
  }

  get isLoggedIn() {
    return !!this.user;
  }

  login = async (cred: UserFormLogin) => {
    try {
      const user = await agent.Account.login(cred);
      store.commonStore.setToken(user.token);
      runInAction(()=> this.user = user);
      router.navigate('/Home');
    } catch (e) {
      throw e;
    }
  };

  logout = () => {
    store.commonStore.setToken(null);
    this.user = null;
    router.navigate('/');
  }

  getUser = async ()=> {
    try {
      const user = await agent.Account.current();
      runInAction(()=> this.user = user);
    } catch (e) {
      console.log(e);      
    }
  }
}
