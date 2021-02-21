import React from "react"

const MainContext = React.createContext()

export const initialStoreState = {
  cookieConcent: false,
}

const types = {
  setCookieConcent: "SET_COOKIE_CONCENT",
}

export const setCookieConcent = (dispatch, payload) => {
  dispatch({
    type: types.setCookieConcent,
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
    default:
      throw new Error("Error from mainContextReducer default case")
  }
}

export default MainContext
