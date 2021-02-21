import React from "react"
import MainContext, {
  mainContextReducer,
  initialStoreState,
} from "./MainContext"

const MainContextProvider = ({ children }) => {
  const [mainContextStore, mainContextDispatch] = React.useReducer(
    mainContextReducer,
    initialStoreState
  )
  return (
    <MainContext.Provider
      value={{
        ...mainContextStore,
        mainContextDispatch,
      }}
    >
      {children}
    </MainContext.Provider>
  )
}
export default MainContextProvider
