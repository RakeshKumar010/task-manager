import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    const [name,SetName]=useState()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const submitFun = (e) =>{
        e.preventDefault()
        localStorage.setItem('user',JSON.stringify({"name":name,"email":email,"password":password}))
        e.preventDeafult()
        console.log(`email:${email}/n password:${password}`)
    }
  return (
    <>
     <div className='loginMain'>
        <form onSubmit={submitFun} className='login'>
            <input type="name" name='anme' placeholder='Name' onChange={(e)=>{SetName(e.target.value)}}/>
            <input type="email" name='email' placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/>
            <input type="password"  name='password' placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/>
            <button>Sign Up</button>
            <div className='changeRoute'>
                <p>Create a account</p>
                <Link to={'/login'}>Login</Link>
            </div>
        </form>

    </div>
    </>
  )
}

export default Signup