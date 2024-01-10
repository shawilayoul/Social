import { useRef } from 'react'
import { useDispatch } from "react-redux"
import { login, resets } from "../../features/auths/authSlice"
import { Link, useNavigate } from "react-router-dom"
import "./login.scss"
const Login = () => {
    const email = useRef()
    const password = useRef()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(login({ email: email.current.value, password: password.current.value }))
        navigate("/")
        dispatch(resets())
    }



    return (
        <div className='login'>
            <div className="card">
                <div className="left">
                    <h1>Welcome to showil social media</h1>
                    <p>Lorem ipsum dolor sit amet consectetur,
                        adipisicing elit. Illum, expedita nihil esse
                        <br /> quo at quos in pariatur nesciunt voluptate
                        <br /> exercitationem non earum nostrum delectus
                    </p>
                    <span>you do not have account</span>
                    <Link to="/register">
                        <button>Register</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="email" required autoComplete='off' placeholder='Enter your Email' ref={email} />
                        <input type="password" required autoComplete='off' placeholder='Enter your password' ref={password} />
                        <button type='submit'>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
