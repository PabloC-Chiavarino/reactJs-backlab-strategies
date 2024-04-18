import useLangContext from '../../hooks/useLangContext';
import './styles.css';

const MainCards = () => {

  const { langData } = useLangContext()
  return langData['mainCardsData']?.map((data) => {

    return (
      <div className="main-card" key={data.title}>
        <img className='main-card--icon' src={data.icon} alt="" />
        <h3 className='main-card--title'>{data.title}</h3>
        <p className='main-card--description'>{data.description}</p>
      </div>
    )
  }
)}

export default MainCards;