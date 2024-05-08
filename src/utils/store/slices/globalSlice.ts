import { create } from 'zustand'

interface IGlobalSlice {
  isSidebarCollapsed : boolean,
  currentPage: string,
  isDrawerOpen: boolean,
  setIsSidebarCollapsed : (isSidebarCollapsed: boolean) => void, 
  setCurrentPage : (currentPage: string) => void, 
  setIsDrawerOpen : (isDrawerOpen: boolean) => void, 
}

export const useGlobalStore = create<IGlobalSlice>()((set) => ({
  isSidebarCollapsed : true,
  currentPage: "",
  isDrawerOpen: false,
  setIsSidebarCollapsed : (isSidebarCollapsed) => set((state) => ({...state, isSidebarCollapsed})), 
  setCurrentPage: (currentPage) => set((state) => ({...state, currentPage})),
  setIsDrawerOpen: (isDrawerOpen) => set((state) => ({...state, isDrawerOpen})),
}))