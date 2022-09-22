import React from 'react'
import { useParams } from 'react-router-dom'
import { getNote, deleteNote, archiveNote, unarchiveNote } from '../utils/network-data'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

import DetailPageAction from '../components/DetailPageAction'
import DetailPageBody from '../components/DetailPageBody'
import DetailPageCreatedAt from '../components/DetailPageCreatedAt'
import DetailPageTitle from '../components/DetailPageTitle'
import PageNotFound from './PageNotFound'
import Loading from '../components/Loading'

function DetailPageWrapper() {
    const { id } = useParams()
    const navigate = useNavigate()

    return <DetailPage id={id} navigate={navigate} />
}

class DetailPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            note: null
        }

        this.onDeleteNote = this.onDeleteNote.bind(this)
        this.onArchiveNote = this.onArchiveNote.bind(this)
    }

    async componentDidMount() {
        const { error, data } = await getNote(this.props.id)
        if (!error) {
            this.setState(() => {
                return {
                    note: data
                }
            })
        } else {
            this.setState(() => {
                return {
                    note: undefined
                }
            })
        }
    }

    async onDeleteNote(event) {
        if (window.confirm('Yakin ingin menghapus catatan ?')) {
            event.preventDefault()
            this.props.navigate('/', await deleteNote(this.props.id))
        }
    }

    async onArchiveNote(event) {
        event.preventDefault()
        if (!this.state.note.archived) {
            this.props.navigate('/', await archiveNote(this.props.id))
        } else {
            this.props.navigate('/', await unarchiveNote(this.props.id))
        }
    }

    render() {
        if (this.state.note === null) {
            return <Loading />
        }

        return (
            this.state.note !== undefined ?
                <section className='detail-page'>
                    <DetailPageTitle>{this.state.note.title}</DetailPageTitle>
                    <DetailPageCreatedAt>{this.state.note.createdAt}</DetailPageCreatedAt>
                    <DetailPageBody>{this.state.note.body}</DetailPageBody>
                    <DetailPageAction deleteNote={this.onDeleteNote} archiveOrUnarchiveNote={[this.onArchiveNote, this.state.note.archived]} />
                </section> : <PageNotFound />
        )
    }
}

DetailPage.propTypes = {
    navigate: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
}

export default DetailPageWrapper