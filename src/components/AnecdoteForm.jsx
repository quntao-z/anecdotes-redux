import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import anecdotesService from '../services/anecdotes'

const AnecdoteForm = () => {

    const dispatch = useDispatch()

    const addAnecdote = (event) => {
        event.preventDefault()
        const anecdote_content = event.target.anecdote_content.value
        const newAnecdote = anecdotesService.createNewAnecdote(anecdote_content).then(newAnecdote => dispatch(createAnecdote(newAnecdote)))
        event.target.anecdote_content.value = ''
    }


    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
            <div><input name='anecdote_content'/></div>
            <button type='submit'>create</button>
            </form>
        </div>
    )
}

export default AnecdoteForm