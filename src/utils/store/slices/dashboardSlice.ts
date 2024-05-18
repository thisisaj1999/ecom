import { create } from 'zustand'
import { IDashboardSlice } from '../../../contracts/IDashboardSlice'

export const useDashboardStore = create<IDashboardSlice>()((set) => ({
  itemsData : [],
  setItemsData : (itemsData) => set((state) => ({...state, itemsData})),
}))