import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Todo from '../Todo'
import { addTodo, getAllTodo,updateTodo ,deleteTodo} from '../../utils/handleApi'

import './index.css'

const Homepage = ({token}) => {
  
  

  let navigate = useNavigate()
  
  function handleLogout(){
    sessionStorage.removeItem('token')
    navigate('/')
  }

  
  const [todo, setTodo] = useState([])
  const [text, setText] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [todoId,setTodoId] = useState("")


  useEffect(() => {
    getAllTodo(setTodo)
  },[])

  const updateMode = (_id,text) => {
    setIsUpdating(true)
    setText(text)
    setTodoId(_id)
  }

  return (
    <div className='App'>
        <div className='container'>
            <h2 className='main-heading'>Welcome, {token.user.user_metadata.full_name}</h2>
            <button onClick={handleLogout} className='logout-btn'>Logout</button>
            <h1 className='sub-heading'>Todos Application</h1>
            <div className='top'>
                <input type="text" 
                className='input-text'
                placeholder="What needs to be done?" 
                value={text} 
                onChange={(e) => setText(e.target.value)}
                />
                <button className='add' 
                   onClick = 
                    {isUpdating ? () => updateTodo(todoId,text,setTodo,setText,setIsUpdating)
                     : () => addTodo(text,setText,setTodo)}>
                    {isUpdating ? "Update" : "Add"}
                </button>
            </div>
            <div className='list'>
                {todo.map((item) => <Todo key={item._id} text={item.text}
                updateMode = {() => updateMode(item._id, item.text)}
                deleteTodo={() => deleteTodo(item._id,setTodo)}
                 />
            )}
            </div>
        </div>
    </div>
  )
}

export default Homepage