import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import InputRegister from '../components/InputRegister'
import { register } from '../utils/network-data'
import { useNavigate } from 'react-router-dom'
import LocaleContext from '../contexts/LocaleContext'

const RegisterPage = () => {
    const navigate = useNavigate()
    const { locale } = useContext(LocaleContext)

    async function onRegisterHandler(user) {
        const { error } = await register(user)
        if (!error) {
            navigate('/')
        }
    }

    return (
        <div>
            <h2>{locale === 'id' ? 'Isi form untuk mendaftar akun.' : 'Fill the form to register account.'}</h2>
            <InputRegister register={onRegisterHandler} />
            <p>{locale === 'id' ? 'Sudah punya akun?' : 'Already have an account?'} <Link to='/'>{locale === 'id' ? 'Login di sini' : 'Login here'}</Link></p>
        </div>
    )
}

export default RegisterPage