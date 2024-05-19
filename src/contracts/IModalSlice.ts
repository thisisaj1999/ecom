export interface IModalSlice {
  isOpen : boolean,
  modalName: string,
  setIsOpen : (isOpen: boolean) => void, 
  setModalName : (modalName: string) => void, 
}
