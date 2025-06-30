import React, { useContext } from 'react'
import { AuthContext } from '../../context/auth'

function UserProfile() {

    const {authuser} =useContext(AuthContext)
    console.log(authuser)
  return (
    <div>
      <h1>Hi My Freind {authuser.email}</h1>
    </div>
  )
}

export default UserProfile
