import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import InputLogin from '../components/InputLogin'
import { login } from '../utils/network-data'
import LocaleContext from '../contexts/LocaleContext'
import PropTypes from 'prop-types'

const LoginPage = ({ loginSuccess }) => {
    const { locale } = useContext(LocaleContext)

    const onLogin = async ({ email, password }) => {
        const { error, data } = await login({ email, password })
        if (!error) {
            loginSuccess(data)
        }
    }

    return (
        <section className='login-page'>
            <h2>{locale === 'id' ? 'Yuk, login untuk menggunakan aplikasi.' : 'Login to use app, please.'}</h2>
            <InputLogin login={onLogin} />
            <p>{locale === 'id' ? 'Belum punya akun? ' : 'Don\'t have an account?'} <Link to='/register'>Daftar di sini</Link> </p>
        </section>
    )
}

LoginPage.propTypes = {
    loginSuccess: PropTypes.func
}

export default LoginPage