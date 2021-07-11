import React from "react"

export const initialStoreState = {
  cookieConcent: false,
  darkMode: true,
  tabIsUsed: false,
}

interface MainContextAction {
  type: "SET_COOKIE_CONCENT" | "SET_TAB_IS_USED" | "SET_DARK_MODE"
  payload: boolean
}

export type MainContextDispatch = React.Dispatch<MainContextAction>

const defaultDispatch: MainContextDispatch = () => initialStoreState

const MainContext = React.createContext({
  ...initialStoreState,
  mainContextDispatch: defaultDispatch,
})

const types = {
  setCookieConcent: "SET_COOKIE_CONCENT",
  setDarkMode: "SET_DARK_MODE",
  setTabIsUsed: "SET_TAB_IS_USED",
}

export const setCookieConcent = (
  dispatch: MainContextDispatch,
  payload: boolean
) => {
  dispatch({
    type: "SET_COOKIE_CONCENT",
    payload,
  })
}

export const setDarkMode = (
  dispatch: MainContextDispatch,
  payload: boolean
) => {
  dispatch({
    type: "SET_DARK_MODE",
    payload,
  })
}

export const setTabIsUsed = (
  dispatch: MainContextDispatch,
  payload: boolean
) => {
  dispatch({
    type: "SET_TAB_IS_USED",
    payload,
  })
}

export const mainContextReducer = (
  state: typeof initialStoreState,
  { type, payload }: MainContextAction
) => {
  switch (type) {
    case types.setCookieConcent: {
      return {
        ...state,
        cookieConcent: payload,
      }
    }
    case types.setDarkMode: {
      return {
        ...state,
        darkMode: payload,
      }
    }
    case types.setTabIsUsed: {
      return {
        ...state,
        tabIsUsed: payload,
      }
    }
    default:
      throw new Error("Error from mainContextReducer default case")
  }
}

export default MainContext
