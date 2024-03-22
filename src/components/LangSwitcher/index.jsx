import { spaFlag, usFlag } from '../../assets/icons'
import './styles.css'

const LangSwitcher = () => {

    return (
        <div className='lang-toggle-switcher'>
            <div>
                <img 
                    className='toggle-on'
                    src={spaFlag}
                    alt=""
                />
            </div>
            <div>
                <img 
                    className='toggle-off'
                    src={usFlag} 
                    alt="" 
                />
            </div>
        </div>
    )
}

export default LangSwitcher