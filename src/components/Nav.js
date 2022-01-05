import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='nav'>
            <Link className='list' to="/">Home</Link>
            <Link className='list' to="/add">Add</Link>
        </div>
    )
}

export default Nav
