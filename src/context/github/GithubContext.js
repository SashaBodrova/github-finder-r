import React, { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer'

const GithubContext = createContext('')

export const GithubProvider = ({ children }) => {
  // firstly, we make a reducer function in separate file
  // then in context file set an initial state with all values that we need
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  }

  // then we use useReducer hook

  // dispatch - is a method which deliver the action to our reducer
  const [state, dispatch] = useReducer(githubReducer, initialState)

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext