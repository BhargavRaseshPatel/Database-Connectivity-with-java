import React, { useContext } from 'react'
import './Number.css'
import { StoreContext } from '../../context/StoreContext'

const Number = () => {
  
  const {money, selectedNumbers} = useContext(StoreContext)
  return (
    <div className='container'>
      <h2>Number Selected : </h2>

      {selectedNumbers.map((value, index) => (
        <div key={index} className='number-item'>
          <h3>Mark : {value}</h3>
        </div>
      ))}
      <h2 className='total-money'>Total : $ {money}</h2>
    </div>
  )
}

export default Number