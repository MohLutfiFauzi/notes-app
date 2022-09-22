import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import LocaleContext from '../contexts/LocaleContext'

function Searchbar({ keyword, keywordChange }) {
    const { locale } = useContext(LocaleContext)

    return (
        <section className="search-bar">
            <input
                type="text"
                placeholder={locale === 'id' ? 'Cari berdasarkan judul ...' : 'Search by title ...'}
                value={keyword}
                onChange={keywordChange} />
        </section>
    )
}

Searchbar.propTypes = {
    keyword: PropTypes.string.isRequired,
    keywordChange: PropTypes.func.isRequired
}

export default Searchbar