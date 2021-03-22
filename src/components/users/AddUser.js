import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const AddUser = () => {
  let history = useHistory()
  const [user, setUser] = useState({
    name: '',
    sex: '',
    email: '',
    skill: '',
    experience: '',
    DOB: '',
  })

  const { name, sex, email, skill, experience, DOB } = user
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    await axios.post('http://localhost:3003/users', user)
    history.push('/home')
  }

  return (
    <>
      <div className='container'>
        <div className='w-75 mx-auto shadow p-5'>
          <h2 className='text-center mb-4'>Add A User</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className='form-group'>
              <input
                type='text'
                className='form-control form-control-lg'
                placeholder='Enter Your Name'
                name='name'
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                className='form-control form-control-lg'
                placeholder='Enter Your Gender'
                name='sex'
                value={sex}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='email'
                className='form-control form-control-lg'
                placeholder='Enter Your E-mail Address'
                name='email'
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className='form-group'>
              <input
                type='text'
                className='form-control form-control-lg'
                placeholder='Enter Your Skill'
                name='skill'
                value={skill}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className='form-group'>
              <input
                type='text'
                className='form-control form-control-lg'
                placeholder='Enter Your Experience'
                name='experience'
                value={experience}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className='form-group'>
              <input
                type='text'
                className='form-control form-control-lg'
                placeholder='Enter Your Birth of Date'
                name='DOB'
                value={DOB}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button className='btn btn-primary btn-block'>Add User</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddUser
