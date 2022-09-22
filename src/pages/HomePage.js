import React, { useContext, useEffect, useState } from 'react'
import NoteLists from '../components/NoteLists'
import Searchbar from '../components/Searchbar'
import HomePageAction from '../components/HomePageAction'
import { getActiveNotes } from '../utils/network-data'
import { useSearchParams } from 'react-router-dom'
import Loading from '../components/Loading'
import LocaleContext from '../contexts/LocaleContext'

const HomePage = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [keyword, setKeyword] = useState(() => searchParams.get('title') || '')
    const [activeNotes, setActiveNotes] = useState(null)
    const { locale } = useContext(LocaleContext)

    const changeKeyword = (event) => {
        setKeyword(event.target.value)
        setSearchParams({ title: event.target.value })
    }

    useEffect(() => {
        const getActive = async () => {
            const { data } = await getActiveNotes()
            setActiveNotes(data)
        }

        getActive()

        return () => {
            setActiveNotes(null)
        }

    }, [])

    if (activeNotes === null) {
        return <Loading />
    }

    return (
        <section className="homepage">
            <h2>{locale === 'id' ? 'Catatan Aktif' : 'Notes Active'}</h2>
            <Searchbar keyword={keyword} keywordChange={changeKeyword} />
            <NoteLists noteFiltered={activeNotes.filter((note) => note.title.toLowerCase().includes(keyword.toLowerCase()))} />
            <HomePageAction />
        </section>
    )
}

export default HomePage
