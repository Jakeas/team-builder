import React from 'react'
import './App.css';

function Members(props) {
const { details } = props

    return(
        <div className='container'>
            <div className='friend-container'>
                <h2>{details.name}</h2>
                <h3>{details.email}</h3>
                <h3>{details.role}</h3>
            </div>
        </div>   
    )
}

export default Members