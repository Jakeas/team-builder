import React, { useState } from 'react'
import Form from './Form'
import Members from './Members'
import './App.css';

const teamList = [
  {name: 'Jake', email: 'Jake@email.com', role: 'front-end engineer'},
  {name: 'Alex', email: 'Alex@email.com', role: 'software engineer'},
  {name: 'Hunter', email: 'Hunter@email.com', role: 'back-end engineer'},
  {name: 'Nicky', email: 'Nicky@email.com', role: 'designer'},
]

const initialFormValue = {
  name: '',
  email: '',
  role: '',
}

function App() {
  const [ teamMember, setTeamMember ] = useState(teamList)
  const [ formValues, setFormValues ] = useState(initialFormValue) 
  
  const updateForm = (inputName, inputValue) => {
  setFormValues({
    ...formValues,
    [inputName]: inputValue
  })
}
  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim(),
    }
   
    setTeamMember(teamMember.concat(newMember))
    setFormValues(initialFormValue)
  }

  return (
    <div className="App">
      <h1>Team Builder</h1>
      <Form 
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
      {teamMember.map((member, i) => {
        return(
          <Members 
            key={i}
            details={member} 
            />
        )
      })
    }
    </div>
  )
}

export default App;
