import React, { useEffect, useMemo, useState } from 'react'
import Navbar from './components/Navbar'
import { Link, Route, Routes } from 'react-router-dom'
import { getAccessToken, getUserLogged, putAccessToken } from './utils/network-data'
import LocaleContext from './contexts/LocaleContext'

import HomePage from './pages/HomePage'
import ArchivesPage from './pages/ArchivesPage'
import AddNotePage from './pages/AddNotePage'
import DetailPage from './pages/DetailPage'
import PageNotFound from './pages/PageNotFound'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

function App() {
    const [authedUser, setAuthedUser] = useState(null)
    const [initializing, setInitializing] = useState(true)
    const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('theme')) || 'dark')
    const [locale, setLocale] = useState(JSON.parse(localStorage.getItem('language')) || 'id')

    const toggleLocale = () => {
        setLocale((prevLocale) => {
            return prevLocale === 'id' ? 'en' : 'id'
        })
    }

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            return prevTheme === 'dark' ? 'light' : 'dark'
        })
    }

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(theme))
        localStorage.setItem('language', JSON.stringify(locale))
    }, [theme, locale])

    const localeContextValue = useMemo(() => {
        return {
            locale,
            toggleLocale,
            theme,
            toggleTheme
        }
    }, [locale, theme])

    const onLoginSuccess = async ({ accessToken }) => {
        putAccessToken(accessToken)
        const { data } = await getUserLogged()

        setAuthedUser(data)
        setInitializing(false)
    }

    const onLogout = () => {
        setAuthedUser(null)
        putAccessToken('')
    }

    useEffect(() => {
        const getUser = async () => {
            if (getAccessToken()) {
                const { data } = await getUserLogged()
                setAuthedUser(data)
                setInitializing(false)
            }
            setInitializing(false)
        }

        getUser()

    }, [])

    if (initializing) {
        return null
    }

    return (
        <LocaleContext.Provider value={localeContextValue}>
            <div className="app-container" data-theme={theme}>
                <header>
                    <h1>
                        <Link to="/">{locale === 'id' ? 'Aplikasi Catatan' : 'Notes App'}</Link>
                    </h1>
                    <Navbar authedUser={authedUser} logout={onLogout} />
                </header>
                <main>
                    {
                        authedUser ?
                            <Routes>
                                <Route path='/' element={<HomePage />} />
                                <Route path='/archives' element={<ArchivesPage />} />
                                <Route path='/notes/:id' element={<DetailPage />} />
                                <Route path='/notes/new' element={<AddNotePage />} />
                                <Route path='/*' element={<PageNotFound />} />
                            </Routes>
                            :
                            <Routes>
                                <Route path='/*' element={<LoginPage loginSuccess={onLoginSuccess} />} />
                                <Route path='/register' element={<RegisterPage />} />
                            </Routes>
                    }
                </main>
            </div>
        </LocaleContext.Provider>
    )
}

export default App
