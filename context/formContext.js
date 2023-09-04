'use client'
import React, { useContext, createContext, useState } from 'react'
const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [media, setMedia] = useState('Books');
    const [base, setBase] = useState('Choose an option');
    const [question, setQuestion] = useState('Choose an option');
    const [numValue, setNumValue] = useState(5);
    const [results, setResults] = useState({})



    return (
        <FormContext.Provider value={{
            media, setMedia, base, setBase, question, setQuestion, numValue, setNumValue, results, setResults
        }}>
            {children}
        </FormContext.Provider>
    )
}
export const useFormContext = () => useContext(FormContext)