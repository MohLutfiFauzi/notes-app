import React from 'react'
import PropTypes from 'prop-types'
import useInput from '../hooks/useInput'

const InputLogin = ({ login }) => {
    const [email, changeEmailHandler] = useInput('')
    const [password, changePasswordHandler] = useInput('')

    const onSubmitHandler = (event) => {
        event.preventDefault()
        login({
            email,
            password
        })
    }

    return (
        <form onSubmit={onSubmitHandler} className='input-login'>
            <label htmlFor='email' >Email</label>
            <input value={email} type='email' id='email' onChange={changeEmailHandler} />
            <label htmlFor='password'>Password</label>
            <input value={password} type='password' id='password' onChange={changePasswordHandler} />
            <button>Login</button>
        </form>
    )
}

InputLogin.propTypes = {
    login: PropTypes.func.isRequired
}

export default InputLogin