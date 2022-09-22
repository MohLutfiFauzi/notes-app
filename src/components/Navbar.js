import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { MdGTranslate, MdOutlineWbSunny, MdLogout, MdOutlineNightlight } from 'react-icons/md'
import LocaleContext from '../contexts/LocaleContext'

const Navbar = ({ authedUser, logout }) => {
    const { locale, toggleLocale, theme, toggleTheme } = useContext(LocaleContext)
    return (
        authedUser ?
            <>
                <nav className="navigation">
                    <ul>
                        <li><Link to="/archives">{locale === 'id' ? 'Arsip' : 'Archives'}</Link></li>
                    </ul>
                </nav>
                <button className='toggle-locale' type='button' onClick={toggleLocale}><MdGTranslate /></button>
                <button className='toggle-locale' type='button' onClick={toggleTheme}>{theme === 'dark' ? <MdOutlineWbSunny /> : <MdOutlineNightlight />}</button>
                <button className='toggle-locale' type='button' onClick={logout}>{authedUser.name}&nbsp; <MdLogout /></button>
            </>
            :
            <>
                <button className='toggle-locale' type='button' onClick={toggleLocale}><MdGTranslate /></button>
                <button className='toggle-locale' type='button' onClick={toggleTheme}>{theme === 'dark' ? <MdOutlineWbSunny /> : <MdOutlineNightlight />}</button>
            </>
    )
}

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    authedUser: PropTypes.object
}

export default Navbar