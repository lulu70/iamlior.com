import React from "react"
import useTabIsUsed from "../hooks/useTabIsUsed"
import MainContext, {
  mainContextReducer,
  initialStoreState,
  setTabIsUsed,
} from "./MainContext"

const MainContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [mainContextStore, mainContextDispatch] = React.useReducer(
    mainContextReducer,
    initialStoreState
  )
  useTabIsUsed({ mainContextDispatch, setTabIsUsed })
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
