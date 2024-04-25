import { create } from 'zustand'

interface IGlobalSlice {
  isSidebarCollapsed : boolean,
  currentPage: string,
  setIsSidebarCollapsed : (isSidebarCollapsed: boolean) => void, 
  setCurrentPage : (currentPage: string) => void, 
}

export const useGlobalStore = create<IGlobalSlice>()((set) => ({
  isSidebarCollapsed : true,
  currentPage: "",
  setIsSidebarCollapsed : (isSidebarCollapsed) => set((state) => ({...state, isSidebarCollapsed})), 
  setCurrentPage: (currentPage) => set((state) => ({...state, currentPage}))
}))