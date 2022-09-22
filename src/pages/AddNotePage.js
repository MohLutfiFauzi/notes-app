import React from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import { addNote } from '../utils/network-data'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

function AddNotePageWrapper() {
    const navigate = useNavigate()

    return <AddNotePage navigate={navigate} />
}

class AddNotePage extends React.Component {
    constructor(props) {
        super(props)

        // inisialisasi state
        this.state = {
            title: '',
            body: '',
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this)
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this)
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this)
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value,
            }
        })
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.innerHTML,
            }
        })
    }

    async onSubmitEventHandler(event) {
        event.preventDefault()

        if (!this.state.body || !this.state.title) {
            alert('title atau body harus di isi')
        } else {
            await addNote(this.state)
            this.props.navigate('/')
        }
    }

    render() {
        return (
            <section className='add-new-page' onSubmit={this.onSubmitEventHandler}>
                <div className='add-new-page__input'>
                    <input className='add-new-page__input__title' type="text" placeholder="Catatan rahasia" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                    <div className='add-new-page__input__body' type="text" data-placeholder="Sebenarnya saya adalah ..." contentEditable value={this.state.body} onInput={this.onBodyChangeEventHandler} />
                </div>
                <div className='add-new-page__action'>
                    <button className='action' type="submit" onClick={this.onSubmitEventHandler}>
                        <AiOutlineCheck />
                    </button>
                </div>
            </section>
        )
    }
}

AddNotePage.propTypes = {
    navigate: PropTypes.func.isRequired
}

export default AddNotePageWrapper
