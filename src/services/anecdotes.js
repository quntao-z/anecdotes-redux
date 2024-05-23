import axios from "axios";

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async() => {
    const response = await axios.get(baseUrl)
    return response.data
}

const createNewAnecdote = async(content) => {  
    const getId = () => (100000 * Math.random()).toFixed(0)

    const anecdote = {
        content,
        id: getId(),
        votes: 0
    }

    const response = await axios.post(baseUrl, anecdote)
    return response.data
}

const increaseVote = async(anecdoteObject) => {
    const changedAnecdote = {
        ...anecdoteObject,
        votes: anecdoteObject.votes + 1
    }

    const response = await axios.put(baseUrl + `/${anecdoteObject.id}`, changedAnecdote)
    return response.data
}

export default { getAll, createNewAnecdote, increaseVote }