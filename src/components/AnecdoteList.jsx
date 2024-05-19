import { useSelector, useDispatch } from 'react-redux'
import { increaseVote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(({ filter, anecdotes }) => {
        if ( filter === 'ALL') {
            return anecdotes
        }

        return anecdotes.filter((anecdote) => (
            anecdote.content.includes(filter)
        ))
    })

    const sortedAnecdotes = [...anecdotes].sort((a, b) => b.votes - a.votes)
    const dispatch = useDispatch()

    const vote = (id) => {
        dispatch(increaseVote(id))
    }

    return (
        sortedAnecdotes.map(anecdote =>
            <div key={anecdote.id}>
              <div>
                {anecdote.content}
              </div>
              <div>
                has {anecdote.votes}
                <button onClick={() => vote(anecdote.id)}>vote</button>
              </div>
            </div>
        )
    )
}

export default AnecdoteList