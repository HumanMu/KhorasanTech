import { makeAutoObservable, reaction } from "mobx";
import { ServerError } from "../models/ServerError";



export default class CommonStore {
  error: ServerError | null = null;
  token: string | null = localStorage.getItem('jwt'); // Seting the token to the value of localstorage with the key 'jwt'
  appLoaded = false;

  constructor() {
    makeAutoObservable(this);

    reaction(    // reacting if token found, and saving the token to the localStorage, so page refresh not log us out of the page
      () => this.token,
      token => {
        if(token) {
          localStorage.setItem('jwt', token);
        }
        else{
          localStorage.removeItem('jwt');
        }
      }
    )
  }

  setServerError(error: ServerError) {
    this.error = error;
  }

  setToken = (token: string | null) => {
    this.token = token;
  }

  setAppLoaded = () => {
    this.appLoaded = true;
  }
}