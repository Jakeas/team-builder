import React from 'react'

function Form (props) {
    const { values, update, submit } = props

    const onChange = evt => {
        const {name, value} = evt.target
        update(name, value)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    } 

    return (
    <form className = 'form container' onSubmit={onSubmit}>
        <div>
            <label>
                <input 
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={onChange}
                    placeholder="Name"
                    maxLength="40"
                    />
            </label>
            <label>
                <input 
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={onChange}
                    placeholder="myemail@email.com"
                    maxLength="20"
                    />
            </label>
            <label>
                <select name="role" value={values.role}
                onChange={onChange}>
                    <option value="">---Select Role---</option>
                    <option value="Software Engineer">Software Engineer</option>
                    <option value="Front-end Engineer">Front-end Engineer</option>
                    <option value="Back-end Engineer">Back-end Engineer</option>
                    <option value="Designer">Designer</option>
                    <option value="Other">Other</option>
                </select>
            </label>
                <div>
                    <button disabled={!values.name || !values.email || !values.role}>Submit</button>
                </div>
        </div>
    </form>
    )
}

export default Form