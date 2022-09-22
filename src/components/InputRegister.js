import React from 'react'
import PropTypes from 'prop-types'
import useInput from '../hooks/useInput'

const InputRegister = ({ register }) => {
    const [name, changeNameHandler] = useInput('')
    const [email, changeEmailHandler] = useInput('')
    const [password, changePasswordHandler] = useInput('')
    const [confirmPassword, changeConfirmPasswordHandler] = useInput('')

    const onSubmitHandler = (event) => {
        event.preventDefault()
        if (password !== confirmPassword) {
            alert('password beda atuh!')
        } else {
            register({
                name,
                email,
                password,
            })
        }

    }

    return (
        <form onSubmit={onSubmitHandler} className='input-register'>
            <label htmlFor='name'>Name</label>
            <input value={name} type='text' id='name' onChange={changeNameHandler} />
            <label htmlFor='email'>Email</label>
            <input value={email} type='email' id='email' onChange={changeEmailHandler} />
            <label htmlFor='password'>Password</label>
            <input value={password} type='password' id='password' onChange={changePasswordHandler} />
            <label htmlFor='confirm-password'>Confirm Password</label>
            <input value={confirmPassword} type='password' id='confirm-password' onChange={changeConfirmPasswordHandler} />
            <button>Register</button>
        </form>
    )
}

InputRegister.propTypes = {
    register: PropTypes.func.isRequired
}


export default InputRegister