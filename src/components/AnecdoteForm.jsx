import { useDispatch } from 'react-redux'
import { createNewAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {

    const dispatch = useDispatch()

    const addAnecdote = async (event) => {
        event.preventDefault()
        const anecdote_content = event.target.anecdote_content.value
        event.target.anecdote_content.value = ''
        dispatch(createNewAnecdote(anecdote_content))
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