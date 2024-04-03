import { createContext, useEffect, useState } from 'react'

const LangContext = createContext()

const LangProvider = ({ children }) => {

    const [ lang, setLang ] = useState('es')
    const [ langData, setLangData ] = useState([{}])

    useEffect(() => {

        getLangData()
        
    }, [lang])
    const getLangData = () => {
        
        const dataPath = `../../src/constants/data/${lang}.json`
        
        fetch(dataPath)
            .then((response) => response.json())
            .then((data) => setLangData(data))
            .catch((error) => console.error('Error fetching language data:', error)) 
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