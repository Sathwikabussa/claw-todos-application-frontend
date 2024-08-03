import axios from 'axios'

const baseUrl = "https://claw-todos-application-backend.onrender.com"

const getAllTodo = (setTodo) => {
    axios
    .get(baseUrl)
    .then(({data}) => {
        console.log(`data --->`,data);
        setTodo(data)
    })
}

const addTodo = (text,setText,setTodo) => {
    if(text === ""){
        return false
    }
    axios
    .post(`${baseUrl}/save`, {text})
    .then((data) => {
        console.log(data);
        setText("")
        getAllTodo(setTodo)
    })
    .catch((err) => console.log(err))
}

const updateTodo = (todoId,text,setTodo,setText,setIsUpdating) => {
    axios
    .post(`${baseUrl}/update`, {_id: todoId, text})
    .then((data) => {
        setText("")
        setIsUpdating(false)
        getAllTodo(setTodo)
    })
    .catch((err) => console.log(err))
}

const deleteTodo = (_id,setTodo) => {
    axios
    .post(`${baseUrl}/delete`, {_id})
    .then((data) => {
        console.log(data)
        getAllTodo(setTodo)
    })
    .catch((err) => console.log(err))
}


export {getAllTodo,addTodo,updateTodo,deleteTodo}