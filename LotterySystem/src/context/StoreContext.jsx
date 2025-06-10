import { createContext, useEffect, useState } from "react";


export const StoreContext = createContext(null);

export const StoreProvider = ({ children }) => {
    const [money, setMoney] = useState(0);
    const [selectedNumbers, setSelectedNumbers] = useState([]);

    // useEffect(() => {
    // }, [money, selectedNumbers]);

    const contextValue = {
        money,
        setMoney,
        selectedNumbers,
        setSelectedNumbers
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
}