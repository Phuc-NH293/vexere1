import React, { useState } from 'react'
import { Login } from '../api/user'

type Props = {}

const UserLogin = (props: Props) => {
    const [email,setEmail] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const [message,setMessage] = useState<string>('')
    const handleSubmit = async (e:any)=>{
        e.preventDefault()
        const user = await Login({email,password})
        if (user.status){
            console.log(user);    
            localStorage.setItem('user',JSON.stringify({
                user:user.userdata,
                token: user.token
            }))  
        }
        setMessage(user.message)        
    }
  return (
    <div>
        <h1>Đăng nhập</h1>
        {message}
        <form onSubmit={handleSubmit}>
            <input onChange={(e:any)=>{setEmail(e.target.value)}} type="email" placeholder='Email'/>
            <input onChange={(e:any)=>{setPassword(e.target.value)}} type="password" placeholder = 'Mật khẩu'/>
            <button type="submit">Đăng nhập</button>
        </form>
    </div>
  )
}

export default UserLogin