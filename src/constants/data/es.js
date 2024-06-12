import { historical,acivesDiv,flex,params,analysis,multiplat,realCond,inter,web,risk } from '../../assets/icons'

  const dataES = {

    mainCardsData: [
      {
        icon: historical,
        title: "Datos Históricos Complejos",
        description: "Acceso a datos históricos detallados y completos para realizar análisis exhaustivos."
      },
      {
        icon: acivesDiv,
        title: "Diversidad de Activos",
        description: "Posibilidad de backtestear estrategias en una amplia gama de activos financieros, incluyendo acciones, divisas criptomoneda y materias primas."
      },
      {
        icon: flex,
        title: "Flexibilidad Temporal",
        description: "Opción de ajustar el rango de fechas y frecuencia temporal para adaptarse a diferentes períodos de análisis."
      },
      {
        icon: params,
        title: "Personalización de Indicadores",
        description: "Capacidad para utilizar una variedad de indicadores técnicos y personalizar parámetros según las necesidades de la estrategia."
      },
      {
        icon: analysis,
        title: "Análisis Estadístico",
        description: "Herramientas avanzadas de análisis estadístico para evaluar el rendimiento de la estrategia, incluyendo métricas como ratio de Sharpe y drawdown máximo."
      },
      {
        icon: multiplat,
        title: "Backtesting Multiplataforma",
        description: "Compatibilidad con diversas plataformas de trading para asegurar la consistencia en los resultados obtenidos."
      },
      {
        icon: realCond,
        title: "Pruebas de Condiciones Reales",
        description: "Capacidad para simular condiciones de mercado reales, incluyendo costos de transacción y deslizamiento, para obtener resultados más precisos."
      },
      {
        icon: inter,
        title: "Inferfaz Intuitiva",
        description: "Diseño de interfaz amigable y fácil de usar que permite una experiencia de backtesting fluida y eficiente para usuarios de todos los niveles de experiencia."
      },
      {
        icon: risk,
        title: "Gestión de Riesgos",
        description: "Permite evaluar y ajustar estrategias considerando el riesgo, con opciones para establecer niveles de stop loss, take profit y gestionar el tamaño de posición según la volatilidad del mercado."
      },
      {
        icon: web,
        title: "Exclusiviad Web",
        description: "La herramienta se ofrece a través de una plataforma web exclusiva para nuestros clientes, brindando acceso fácil y conveniente desde cualquier dispositivo con conexión a internet."
      }
    ],
    securityData: [
      {
        title: "Protocolo de seguridad avanzado",
        description: "Utilizamos tecnologías de seguridad de vanguardia para garantizar la integridad y confidencialidad de tus datos. Nustros protocolos de encriptación de extremo a extremo protegen tus transacciones y cualquier información personal que nos confíes."
      },
      {
        title: "Control total en tus manos",
        description: "Te brindamos herramientas para gestionar y controla quién accede a tu información, dándote la capacidad de personalizar tu experiencia según tus preferencias de privacidad."
      },
      {
        title: "Compromiso contra el acceso no autorizado",
        description: "Nuestro equipo de expertos en seguridad trabaja incansablemnte para prevenir cualquier acceso no autorizado a tu cuenta. Implementamos medidas proactivas para detectar y mitigar posibles amenazas, garantizando un ambiente seguro y confiable para tus actividades financieras."
      },
      {
        title: "Tu confianza es nuestra prioridad",
        description: "Entendemos que la confianza es la base de cualqueir relación exitosa en el mundo financiero. Queremos que operes con total confianza, sabiendo que tus datos están protegidos con los más altos estándares de seguridad."
      }
    ],
    servicesData: [
      {
        title: "1- Take Profit y su Manera de Cálculo",
        description: "Se configura según el manejo de riesgo de la estrategia, asegurando ganancias en una operación."
      },
      {
        title: "2- Stop Loss",
        description: "Se establece según el manejo de riesgo de la estrategia, limitando las pérdidas en una operación."
      },
      {
        title: "3- Rango de Fechas",
        description: "Sirve para acotar el período de análisis de una estrategia, permitiendo enfocarse en datos específicos del mercado."
      },
      {
        title: "4- Activo (Moneda/Acción)",
        description: "Selecciona el instrumento financiero."
      },
      {
        title: "5- Rango Horario de Operación",
        description: "Selecciona las horas específicas para operar en el mercado."
      },
      {
        title: "6- Capital Inicial",
        description: "Establece la cantidad de dinero con la que se inicia una estrategia de trading automatizada y se usa para calcular las estadísticas."
      },
      {
        title: "7- Configuración de Indicadores",
        description: "Define las características y ajustes específicos del indicador utilizado en una estrategia."
      },
      {
        title: "8- Comisiones",
        description: "Establece los costos asociados a las transacciones dentro de una estrategia de trading automatizada."
      }
    ],
    backtestingData: [
      {
        title: "1- Optimización de estrategias",
        mainDescription: "Permite mejorar el rendimiento de las estrategias de trading",
        description: " al probar y ajustarlas antes de usarlas en tiempo real."
      },
      {
        title: "2- Reducción de riesgos",
        mainDescription: "Identifica y corrige posibles debilidades en las estrategias",
        description: ", minimizando pérdidas durante el trading real."
      },
      {
        title: "3- Ahorro de tiempo y recursos",
        mainDescription: "Automatiza el proceso de evaluación y optimización",
        description: ", ahorrando tiempo y recursos al evitar pruebas manuales."
      },
      {
        title: "4- Análisis detallado",
        mainDescription: "Ofrece herramientas para analizar en profundidad los resultados de las pruebas",
        description: ", proporcionando una comprensión más clara del comportamiento de la estrategia."
      },
      {
        title: "5- Toma de decisiones informada",
        mainDescription: "Facilita la toma de decisiones basada en datos históricos",
        description: ", aumentando la confianza del trader alejecutar sus estrategias en el mercado real."
      }
    ],
    automationData: [
      {
        title: "1- Control automático",
        description: "Cierra operaciones segúnparámetros definidos, otorgando control automático a las estrategias."
      },
      {
        title: "2- Ejecución eficiente",
        description: "Realiza cierres deoperaciones automáticamente, garantizando una ejecución eficiente."
      },
      {
        title: "3- Sin emociones",
        description: "Elimina decisiones emocionales al cerrar operaciones de manera automatizada."
      },
      {
        title: "4- Gestión de riegos",
        description: "Aplica medidas de gestión de riesgos cerrando operaciones según niveles predeterminados."
      },
      {
        title: "5- Libertad de tiempo",
        description: "Permite dedicar tiempo a otras actividades al automatizar el cierre de operaciones."
      }
    ],
    statsData: [
      {
        title: "1- Rendimiento Total",
        description: "La cantidad total de ganancias o pérdidas durante todo el período de backtesting.",
        mainDescription: " Muestra la efectividad general de la estrategia."
      },
      {
        title: "2- Rendimiento Anualizado",
        description: "La tasa de rendimiento anualizada basada en el rendimiento total y la duración del backtesting.",
        mainDescription: " Proporciona una medida anualizada del rendimiento."
      },
      {
        title: "3- Ratio de Sharpe",
        description: "La relación entre el rendimiento y la volatilidad, ajustada al riesgo.",
        mainDescription: " Evalúa la rentabilidad ajustada al riesgo."
      },
      {
        title: "4- Drawdown Máximo",
        description: "La mayor pérdida desde un máximo previo.",
        mainDescription: " Muestra la máxima reducción de capital experimentada."
      },
      {
        title: "5- Ratio de Sortino",
        description: "Similar al Ratio de Sharpe, pero se centra en las pérdidas.",
        mainDescription: " Evalúa el rendimiento ajustado al riesgo, considerando solo las pérdidas desfavorables."
      },
      {
        title: "6- Número de Operaciones",
        description: "La cantidad de operaciones exitosas y perdedoras.",
        mainDescription: " Proporciona una visión general de la consistencia de la estrategia."
      },
      {
        title: "7- Proporción de Operaciones Ganadoras",
        description: "El tiempo promedio que una operación ganadora o perdedora permanece abierta.",
        mainDescription: " Puede proporcionar información sobre la velocidad de retorno de la inversión."
      },
      {
        title: "8- Ratios de Recompensa/Riesgo",
        description: "La relación entre el beneficio promedio y la pérdida promedio.",
        mainDescription: " Evalúa si las ganancias son proporcionales a las pérdidas."
      },
      {
        title: "9- Factores de Desempeño",
        description: "Cualquier métrica específica relevante para la estrategia (porcentaje de aciertos, métricas específicas del indicador utilizado, etc).",
        mainDescription: " Destaca características únicas de la estrategia."
      }
    ],
    faqData: [
      {
        id: 1,
        question: "?Cómo se asegura la calidad y precisión del desarrollo de la herramienta¿",
        answer: "              En cada fase, desde la planificación hasta la ejecución, vos formas parte del proceso. Analizamos detalladamente tus necesidades y expectativas antes de iniciar cualquier proyecto, validando cada paso contigo. Durante este proceso, nos respaldamos en sistemas internos especializados para mejorar las validaciones con el cliente y garantizamos la continua entrega de valor a través de metodologías ágiles."
      },
      {
        id: 2,
        question: "?Puedo probar diferentes valores para los parámetros de mis estrategias durante el backtesting¿",
        answer: "              ¡Claro que sí! Entendemos lo crucial que es tener la libertad de probar tu estrategia con una amplia gama de valores para los parámetros durante el backtesting. Esto te permite simular condiciones realistas del mercado y evaluar el rendimiento de tu estrategia en diversas situaciones. Con nuestra plataforma de backtesting, tienes la flexibilidad para experimentar con cualquier valor dentro de los rangos realistas que encontrarías al utilizar tu estrategia en la vida real. Esto te ayuda a tomar decisiones más informadas y a sentirte seguro al implementar tu estrategia en el mercado en tiempo real.\n\nSi tienes más preguntas o necesitas más información, no dudes en contactarnos. Estamos aquí para ayudarte a alcanzar tus metas financieras con confianza y seguridad."
      },
      {
        id: 3,
        question: "?Se pueden añadir características adicionales a la herramienta según mis requerimientos¿",
        answer: "              Sí, por supuesto. Nos esforzamos por satisfacer tus necesidades únicas en el trading. Nuestra herramienta es altamente adaptable, permitiéndote agregar características adicionales según tus requerimientos específicos. Contáctanos para discutir cómo podemos optimizar tu experiencia de trading y ayudarte a alcanzar tus metas financieras. Estamos comprometidos en brindarte la mejor solución para tus necesidades comerciales."
      },
      {
        id: 4,
        question: "?Cómo se entrega la herramienta de backtesting una vez que está lista¿",
        answer: "              Una vez que la herramienta de backtesting está lista, la entregamos de forma conveniente y accesible: en formato web. Esto significa que puedes acceder a la herramienta desde cualquier navegador web sin necesidad de descargar o instalar ningún software adicional. Simplemente inicia sesión en tu cuenta y comienza a utilizar la herramienta de inmediato. Esta entrega en formato web te brinda la flexibilidad de utilizar la herramienta desde cualquier lugar y en cualquier momento, lo que facilita tu experiencia."
      },
      {
        id: 5,
        question: "?Cómo se asegura la calidad y precisión del desarrollo de la herramienta¿",
        answer: "              Para asegurarnos de que nuestra herramienta sea de la más alta calidad y precisión, primero nos tomamos el tiempo para entender tus necesidades y objetivos de trading. Trabajamos contigo de cerca para comprender completamente lo que buscas lograr. Luego, realizamos pruebas exhaustivas y simulamos situaciones reales para que puedas ver cómo funciona la herramienta en acción. Queremos que te sientas cómodo y seguro al usar nuestra herramienta, por lo que nos esforzamos por brindarte una experiencia de backtesting confiable y precisa.\n\nSi tienes alguna pregunta o necesitas más información, ¡no dudes en ponerte en contacto con nosotros! Estamos aquí para ayudarte en tu viaje hacia el éxito financiero."
      },
      {
        id: 6,
        question: "?Qué activos están disponibles para el backtesting y en qué temporalidades se encuentran los datos históricos¿",
        answer: "              Para garantizar que nuestra herramienta de backtesting se adapte a tus necesidades, ofrecemos una amplia gama de activos para que puedas realizar pruebas. Esto incluye acciones, índices, pares de divisas y materias primas. Además, proporcionamos datos históricos en diversas temporalidades, desde minutos hasta días o semanas. Esto te permite analizar el rendimiento de tus estrategias en diferentes marcos de tiempo y mercados, brindándote una visión completa y detallada para tomar decisiones informadas en tu trading.\n\nSi tienes alguna preferencia específica o necesitas más información sobre los activos disponibles, ¡no dudes en contactarnos! Estamos aquí para ayudarte en tu viaje hacia el éxito financiero."
      }
    ]
  }

  export default dataES