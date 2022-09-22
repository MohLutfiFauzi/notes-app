import React, { useContext } from 'react'
import LocaleContext from '../contexts/LocaleContext'

const NotesListsEmpty = () => {
    const { locale } = useContext(LocaleContext)
    return (
        <section className='notes-list-empty'>
            <p className='notes-list__empty'>{locale === 'id' ? 'Tidak ada catatan' : 'No notes'}</p>
        </section>
    )
}

export default NotesListsEmpty