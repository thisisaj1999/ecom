import { create } from 'zustand'
import { IDashboardSlice } from '../../../contracts/IDashboardSlice'

export const useDashboardStore = create<IDashboardSlice>()((set) => ({
  itemsData : [],
  cartItemsLength: 0,
  setItemsData : (itemsData) => set((state) => ({...state, itemsData})),
  setCartItemsLength : (cartItemsLength) => set((state) => ({...state, cartItemsLength}))
}))