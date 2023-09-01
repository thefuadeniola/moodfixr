import React, { useContext, createContext, useState } from 'react'
const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [media, setMedia] = useState('Books');
    const [base, setBase] = useState('Choose an option');
    const [question, setQuestion] = useState('Choose an option');
    const [numValue, setNumValue] = useState();



    return (
        <FormContext.Provider value={{
            media, setMedia, base, setBase, question, setQuestion, numValue, setNumValue
        }}>
            {children}
        </FormContext.Provider>
    )
}
export const useFormContext = () => useContext(FormContext)