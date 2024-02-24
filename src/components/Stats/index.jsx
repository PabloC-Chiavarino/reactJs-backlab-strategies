import { statsData } from '../../constants/data'
import './styles.css'

const Stats = () => {

    return (
        <section className='section-estadisticas'>
            <h1 className='title-estadisticas'>Personalización de Estadísticas</h1>
            <p className='p-estadisticas'>Entendemos que cada estrategia y cada inversor pueden tener necesidades y<br />
                <span> preferencias específicas en cuanto a las métricas que desean analizar.</span>
            </p>
            <h2 className="subtitle-estadisticas">Estadísticas por Default</h2>
            <div className="estadisticas-container">
                {statsData.map((data, index) => {

                    return (
                        <div key={index} className='estadistica'>
                            <h3 style={{ fontSize: '1rem', marginBottom: '5%' }}>{data.title}</h3>
                            <span className='estadistica-description'>{data.description}</span>
                            <span className='estadistica-description estadistica-main-description'>{data.mainDescription}</span>
                        </div>
                    )
                })
                }
            </div>
        </section>
    )
}

export default Stats;
