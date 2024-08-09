import useLangContext from '../../hooks/useLangContext.jsx'
import { teamWork, team1, team2 } from '../../assets/img'
import './styles.css'

const About = () => {

    const { lang } = useLangContext()

    return (
        <>
            <section className="about-us-section" style={{ paddingTop: '4%' }}>
                <div className='title-container'>
                    <h2 className='title' key={lang}>
                        {lang === 'es' ? 'Sobre Nosotros' : 'About Us'}
                    </h2>
                </div>
                <div className="cards">
                    <div className="about-card gradient-border-about">
                        <h3 style={{ marginTop: '9%', fontSize: '1.5rem', fontWeight: '800' }} key={lang+1}>
                            { lang === 'es' ? 'Nuestra Misión' : 'Our Mission'}
                        </h3>
                        <p className='about-card-text' key={lang+2}>
                            { lang === 'es' ? 'En Backlabs Strategies, nos dedicamos a redefinir el mundo del trading al fusionar la potencia de la personalización con la ciencia de las inversiones.Nuestra misión es empoderar a cada inversor, sin importar su nivel de experiencia, brindándoles las herramientas necesarias para tomar decisiones financieras informadas y personalizadas.'
                            :
                            'At Backlabs Strategies, we are dedicated to redefining the world of trading by fusing the power of personalization with the science of investing. Our mission is to empower every investor, regardless of their level of experience, by providing them with the tools necessary to make informed financial decisions. and personalized.' }
                        </p>
                    </div>
                    <div className="about-card gradient-border-about">
                        <h3 style={{ marginTop: '9%', fontSize: '1.5rem', fontWeight: '800' }} key={lang+3}>
                            { lang === 'es' ? 'Nuestra Visión' : 'Our Vision'}
                        </h3>
                        <p className='about-card-text' key={lang+4}>
                            { lang === 'es' ? 'En Backlabs Strategies, aspiramos a ser líderes indiscutibles en el mundo del trading personalizado, donde cada cliente encuentra la llave para desbloquear su máximo potencial financiero. Visualizamos un futuro donde la personalización no solo sea una opción, sino la norma, y donde cada inversor se sienta capacitado para tomar el control total de su éxito financiero.' 
                            : 
                            'At Backlabs Strategies, we aspire to be undisputed leaders in the world of personalized trading, where each client finds the key to unlock their maximum financial potential. We envision a future where personalization is not just an option, but the norm, and where every investor feels empowered to take full control of their financial success.' }
                        </p>
                    </div>
                </div>
            </section>
            <section className="section-team">
                <div className="titleInfo-about-container" key={lang+5}>
                    <h2 className='title'>
                        {lang === 'es' ? 'Nuestro Equipo' : 'Our Team'}
                    </h2>
                    <h4 className='info'>
                        { lang === 'es' ? 'Conocé a nuestro equipo de expertos en trading' : 'Know our team of experts in trading' }
                    </h4>
                </div>
                <img className='teamImg' src={teamWork} style={{ marginTop: '-30px', marginBottom: '-5px' }} alt="" />
                <div className='team-container'>
                    <div className='team' style={{ right: '4%' }}>
                        <img className='team-img' src={team1} alt="" />
                        <div className='team-data'>
                            <h3 className='team-name'>Juan Casimiro</h3>
                            <h6 key={lang+6}>
                                { lang === 'es' ? 'Desarrollador' : 'Developer'}
                            </h6>
                            <p className='team-detail' key={lang+7} >
                                { lang === 'es' ? '¡Hola a todos! Soy Juan Casimiro, y entiendo los desafíos y preocupaciones que enfrentan los traders al tratar de navegar por los mercados financieros. Como trader autodidacta y desarrollador full stack, he dedicado mi carrera a crear soluciones tecnológicas que faciliten y mejoren la experiencia de trading. Como trader autodidacta durante más de cuatro años, conozco la importancia de contar con herramientas confiables y efectivas para tomar decisiones informadas en un mercado volátil.' 
                                :
                                'Hello everyone! I am Juan Casimiro, and I understand the challenges and concerns that traders face when trying to navigate the financial markets. As a self-taught trader and full stack developer, I have dedicated my career to creating technological solutions that facilitate and improve the trading experience. As a self-taught trader for over four years, I know the importance of having reliable and effective tools to make informed decisions in a volatile market.' }
                                <br />
                                <br />
                                { lang === 'es' ? 'Entiendo los miedos y las incertidumbres que pueden surgir al enfrentarse al mundo del trading, y estoy aquí para ofrecerte las herramientas y el apoyo que necesitas para tener éxito. Con un enfoque en la profesionalidad, la calidad y la transparencia, mi objetivo es proporcionarte soluciones personalizadas que se adapten a tus necesidades. Ya sea que estés buscando optimizar tus estrategias de trading o simplificar tus procesos de análisis, estoy aquí para ayudarte a alcanzar tus objetivos financieros.'
                                :
                                'I understand the fears and uncertainties that can arise when facing the world of trading, and I am here to offer you the tools and support you need to succeed. With a focus on professionalism, quality and transparency, my goal is to provide you with customized solutions that fit your needs. Whether you are looking to optimize your trading strategies or simplify your analysis processes, I am here to help you achieve your financial goals.'}
                                <br />
                                <br />
                                { lang === 'es' ? '¡No estás solo en este viaje! Estoy aquí para ofrecerte apoyo y orientación en cada paso del camino.' 
                                :
                                '¡You are not just on this trip! I am here to provide support and guidance in each step of your journey.' }
                            </p>
                        </div>
                    </div>
                    <div className='team' style={{ left: '4%' }}>
                        <img className='team-img' src={team2} alt="" />
                        <div className='team-data'>
                            <h3 className='team-name'>Ignacio Tolosa</h3>
                            <h6 key={lang+8}>
                                { lang === 'es' ? 'Analista' : 'Analyst'}
                            </h6>
                            <p className='team-detail' key={lang+9} >
                                { lang === 'es' ? '¡Bienvenidos traders! Soy Ignacio Tolosa, desarrollador y analista de datos en BackLab. Entiendo perfectamente los desafíos que enfrentan los traders al operar en los mercados financieros y encontrar estrategias rentables. Como desarrollador y trader autodidacta, me he dedicado a crear soluciones tecnológicas que simplifiquen y mejoren el proceso de backtesting.' 
                                :
                                'Welcome traders! I am Ignacio Tolosa, developer and data analyst at BackLab. I fully understand the challenges that traders face when trading the financial markets and finding profitable strategies. As a developer and self-taught trader, I have dedicated myself to creating technological solutions that simplify and improve the backtesting process.' }
                                <br />
                                <br />
                                { lang === 'es' ? 'Durante mi carrera, he trabajado arduamente para desarrollar herramientas de backtesting confiables y efectivas que permitan a nuestros clientes tomar decisiones informadas en un mercado tan dinámico como el financiero. En mi papel como socio de BackLab, me comprometo a ofrecer soluciones personalizadas que se adapten a las necesidades específicas de nuestros clientes.'
                                :
                                'During my career, I have worked hard to develop reliable and effective backtesting tools that allow our clients to make informed decisions in a market as dynamic as the financial market. In my role as a BackLab Partner, I am committed to offering customized solutions that fit the specific needs of our clients.' }
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About