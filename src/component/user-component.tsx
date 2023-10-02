import React from 'react'

export const UserComponent = ({
    name,
    userName,
    email,
    isEmailVarified
}) => {
  return (
      <div>
          <p>Name : <span>{name.length > 30 ? `${name.slice(0,28)}...` : name}</span></p>
          <p>Username : {userName}</p>
          <p>Email : {email}</p>
          <p>Verified : <span>{isEmailVarified ? 'Email Verified' : 'Email Not Verified'}</span></p>
      </div>
  )
}

export default UserComponent;