import { createContext, useState } from "react";

export const Context = createContext()

export const ContextProvider = ({children})=>{

    const [newSupplierName, setNewSupplierName] = useState()
    const [newSupplierCpf, setNewSupplierCpf] = useState()
    const [newSupplierPhone, setNewSupplierPhone] = useState()
    const [newSupplierFruit, setNewSupplierFruit] = useState()
    
    let suppliers = JSON.parse(localStorage.getItem('suppliers')) || []

  
    
    return(
        <Context.Provider value={{suppliers, newSupplierName, newSupplierCpf, newSupplierPhone, newSupplierFruit, setNewSupplierName, setNewSupplierCpf, setNewSupplierPhone, setNewSupplierFruit }}>
            {children}
        </Context.Provider>
    )

}