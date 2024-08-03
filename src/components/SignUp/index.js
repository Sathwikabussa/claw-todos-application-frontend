import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../../client';

import './index.css'

const SignUp = () => {

  const [formData,setFormData] = useState({
    fullName:'',email:'',password:''
  })

  console.log(formData)

  function handleChange(event){
    setFormData((prevFormData)=>{
      return{
        ...prevFormData,
        [event.target.name]:event.target.value
      }

    })

  }

  async function handleSubmit(e){
    e.preventDefault()

    try {
      const { error } = await supabase.auth.signUp(
        {
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              full_name: formData.fullName,
            }
          }
        }
      )
      if (error) throw error
      alert('Check your email for verification link')

      
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className='register-container'>
      <form onSubmit={handleSubmit} className='signup-form'>
        <h1 className='register-heading'>Register</h1>
        <input 
          placeholder='Username'
          name='fullName'
          onChange={handleChange}
          reqired
        />

        <input 
          placeholder='Email'
          name='email'
          onChange={handleChange}
          reqired
        />

        <input 
          placeholder='Password'
          name='password'
          type="password"
          onChange={handleChange}
          reqired
        />

        <button type='submit'>
            Register
        </button>
       <p> Already have an account?<Link to='/'>Login</Link> </p> 
      </form> 
    </div>
  )
}

export default SignUp