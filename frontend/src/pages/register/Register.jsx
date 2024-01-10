import React, { useRef } from 'react'
import "./register.scss"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { register, resets } from '../../features/auths/authSlice'


const Register = () => {
    const dispatch = useDispatch()
    const username = useRef()
    const email = useRef()
    const password = useRef()
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(register({
            username: username.current.value,
            email: email.current.value,
            password: password.current.value,
        }))
        dispatch(resets)
        navigate('/login')
    }

    return (
        <div className='register'>
            <div className="card">
                <div className="left">
                    <h1>shawil social</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit dolores nemo similique,
                        <br /> rem excepturi animi? Explicabo odio praesentium ut, molestiae, exercitationem,<br />
                        <br /> possimus consectetur voluptas ipsam at est quaerat et facere?
                    </p>
                    <span>Do you an account ?</span>
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Register</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder='username' required autoComplete='off' ref={username} />
                        <input type="email" placeholder='Enter your Email' required autoComplete='off' ref={email} />
                        <input type="password" placeholder='password' required autoComplete='off' ref={password} />
                        <button type='submit'>Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
