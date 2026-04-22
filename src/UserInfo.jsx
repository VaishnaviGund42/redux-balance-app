import React from 'react'
import { useSelector } from 'react-redux'

function UserInfo() {

    let data = useSelector(state => state.user)
  return (
    <div>UserInfo

    <h1>{data.userName}</h1>
    <h1>{data.balance}</h1>
    </div>
  )
}

export default UserInfo