import React from "react"
import MainContext from "./MainContext"
import isBrowser from "../helpers/isBrowser"

const ContextProvider = ({ children }) => {
  const initialStoreState = {
    cookieConcent: false,
  }
  const [store, updateStore] = React.useState(initialStoreState)

  //set cookie concent from local storage
  React.useEffect(() => {
    const cookieConcent = isBrowser()
      ? localStorage.getItem("cookie_concent")
      : null
    if (cookieConcent) {
      updateStore(state => ({
        ...state,
        cookieConcent,
      }))
    }
  }, [])

  return (
    <MainContext.Provider
      value={{
        store,
        setCookieConcent: payload => {
          updateStore(state => ({
            ...state,
            cookieConcent: payload,
          }))
          if (isBrowser()) {
            localStorage.setItem("cookie_concent", payload)
          }
        },
      }}
    >
      {children}
    </MainContext.Provider>
  )
}
export default ContextProvider
