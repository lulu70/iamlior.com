import React from "react"

const MainContext = React.createContext()

export const initialStoreState = {
  cookieConcent: false,
  darkMode: true,
  tabIsUsed: false,
}

const types = {
  setCookieConcent: "SET_COOKIE_CONCENT",
  setDarkMode: "SET_DARK_MODE",
  setTabIsUsed: "SET_TAB_IS_USED",
}

export const setCookieConcent = (dispatch, payload) => {
  dispatch({
    type: types.setCookieConcent,
    payload,
  })
}

export const setDarkMode = (dispatch, payload) => {
  dispatch({
    type: types.setDarkMode,
    payload,
  })
}

export const setTabIsUsed = (dispatch, payload) => {
  dispatch({
    type: types.setTabIsUsed,
    payload,
  })
}

export const mainContextReducer = (state, { type, payload }) => {
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
