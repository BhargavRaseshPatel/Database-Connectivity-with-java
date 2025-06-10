import { createContext, useEffect, useState } from "react";


export const StoreContext = createContext(null);

export const StoreProvider = ({ children }) => {
    const [money, setMoney] = useState(0);
    const [selectedNumbers, setSelectedNumbers] = useState([]);

    // useEffect(() => {
    // }, [money, selectedNumbers]);

    const selectRandomNumber = () => {
        console.log("Generate")

        setSelectedNumbers([])
        let fiveRandomNumber = []

        for (let i = 0; i < 5; i++) {
            let number = Math.floor(Math.random() * 20) + 1;
            // console.log(selectedNumbers, number)
            if(!fiveRandomNumber.includes(number)){
                // continue;
                fiveRandomNumber.push(number)
            } else {
                i = i -1 
            }
        }
        setSelectedNumbers(fiveRandomNumber)
    }

    const contextValue = {
        money,
        setMoney,
        selectedNumbers,
        setSelectedNumbers,
        selectRandomNumber
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
}