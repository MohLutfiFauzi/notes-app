import React from 'react'
import PropTypes from 'prop-types'

const DetailPageTitle = ({ children }) => {
    return (
        <h3 className='detail-page__title'>
            {children}
        </h3>
    )
}

DetailPageTitle.propTypes = {
    children: PropTypes.string.isRequired
}

export default DetailPageTitle