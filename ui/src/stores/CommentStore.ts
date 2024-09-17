import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/Agent";
import { CommentPost, CommentGet } from "../models/Comment";
import { HubConnection, HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { store } from "./Store";

export default class CommentStore {
  comments: CommentGet[] =[];
  hubConnection: HubConnection | null = null;
  selectedActivites: CommentPost | null = null;
  editMode = false;
  loading = false;
  loadingInitial = false;

  constructor() {
    makeAutoObservable(this);
  }

  createHubConnection = (activityId: string) => {
    if(activityId) {
      this.hubConnection = new HubConnectionBuilder()
        .withUrl("http://localhost:5000/KhorasanHub?activityId=" + activityId, {
          accessTokenFactory: () => store.userStore.user?.token!,
        })
        .withAutomaticReconnect()
        .configureLogging(LogLevel.Information)
        .build();

      this.hubConnection.start().catch((error) => console.log("Error establishing the connection: ", error));
      this.hubConnection.on("LoadComments", (comments: CommentGet[]) => {
        runInAction(() => {
          this.comments = comments;
        })
      })

      this.hubConnection.on("ReceiveComment", (comment: CommentGet) => {
        runInAction(() => {
          this.comments.push(comment);
        })
      })

    }
  }
  stopHubConnection = () => {
    this.hubConnection?.stop().catch((error) => console.log("Error stopping connection: ", error));
  }


  loadComments = async (activityId: string) => {
    this.setLoadingInitial(true);
    try {
      const response = await agent.Comments.list(activityId);
      
      runInAction(() => {
        response.forEach((comment) => {
          comment.datetime = comment.datetime.split("T")[0];
          this.comments.push(comment);
          console.log("Comments from store: ", this.comments);

        })
        this.setLoadingInitial(false);
      })

      return this.comments; 

    } catch (error) {
      this.setLoadingInitial(false);
    }
  };

  setLoadingInitial = (state: boolean) => {
    this.loadingInitial = state;
  };

  createComment = async (comment: CommentPost) => {
    console.log("Created content: ", comment);
    try {
      const response = await agent.Comments.create(comment);
      console.log("Comment create response: ", response);
      if (response) {
        console.log("This looks like a success comment creation: ", response);
      }
    } catch (error) {
      console.log("Comment error response: ", error);
      console.log("An error happened while creating comment...", error);
    }
  };

  editComment = async (comment: CommentPost) => {
    console.log("Updated data: " + comment.comment);

    try {
      const response = await agent.Comments.update(comment, comment.activityId);
      if (response) {
        console.log("This looks like a success comment edit: ", response);
      }
    } catch (error) {
      console.log("An error happened while editing comment...", error);
    }
  };

  deleteComment = async (activityId: string, commentId:string) => {
    console.log("Deleting activityId and commentId: " + activityId + " " + commentId);

    try {
      const response = await agent.Comments.delete(commentId, activityId);
      if (response) {
        console.log("This looks like a success comment deletion: ", response);
      }
    } catch (error) {
      console.log("An error happened while deleting the comment...", error);
    }
  };
}


// Video 71, refactoring the app to use  MobX