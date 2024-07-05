import { create } from 'zustand'
import { ISummarySlice } from '../../../contracts/ISummarySlice'

export const useSummaryStore = create<ISummarySlice>()((set) => ({
  subtotal : 0,
  shippingCharge : 0,
  total : 0,
  setSubtotal : (subtotal) => set((state) => ({...state, subtotal})),
  setShippingCharge : (shippingCharge) => set((state) => ({...state, shippingCharge})),
  setTotal : (total) => set((state) => ({...state, total})),
}))