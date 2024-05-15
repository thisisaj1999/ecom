import { create } from 'zustand'

interface IModalSlice {
  isOpen : boolean,
  modalName: string,
  setIsOpen : (isOpen: boolean) => void, 
  setModalName : (modalName: string) => void, 
}

export const useModalStore = create<IModalSlice>()((set) => ({
  isOpen : false,
  modalName: "",
  setIsOpen : (isOpen) => set((state) => ({...state, isOpen})), 
  setModalName: (modalName) => set((state) => ({...state, modalName})),
}))