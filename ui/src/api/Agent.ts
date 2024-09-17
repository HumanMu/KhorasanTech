import axios, { AxiosResponse } from "axios";
import { User, UserFormLogin, UserFormRegister } from "../models/User";
import { Activity } from "../models/Activity";
import { LoadingService } from "./services/LoadingService";
import { CommentPost, CommentGet } from "../models/Comment";

const sleepTimer = (delay: number) => {
  // To define loading spinner
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};
const loadingService = new LoadingService(); 
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
const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),  //first <T> specify the type of request, and second "get<T>" here we send the type with the request
  getWithParams: <T>(url: string, params?: {}) => axios.get<T>(url, { params }).then(responseBody),
  post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Account =  {
  current: () => requests.get<User>("/account"),
  login: (user: UserFormLogin) => requests.post<User>("/account/login", user),
  register: (user: UserFormRegister) => requests.post<string>("/account/register", user),
};

const Activities = {
  list: () =>  requests.get<Activity[]>("/activities"), // Taking the reponse from Api and putting into the "list"
  details: (id: string) => requests.get<Activity>(`/activities/${id}`),
  create: (activity: Activity) => axios.post<void>("/activities", activity),
  update: (activity: Activity) =>
    axios.post<void>(`/activities/${activity.id}`, activity),
  delete: (id: string) => axios.delete<void>(`/activities/${id}`),
};

const Comments = {
  //list: (activityId: string) => requests.getWithParams<CommentGet[]>("/activitycomment", activityId), // Taking the reponse from Api and putting into the "list"
  list: (activityId: string) => requests.getWithParams<CommentGet[]>(`/activitycomment/${activityId}`),
  create: (CommentPost: CommentPost) => axios.post<void>("/activitycomment", CommentPost),
  update: (CommentPost: CommentPost, activityId: string) => axios.post<void>(`/activitycomment/${activityId}`, CommentPost),
  delete: (commentId: string, activityId: string) => axios.delete<void>(`/activitycomment/${activityId}`, {
    data: {
      id: commentId
    }
  }),
};


/*const requests = {
  get: async <T>(url: string) => {
    loadingService.startLoading();
    try {
      const response = await axios.get<T>(url);
      return responseBody(response);
    } finally {
      loadingService.stopLoading();
    }
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
};*/

const agent = {
  Account,
  Activities,
  Comments,
  loadingService: loadingService,
};

export default agent;
