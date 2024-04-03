import { createContext, useEffect, useState } from 'react'
import { ES, EN } from '../constants/data'

const LangContext = createContext()

const LangProvider = ({ children }) => {

    const [ lang, setLang ] = useState('es')
    const [ langData, setLangData ] = useState([{}])

    useEffect(() => {

        getLangData()
        
    }, [lang])
    const getLangData = () => {
        
        const data = lang === 'es' ? ES : EN
        setLangData(data)
    }
    
    const values = {
        lang,
        setLang,
        langData
    }

    return (
        <LangContext.Provider value={values}>
            {children}
        </LangContext.Provider>        
    )
}

export { LangContext, LangProvider }