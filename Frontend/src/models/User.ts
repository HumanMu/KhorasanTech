export interface User {
  userName: string;
  token: string;
  imageUrl: string;
}

export interface UserFormValues {
  email: string,
  password: string,
  displayName? : string,
  username?: string,
}
