import React, { useState, useEffect } from 'react';
import { SignUp, Login, Homepage } from './components';
import {BrowserRouter,Routes, Route} from 'react-router-dom';

const App = () => {

 const [token, setToken] = useState(false)

  if(token){
    sessionStorage.setItem('token',JSON.stringify(token))
  }

  useEffect(() => {
    if(sessionStorage.getItem('token')){
      let data = JSON.parse(sessionStorage.getItem('token'))
      setToken(data)
    }
    
  }, [])
  

 
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/signup'} element={ <SignUp />} />
        <Route path={'/'} element={ <Login setToken={setToken}/>} />
        {token?<Route path={'/homepage'} element={ <Homepage token={token} />} />:""}

      </Routes>
     
      
    </BrowserRouter>
  )
}

export default App;



/*import React, { useState } from "react";
import axios from "axios";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import EditTaskModal from "./components/EditTaskModal";
import "./App.css";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://iqnqhlmfshwervetflai.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlxbnFobG1mc2h3ZXJ2ZXRmbGFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI2MTM5NTIsImV4cCI6MjAzODE4OTk1Mn0.DSEVJ8lDuuzHWBusl0-cQrM28C3InFTaUjD7h-Ek-YQ";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedTask, setEditedTask] = useState(null);
  const [tasksAdded, setTasksAdded] = useState(false);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    fullName:'',email:'',password:''
  })
  
  console.log(formData)

  const handleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleTaskDeletion = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleTaskCreation = async (taskText) => {
    try {
      const response = await axios.post("/todos/save", { text: taskText });
      setTasks([...tasks, response.data]);
      setTasksAdded(true);
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  const handleEditTask = (task) => {
    setEditedTask(task);
    setShowEditModal(true);
  };

  const handleSaveEditedTask = async (editedTask) => {
    try {
      await axios.post("/todos/update", editedTask);
      setTasks(
        tasks.map((task) => (task.id === editedTask.id ? editedTask : task))
      );
    } catch (error) {
      console.error("Error saving edited task:", error);
    }
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setEditedTask(null);
  };

  const handleRegister = async () => {
    try {
      const { user, error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;
      setUser(user);
      setError("");
    } catch (error) {
      setError(error.message);
      console.error("Registration error:", error.message);
    }
  }; 

  

  async function handleRegister(e){
    e.preventDefault()

    try{
      const { data, error} = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName,
          }
        }
      })

      alert(`Check your email for verification link`)
    }catch (error){
      alert(error)
    }
  }

  const handleLogin = async () => {
    try {
      const { error } = await supabase.auth.signInWithOtp({ email });
      if (error) throw error;
      setError("");
      alert("Check your email for the login link!");
    } catch (error) {
      setError(error.message);
      console.error("Login error:", error.message);
    }
  };

  return (
    <div>
      <h1 className="task-heading">Task Management Application</h1>
      {!user ? (
        <div>
          <form onSubmit={handleRegister}>
          <h2>Login</h2>
          <input
            type="text"
            value={fullName}
            name="fullName"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Username"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          
          <button type="submit">Register</button>
          {error && <p>{error}</p>}
          </form>
        </div>
      ) : (
        <div>
          <h1 className="heading">Create Task</h1>
          <TaskForm onCreate={handleTaskCreation} />
          <h1 className="heading">My Tasks</h1>
          {tasksAdded && (
            <TaskList
              tasks={tasks}
              onComplete={handleTaskCompletion}
              onDelete={handleTaskDeletion}
              onEdit={handleEditTask}
            />
          )}
          {showEditModal && (
            <EditTaskModal
              task={editedTask}
              onSave={handleSaveEditedTask}
              onClose={handleCloseEditModal}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default App;
*/

