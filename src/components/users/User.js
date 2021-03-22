import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const User = () => {
  const [user, setUser] = useState({
    name: '',
    sex: '',
    email: '',
    skill: '',
    experience: '',
    DOB: '',
  })
  const { id } = useParams()
  useEffect(() => {
    loadUser()
  }, [])
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`)
    setUser(res.data)
  }
  return (
    <div className='container py-4'>
      <Link className='btn btn-primary' to='/home'>
        back to Home
      </Link>
      <h1 className='display-4'>User Id: {id}</h1>
      <hr />
      <ul className='list-group w-50'>
        <li className='list-group-item'>name: {user.name}</li>
        <li className='list-group-item'>sex: {user.sex}</li>
        <li className='list-group-item'>email: {user.email}</li>
        <li className='list-group-item'>skill: {user.skill}</li>
        <li className='list-group-item'>experience: {user.experience}</li>
        <li className='list-group-item'>Date-of-Birth: {user.DOB}</li>
      </ul>
    </div>
  )
}

export default User
