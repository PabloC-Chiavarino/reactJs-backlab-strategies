import { useState, useEffect, useRef } from 'react'
import useLangContext from '../../hooks/useLangContext'
import { objectivesBg } from '../../assets/img'
import './styles.css'

const Objectives = () => {

    const { lang } = useLangContext()
    const [isIntersecting, setIsIntersecting] = useState(false)
    const backgroundRef = useRef()
    const spanRef = useRef()

    useEffect(() => {
        
        const elements = [
            backgroundRef.current,
            spanRef.current
        ]

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setIsIntersecting(entry.isIntersecting))
        })

        if (elements) {
            elements.forEach((element) => {
                observer.observe(element)
            })
        }

        return () => observer.disconnect()

    }, [])

    return (
        <div className='section-objectivos'>
            <img
                className={isIntersecting ? 'objectives-bg animateGrow' : 'objectives-bg'}
                ref={backgroundRef}
                src={objectivesBg}
                alt=""
            />
            <div className="title-info-container" key={lang}>
                <h1 className='title-object'>
                    { lang === 'es' ? `¡Nos adaptamos a tus objetivos!` : '¡We adapt to your objectives!' }
                </h1>
                <p className='p-object'>
                    { lang === 'es' ? 'Si hay parámetros y estrategias específicas que le gustaría ajustar para su backtesting...' : 'If there are parameters and specific strategies that you like to adjust for your backtesting...' }
                    <span
                        ref={spanRef}
                        className={ isIntersecting ? 'span-object animateFade' : 'span-object' }
                    >
                        { lang === 'es' ? '¡NO DUDE EN CONSULTARNOS!' : '¡DO NOT HESITATE TO CONTACT US!' }
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Objectives