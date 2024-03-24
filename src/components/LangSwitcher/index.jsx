import useLangContext from '../../hooks/useLangContext.jsx'
import { spaFlag, usFlag } from '../../assets/icons'
import './styles.css'

const LangSwitcher = () => {

    const { lang, setLang } = useLangContext()

    const handleLangSwitch = () => {

        lang === 'es' ? setLang('en') : setLang('es')

    }

    return (
        <div className='lang-toggle-switcher'>
            <div>
                <img 
                    onClick={lang === 'en' ? handleLangSwitch : null}
                    className={lang === 'es' ? 'toggle-on' : 'toggle-off'}
                    src={spaFlag}
                    alt=""
                />
            </div>
            <div>
                <img 
                    onClick={lang === 'es' ? handleLangSwitch : null}
                    className={lang === 'en' ? 'toggle-on' : 'toggle-off'}
                    src={usFlag} 
                    alt=""
                />
            </div>
        </div>
    )
}

export default LangSwitcher