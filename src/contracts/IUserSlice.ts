export interface IUserSlice {
  id : string,
  name : string,
  email : string,
  setId : (id: string) => void,
  setName : (name: string) => void,
  setEmail : (email: string) => void,
}