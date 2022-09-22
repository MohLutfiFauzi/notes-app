import React from 'react'
import PropTypes from 'prop-types'
import changeDate from '../utils/changeDate'

const DetailPageCreatedAt = ({ children }) => {
    const d = changeDate(children)
    return (
        <p className='detail-page__createdAt'>
            {d.hari}, {d.tanggal} {d.bulan} {d.tahun}
        </p>
    )
}

DetailPageCreatedAt.propTypes = {
    children: PropTypes.string.isRequired
}

export default DetailPageCreatedAt