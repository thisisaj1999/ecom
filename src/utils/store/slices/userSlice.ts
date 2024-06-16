import { create } from 'zustand'
import { IUserSlice } from '../../../contracts/IUserSlice'

export const useUserStore = create<IUserSlice>()((set) => ({
  id : "",
  name : "",
  email : "",
  setId : (id) => set((state) => ({...state, id })),
  setName : (name) => set((state) => ({...state, name })),
  setEmail : (email) => set((state) => ({...state, email })),
}))