import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const HomePageAction = () => {
    return (
        <div className='homepage__action'>
            <Link to='/notes/new' className='action' type='button' title='tambah'>
                <AiOutlinePlus />
            </Link>
        </div>
    )
}

export default HomePageAction