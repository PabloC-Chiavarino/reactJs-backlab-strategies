import useLangContext from '../../hooks/useLangContext';
import './styles.css';

const MainCards = () => {

  const { langData } = useLangContext()
  return langData['mainCardsData']?.map((data) => {

    return (
      <div className="main-card" key={data.title}>
        <img className='main-card--icon' src={data.icon} alt="" />
        <h3 style={{ marginTop: '0', fontSize: '1.5rem', padding: '1.5rem 2rem 0 2rem' }}>{data.title}</h3>
        <p style={{ marginTop: '1.7rem', lineHeight: '1.8rem', padding: '0 2rem 0 2rem', fontWeight: '500', color: '#858585' }}>{data.description}</p>
      </div>
    )
  }
)}

export default MainCards;