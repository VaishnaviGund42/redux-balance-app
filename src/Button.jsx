import React from 'react'
import { addMoney } from './storeq'
import { removeMoney } from './storeq'
import { useDispatch } from 'react-redux'

function Button() {

    const dispatch = useDispatch();
  return (
    <div>
  <button onClick={()=> dispatch(addMoney(500))}>add 500</button>
  <button onClick={()=> dispatch(removeMoney(1000))}>remove 1000</button>

    </div>
  )
}

export default Button