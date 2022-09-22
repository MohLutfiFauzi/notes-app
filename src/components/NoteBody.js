import React from 'react'
import PropTypes from 'prop-types'
import parser from 'html-react-parser'

const NoteBody = ({ body }) => {
    return (
        <p className='note-item__body'>{parser(body)}</p>
    )
}

NoteBody.propTypes = {
    body: PropTypes.string.isRequired
}

export default NoteBody