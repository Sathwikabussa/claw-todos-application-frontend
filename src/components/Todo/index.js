import React from 'react'

import {BiEdit} from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";

import './index.css'

const Todo = ({text,updateMode,deleteTodo}) => {
  return (
    <div className='todo'>
      <div className="text">{text}</div>
      <div className='icons'>
        <BiEdit className="icon" onClick={updateMode} />
        <MdDeleteOutline className="icon" onClick={deleteTodo} />
      </div>
    </div>
  )
}

export default Todo
