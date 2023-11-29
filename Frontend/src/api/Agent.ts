import axios, { AxiosResponse } from "axios";
import { User, UserFormValues } from "../models/User";
import { Activity } from "../models/Activity";
import { LoadingService } from "./services/LoadingService";

const sleepTimer = (delay: number) => {
  // To define loading spinner
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

axios.defaults.baseURL = "http://localhost:5000/api";

// For every http call Wait 1 second and after return the response
axios.interceptors.response.use(async (response) => {
  try {
    await sleepTimer(1000);
    return response;
  } catch (e) {
    console.log(e);
    return Promise.reject(e);
  }
});

const responseBody = <T>(response: AxiosResponse<T>) => response.data; // Putting the response data into the "responseBody".

// const requests = {
//   get: <T>(url: string) => axios.get<T>(url).then(responseBody), // first <T> specify the type of request, and second "get<T>" here we send the type with the request
//   post: <T>(url: string, body: {}) =>
//     axios.post<T>(url, body).then(responseBody),
//   put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
//   del: <T>(url: string) => axios.delete<T>(url).then(responseBody),

// };

const loadingService = new LoadingService();

const requests = {
  get: <T>(url: string) => {
    loadingService.startLoading();
    return axios
      .get<T>(url)
      .then(responseBody)
      .finally(() => loadingService.stopLoading());
  },
  post: <T>(url: string, body: {}) => {
    loadingService.startLoading();
    return axios
      .post<T>(url, body)
      .then(responseBody)
      .finally(() => loadingService.stopLoading());
  },
  put: <T>(url: string, body: {}) => {
    loadingService.startLoading();
    return axios
      .put<T>(url, body)
      .then(responseBody)
      .finally(() => loadingService.stopLoading());
  },
  del: <T>(url: string) => {
    loadingService.startLoading();
    return axios
      .delete<T>(url)
      .then(responseBody)
      .finally(() => loadingService.stopLoading());
  },
};

const Account = {
  current: () => requests.get<User>("/account"),
  login: (user: UserFormValues) => requests.post<User>("/account/login", user),
  register: (user: UserFormValues) =>
    requests.post<User>("/account/register", user),
};

const Activities = {
  list: () => requests.get<Activity[]>("/activities"), // Taking the reponse from Api and putting into the "list"
  details: (id: string) => requests.get<Activity>(`/activities/${id}`),
  create: (activity: Activity) => axios.post<void>("/activities", activity),
  update: (activity: Activity) =>
    axios.post<void>(`/activities${activity.id}`, activity),
  delete: (id: string) => axios.delete<void>(`/activities${id}`),
};

const agent = {
  Account,
  Activities,
  loadingService: loadingService,
};

export default agent;
