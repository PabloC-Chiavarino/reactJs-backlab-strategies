import './styles.css'

const OpacityDiv = ({ show, handleOpacity }) => {
    return (
        <div 
        className='opacityDiv'
        style={{ display: show ? 'block' : 'none' }}
        onClick={handleOpacity}
        />
    )
}

export default OpacityDiv