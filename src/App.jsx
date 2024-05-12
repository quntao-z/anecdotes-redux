import { useSelector, useDispatch } from 'react-redux'
import { createAnecdote, increaseVote } from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state => state)
  const sortedAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes);
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(increaseVote(id))
  }

  const addAnecdote = (event) => {
    event.preventDefault()
    const anecdote_content = event.target.anecdote_content.value
    event.target.anecdote_content.value = ''
    dispatch(createAnecdote(anecdote_content))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {sortedAnecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name='anecdote_content'/></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default App