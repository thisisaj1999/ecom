import { create } from 'zustand'
import { IModalSlice } from '../../../contracts/IModalSlice'

export const useModalStore = create<IModalSlice>()((set) => ({
  isOpen : false,
  modalName: "",
  setIsOpen : (isOpen) => set((state) => ({...state, isOpen})), 
  setModalName: (modalName) => set((state) => ({...state, modalName})),
}))