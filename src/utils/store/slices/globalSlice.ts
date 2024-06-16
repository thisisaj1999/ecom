import { create } from 'zustand'
import { IGlobalSlice } from '../../../contracts/IGlobalSlice'

export const useGlobalStore = create<IGlobalSlice>()((set) => ({
  isSidebarCollapsed : true,
  currentPage: "",
  isDrawerOpen: false,
  isLoading: true,
  setIsSidebarCollapsed : (isSidebarCollapsed) => set((state) => ({...state, isSidebarCollapsed})), 
  setCurrentPage: (currentPage) => set((state) => ({...state, currentPage})),
  setIsDrawerOpen: (isDrawerOpen) => set((state) => ({...state, isDrawerOpen})),
  setIsLoading: (isLoading) => set((state) => ({...state, isLoading}))
}))