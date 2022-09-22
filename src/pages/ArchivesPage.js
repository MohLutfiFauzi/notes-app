import React, { useContext } from 'react'
import NoteLists from '../components/NoteLists'
import Searchbar from '../components/Searchbar'
import { getArchivedNotes } from '../utils/network-data'
import { useSearchParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import Loading from '../components/Loading'
import LocaleContext from '../contexts/LocaleContext'

function ArchivePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams()
    const { locale } = useContext(LocaleContext)

    function changeSearchParams(keyword) {
        setSearchParams({ title: keyword })
    }

    const title = searchParams.get('title')

    return <ArchivePage onSearch={changeSearchParams} activeKeyword={title} locale={locale} />
}

class ArchivePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            notes: null,
            keyword: props.activeKeyword || ''
        }

        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this)
    }

    async componentDidMount() {
        const { error, data } = await getArchivedNotes()
        if (!error) {
            this.setState({
                notes: data
            })
        }

    }

    onKeywordChangeHandler(event) {
        this.setState(() => {
            return {
                keyword: event.target.value,
            }
        })

        this.props.onSearch(event.target.value)
    }

    render() {
        if (this.state.notes === null) {
            return <Loading />
        }

        const notes = this.state.notes.filter((note) => {
            return note.title.toLowerCase().includes(
                this.state.keyword.toLowerCase()
            )
        })

        return (
            <section className="homepage">
                <h2>{this.props.locale === 'id' ? 'Catatan Arsip' : 'Notes Archives'}</h2>
                <Searchbar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
                <NoteLists noteFiltered={notes} />
            </section>
        )
    }
}

ArchivePage.propTypes = {
    onSearch: PropTypes.func,
    activeKeyword: PropTypes.string,
    locale: PropTypes.string.isRequired
}

export default ArchivePageWrapper

