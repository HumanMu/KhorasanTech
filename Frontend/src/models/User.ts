export interface User {
  userName: string;
  token: string;
  imageUrl: string;
}

export interface UserFormRegister {
  email: string;
  password: string;
  displayName?: string;
  username?: string;
}

export interface UserFormLogin {
  password: string;
  username: string;
}
