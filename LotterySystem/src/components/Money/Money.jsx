import React, { useContext, useEffect } from 'react'
import './Money.css'
import { StoreContext } from '../../context/StoreContext'

const Money = () => {
    let moneyDisplay = [1, 5, 10, 20]
    const { setMoney, money } = useContext(StoreContext)

    return (
        <div className='money-container'>
            {moneyDisplay.map((value, index) => (
                <div 
                key={index} className='money-item'>
                    <button onClick={() => setMoney(money + value)}>${value}</button>
                </div>
            ))}
        </div>
    )
}

export default Money