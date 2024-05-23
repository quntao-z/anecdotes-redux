import { createSlice } from '@reduxjs/toolkit'
import anecdotesService from '../services/anecdotes'
import { notificationSetting } from './notificationReducer'

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
    dispatch(createNewAnecdote(newAnecdote))
  }
}

export const increaseAnecdoteVote = (anecdote) => {
  return async dispatch => {
    const changedAnecdote = await anecdotesService.increaseVote(anecdote)
    dispatch(increaseVote(changedAnecdote))
    dispatch(notificationSetting(changedAnecdote.content))
  }
}

export const { createAnecdote, increaseVote, setAnecdotes} = anecdoteSlice.actions
export default anecdoteSlice.reducer