import { createContext, useState } from 'react'

export const LangContext = createContext()

const LangProvider = ({ children }) => {

    const [ lang, setLang ] = useState('es')

    const values = {
        lang,
        setLang
    }

    return (
        <LangContext.Provider value={ values }>
            {children}
        </LangContext.Provider>        
    )
}

export default LangProvider