export interface User {
  userName: string;
  displayName: string;
  token: string;
  imageUrl: string;
}

export interface UserFormLogin {
  password: string;
  username: string;
}

export interface UserFormRegister {
  username: string; 
  email: string; 
  firstname: string;
  lastname: string;
  password: string;
  repassword: string;
}



