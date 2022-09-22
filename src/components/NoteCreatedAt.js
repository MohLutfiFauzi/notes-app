import React from 'react'
import changeDate from '../utils/changeDate'
import PropTypes from 'prop-types'

const NoteCreatedAt = ({ createdAt }) => {
    const d = changeDate(createdAt)

    return (
        <p className='note-item__createdAt'>{d.hari}, {d.tanggal} {d.bulan} {d.tahun}</p>
    )
}

NoteCreatedAt.propTypes = {
    createdAt: PropTypes.string.isRequired
}

export default NoteCreatedAt