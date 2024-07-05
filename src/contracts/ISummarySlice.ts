export interface ISummarySlice {
  subtotal : number,
  shippingCharge : number,
  total : number,
  setSubtotal : (subtotal: number) => void
  setShippingCharge : (shippingCharge: number) => void
  setTotal : (total: number) => void
}