export type IUser = {
    id:string,
    fullname:string,
    email:string,
    password:string
  }
  export type UserLogin = Pick<IUser,'email'|'password'>