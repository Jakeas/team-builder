import React from 'react'

function Members(props) {
const { details } = props

    return(
        <div className='friend container'>
            <h2>{details.name}</h2>
            <p>{details.email}</p>
            <p>{details.role}</p>
        </div>
    )
}

export default Members