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
            ? "dark bg-darkTheme-bg text-darkTheme-text"
            : "bg-lightTheme-bg text-lightTheme-text"
        }
      >
        {children}
      </div>
    </MainContext.Provider>
  )
}
export default MainContextProvider
