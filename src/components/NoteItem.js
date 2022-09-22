import React from 'react'
import NoteTitle from './NoteTitle'
import NoteBody from './NoteBody'
import NoteCreatedAt from './NoteCreatedAt'
import PropTypes from 'prop-types'


const NoteItem = ({ id, title, body, createdAt }) => {
    return (
        <article className='note-item' key={id}>
            <NoteTitle title={title} id={id} />
            <NoteCreatedAt createdAt={createdAt} />
            <NoteBody body={body} />
        </article>
    )
}

NoteItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired
}


export default NoteItem