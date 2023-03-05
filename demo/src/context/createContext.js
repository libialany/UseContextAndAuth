import React, { createContext, useState } from 'react';
const DataContext = createContext();
const DataProvider = ({ children }) => {
    const [name, setName] = useState(null)
    const value = {
        name,
        setName
    }
    return <DataContext.Provider value={value}>
        {children}
    </DataContext.Provider>
}
export { DataContext, DataProvider }