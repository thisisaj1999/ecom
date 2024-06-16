export interface IGlobalSlice {
  isSidebarCollapsed : boolean,
  currentPage: string,
  isDrawerOpen: boolean,
  isLoading: boolean,
  setIsSidebarCollapsed : (isSidebarCollapsed: boolean) => void, 
  setCurrentPage : (currentPage: string) => void, 
  setIsDrawerOpen : (isDrawerOpen: boolean) => void, 
  setIsLoading: (isLoading: boolean) => void
}
