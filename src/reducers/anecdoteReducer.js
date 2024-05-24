import { createSlice } from '@reduxjs/toolkit'
import anecdotesService from '../services/anecdotes'
import { setNotification } from './notificationReducer'

const initialState = []

const anecdoteSlice = createSlice({
  name:"anecdotes",
  initialState,
  reducers: {
    createAnecdote(state, action) {
      state.push(action.payload)
    },
    increaseVote(state, action) {
      const changedAnecdote = action.payload
    
      return state.map(anecdote => 
        anecdote.id !== changedAnecdote.id ? anecdote : changedAnecdote)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }, 
})

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdotesService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createNewAnecdote = (anecdote_content) => {
  return async dispatch => {
    const newAnecdote = await anecdotesService.createNewAnecdote(anecdote_content)
    dispatch(createAnecdote(newAnecdote))
    dispatch(setNotification(`new anecdote '${newAnecdote.content}'`, 5))
  }
}

export const increaseAnecdoteVote = (anecdote) => {
  return async dispatch => {
    const changedAnecdote = await anecdotesService.increaseVote(anecdote)
    dispatch(increaseVote(changedAnecdote))
    dispatch(setNotification(`you voted '${changedAnecdote.content}'`, 5))
  }
}

export const { createAnecdote, increaseVote, setAnecdotes} = anecdoteSlice.actions
export default anecdoteSlice.reducer