import './styles.css'

const Stats = ({ lang, statsData }) => {

    return (
        <section className='section-estadisticas'>
            <h1 className='title-estadisticas' key={lang+21}>
                { lang === 'es' ? 'Personalización de Estadísticas': 'Customization of Statistics' }
            </h1>
            <p className='p-estadisticas' key={lang+22}>
                { lang === 'es' ? 'Entendemos que cada estrategia y cada inversor pueden tener necesidades y ' : 'We understand that each strategy and each investor may have needs and ' }
                <span> 
                    { lang === 'es' ? 'preferencias específicas en cuanto a las métricas que desean analizar.' : 'preferences in regards to the metrics that they want to analyze.' }
                </span>
            </p>
            <h2 className="subtitle-estadisticas" key={lang+23}>
                { lang === 'es' ? 'Estadísticas por Default' : 'Default Statistics' }
            </h2>
            <div className="estadisticas-container">
                
                {statsData?.map((data) => {

                    return (
                        <div key={data.title} className='estadistica'>
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
