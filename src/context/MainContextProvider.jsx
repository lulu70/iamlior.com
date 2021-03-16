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
      <div
        className={
          mainContextStore.darkMode
            ? "dark bg-gray-900 text-gray-100"
            : "bg-white text-gray-900"
        }
      >
        {children}
      </div>
    </MainContext.Provider>
  )
}
export default MainContextProvider
