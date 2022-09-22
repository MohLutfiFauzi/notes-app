import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { BiArchiveIn, BiArchiveOut } from 'react-icons/bi'
import PropTypes from 'prop-types'

const DetailPageAction = ({ deleteNote, archiveOrUnarchiveNote }) => {
    return (
        <div className='detail-page__action'>
            <button className='action' type='button' title='Arsipkan' onClick={archiveOrUnarchiveNote[0]}>
                {archiveOrUnarchiveNote[1] ? <BiArchiveOut /> : <BiArchiveIn />}
            </button>
            <button className='action' type='button' title='Hapus' onClick={deleteNote}>
                <AiOutlineDelete />
            </button>
        </div >
    )
}

DetailPageAction.propTypes = {
    deleteNote: PropTypes.func.isRequired,
    archiveOrUnarchiveNote: PropTypes.array.isRequired
}

export default DetailPageAction