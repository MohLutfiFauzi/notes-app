import React from 'react'
import NoteItem from './NoteItem'
import PropTypes from 'prop-types'
import NotesListsEmpty from './NotesListsEmpty'

const NoteLists = ({ noteFiltered }) => {
    return (
        <>
            {noteFiltered.length < 1 ? <NotesListsEmpty /> :
                <section className='notes-list'>
                    {noteFiltered.map(note => <NoteItem {...note} key={note.id} />)}
                </section>
            }
        </>
    )
}

NoteLists.propTypes = {
    noteFiltered: PropTypes.arrayOf(PropTypes.object)
}

export default NoteLists