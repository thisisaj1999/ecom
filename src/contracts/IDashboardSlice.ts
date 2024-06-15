export interface IDashboardSlice {
  itemsData : [],
  cartItemsLength: number,
  setItemsData : (itemsData: []) => void, 
  setCartItemsLength : (cartItemsLength: number) => void, 
}
