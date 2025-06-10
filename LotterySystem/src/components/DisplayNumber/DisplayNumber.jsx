import React, { useContext } from 'react'
import './DisplayNumber.css'
import { StoreContext } from '../../context/StoreContext'

const DisplayNumber = () => {
    const { selectedNumbers, setSelectedNumbers, setMoney, selectRandomNumber } = useContext(StoreContext)
    let number = []

    for (let i = 0; i < 20; i++) {
        number.push(i + 1)
    }

    const selectTheNumber = (value) => {
        if(selectedNumbers.length >= 5) {
            alert("You can only select 5 numbers");
            return;
        }
        setSelectedNumbers([...selectedNumbers,value]); console.log(selectedNumbers)
    }
    return (
        <div className="display-number">
            {number.map((value, index) => (
                <div key={index} className={`display-number-item ${selectedNumbers.includes(value) ? 'selected' : ''}`}>
                    <button disabled={selectedNumbers.includes(value)} onClick={() => selectTheNumber(value)}>{value}</button>
                </div>
            ))}

            <button className='display-button'>CASH</button>
            <button className='display-button' onClick={() => {setSelectedNumbers([]); setMoney(0)}}>CLEAR</button>
            <button className='display-button' onClick={selectRandomNumber}>Random</button>
        </div>
    )
}

export default DisplayNumber