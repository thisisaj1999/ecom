export interface IUserSlice {
  id : string,
  name : string,
  email : string,
  role : string,
  setId : (id: string) => void,
  setName : (name: string) => void,
  setEmail : (email: string) => void,
  setRole : (role: string) => void,
}