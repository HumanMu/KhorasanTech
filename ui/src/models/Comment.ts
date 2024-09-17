

export interface CommentPost {
  activityId: string;
  datetime: string;
  comment: string;
  likes?: number;
  dislikes?: number; 
}

export interface CommentGet {
  id: number;
  activityId: string;
  datetime: string;
  comment: string;
  likes?: number;
  dislikes?: number; 
}