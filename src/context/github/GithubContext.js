import React, { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer'

const GithubContext = createContext('')

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({ children }) => {
  // firstly, we make a reducer function in separate file
  // then in context file set an initial state with all values that we need
  const initialState = {
    users: [],
    loading: false
  }

  // then we use useReducer hook

  // dispatch - is a method which deliver the action to our reducer
  const [state, dispatch] = useReducer(githubReducer, initialState)

  const searchUsers = async (text) => {
    setLoading()

    const params = new URLSearchParams({
      q: text
    })

    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`
      }
    })
    const { items } = await response.json()

    dispatch({
      type: 'GET_USERS',
      payload: items
    })
  }

  // Clear users from state
  const clearUsers = () => dispatch({type: 'CLEAR_USERS'})

  // Set loading
  const setLoading = () => dispatch({type: 'SET_LOADING'})

  return (
    <GithubContext.Provider value={{
      users: state.users,
      loading: state.loading,
      searchUsers,
      clearUsers
    }}>
      { children }
    </GithubContext.Provider>
  )
}

export default GithubContext