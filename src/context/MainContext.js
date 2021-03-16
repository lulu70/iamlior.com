import React from "react"

const MainContext = React.createContext()

export const initialStoreState = {
  cookieConcent: false,
  darkMode: false,
}

const types = {
  setCookieConcent: "SET_COOKIE_CONCENT",
  setDarkMode: "SET_DARK_MODE",
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

export const mainContextReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_COOKIE_CONCENT": {
      return {
        ...state,
        cookieConcent: payload,
      }
    }
    case "SET_DARK_MODE": {
      return {
        ...state,
        darkMode: payload,
      }
    }
    default:
      throw new Error("Error from mainContextReducer default case")
  }
}

export default MainContext
