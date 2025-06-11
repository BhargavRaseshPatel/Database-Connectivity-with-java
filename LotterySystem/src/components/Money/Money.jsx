import React, { useContext, useEffect } from 'react'
import './Money.css'
import { StoreContext } from '../../context/StoreContext'

const Money = () => {
    let moneyDisplay = [1, 5, 10, 20]
    const { setMoney, money, selectedNumbers } = useContext(StoreContext)

    return (
        <div className='money-container'>
            {moneyDisplay.map((value, index) => (
              
                    <button className='money-item' onClick={() => { if (selectedNumbers.length == 5) setMoney(money + value) }}>${value}</button>
            ))}
        </div>
    )
}

export default Money