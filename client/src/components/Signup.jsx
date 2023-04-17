import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigater = useNavigate()

  const [style,setStyle]=useState({})
    const [name,SetName]=useState()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const submitFun = (e) =>{
        e.preventDefault()
        localStorage.setItem('user',JSON.stringify({"name":name,"email":email,"password":password}))
        setStyle({
          "display":"block"
        })
        setTimeout(()=>{
          setStyle({
            "display":"none"
          })
          navigater('/login')

        },1000)
       
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
<div className="alertBox" style={style}>
          <p>SignUp Succesfully ✔</p>
        </div>
    </>
  )
}

export default Signup