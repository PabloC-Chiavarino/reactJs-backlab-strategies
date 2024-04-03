import useLangContext from '../../hooks/useLangContext'
import './styles.css'

const Faq = () => {

    const { lang, langData } = useLangContext()
    const { faqData } = langData

    return (
        <div className='faq-container'>
            <div className="faq-title-container" >
                <h2 key={lang}>
                    { lang === 'es' ? 'Preguntas Frecuentes' : 'Frequently Asked Questions' }
                </h2>
            </div >
            {faqData?.map((data) => {
                return (
                    <div key={data.id} className='question-container'>
                        <div>
                            <details>
                                {data.answer}
                                <summary>
                                    {data.question}
                                </summary>
                            </details>
                        </div>
                        <hr />
                    </div>
                )
            })}
        </div>
    )
}

export default Faq