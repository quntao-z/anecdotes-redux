import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const anecdoteSlice = createSlice({
  name:"anecdotes",
  initialState,
  reducers: {
    createAnecdote(state, action) {
      state.push(action.payload)
    },
    increaseVote(state, action) {
      const id = action.payload
      const anecdoteToChange = state.find(anecdote => anecdote.id === id)

      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }
    
      return state.map(anecdote => 
        anecdote.id !== id ? anecdote : changedAnecdote)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }, 
})

export const { createAnecdote, increaseVote, setAnecdotes} = anecdoteSlice.actions
export default anecdoteSlice.reducer