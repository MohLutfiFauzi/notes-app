import React from 'react'
import PropTypes from 'prop-types'
import parser from 'html-react-parser'

const DetailPageBody = ({ children }) => {
    return (
        <div className='detail-page__body'>
            {parser(children)}
        </div>
    )
}

DetailPageBody.propTypes = {
    children: PropTypes.string.isRequired
}

export default DetailPageBody