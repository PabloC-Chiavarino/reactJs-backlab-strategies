import { historical,acivesDiv,flex,params,analysis,multiplat,realCond,inter,web,risk } from '../../assets/icons'

const dataEN = {

    mainCardsData: [
      {
        icon: historical,
        title: "Complex Historical Data",
        description: "Access to detailed and complete historical data for in-depth analysis."
      },
      {
        icon: acivesDiv,
        title: "Asset Diversity",
        description: "Ability to backtest strategies on a wide range of financial assets, including stocks, cryptocurrency and commodities."
      },
      {
        icon: flex,
        title: "Temporal Flexibility",
        description: "Option to adjust the date range and time frequency to adapt to different analysis periods."
      },
      {
        icon: params,
        title: "Indicator Customization",
        description: "Ability to use a variety of technical indicators and customize parameters according to the needs of the strategy."
      },
      {
        icon: analysis,
        title: "Statistic analysis",
        description: "Advanced statistical analysis tools to evaluate strategy performance, including metrics such as Sharpe ratio and maximum drawdown."
      },
      {
        icon: multiplat,
        title: "Multiplatform Backtesting",
        description: "Compatibility with various trading platforms to ensure consistency in the results obtained."
      },
      {
        icon: realCond,
        title: "Testing of Real Conditions",
        description: "Ability to simulate real market conditions, including transaction costs and slippage, for more accurate results."
      },
      {
        icon: inter,
        title: "Intuitive interface",
        description: "Friendly, easy-to-use interface design enables a smooth and efficient backtesting experience for users of all experience levels."
      },
      {
        icon: risk,
        title: "Risk management",
        description: "It allows you to evaluate and adjust strategies considering risk, with options to establish stop loss and take profit levels and manage position size according to market volatility."
      },
      {
        icon: web,
        title: "Web Exclusivity",
        description: "The tool is offered through an exclusive web platform for our clients, providing easy and convenient access from any device with an internet connection."
      }
    ],
    securityData: [
      {
        title: "Advanced security protocol",
        description: "We use cutting-edge security technologies to guarantee the integrity and confidentiality of your data. "
      },
      {
        title: "Total control in your hands",
        description: "We provide you with tools to manage and control who accesses your information, giving you the ability to personalize your experience based on your privacy preferences."
      },
      {
        title: "Commitment against unauthorized access",
        description: "Our team of security experts works tirelessly to prevent any unauthorized access to your account. "
      },
      {
        title: "Your trust is our priority",
        description: "We understand that trust is the basis of any successful relationship in the financial world. "
      }
    ],
    servicesData: [
      {
        title: "1- Take Profit and its Way of Calculation",
        description: "It is configured according to the risk management of the strategy, ensuring profits in an operation."
      },
      {
        title: "2- Stop Loss",
        description: "It is established according to the risk management of the strategy, limiting losses in a transaction."
      },
      {
        title: "3- Date Range",
        description: "It serves to limit the analysis period of a strategy, allowing you to focus on specific market data."
      },
      {
        title: "4- Asset (Currency/Share)",
        description: "Select the financial instrument."
      },
      {
        title: "5- Operating Hours Range",
        description: "Select specific hours to operate in the market."
      },
      {
        title: "6- Initial Capital",
        description: "Sets the amount of money with which an automated trading strategy is started and used to calculate statistics."
      },
      {
        title: "7- Indicator Configuration",
        description: "Defines the specific characteristics and settings of the indicator used in a strategy."
      },
      {
        title: "8- Commissions",
        description: "Establishes the costs associated with transactions within an automated trading strategy."
      }
    ],
    backtestingData: [
      {
        title: "1- Strategy optimization",
        mainDescription: "Allows you to improve the performance of trading strategies",
        description: " by testing and adjusting them before using them in real time."
      },
      {
        title: "2- Risk reduction",
        mainDescription: "Identify and correct possible weaknesses in strategies",
        description: ", minimizing losses during actual trading."
      },
      {
        title: "3- Saving time and resources",
        mainDescription: "Automate the evaluation and optimization process",
        description: ", saving time and resources by avoiding manual testing."
      },
      {
        title: "4- Detailed analysis",
        mainDescription: "Offers tools to analyze test results in depth",
        description: ", providing a clearer understanding of the strategy's behavior."
      },
      {
        title: "5- Informed decision making",
        mainDescription: "Facilitates decision making based on historical data",
        description: ", increasing the trader's confidence in executing their strategies in the real market."
      }
    ],
    automationData: [
      {
        title: "1- Automatic control",
        description: "Closes operations according to defined parameters, granting automatic control to the strategies."
      },
      {
        title: "2- Efficient execution",
        description: "Automatically closes operations, guaranteeing efficient execution."
      },
      {
        title: "3- Without emotions",
        description: "Eliminate emotional decisions by closing trades automatically."
      },
      {
        title: "4- Risk management",
        description: "Applies risk management measures by closing operations according to predetermined levels."
      },
      {
        title: "5- Freedom of time",
        description: "It allows you to dedicate time to other activities by automating the closing of operations."
      }
    ],
    statsData: [
      {
        title: "1- Total Performance",
        description: "The total amount of profits or losses during the entire backtesting period.",
        mainDescription: " Shows the overall effectiveness of the strategy."
      },
      {
        title: "2- Annualized Performance",
        description: "The annualized rate of return based on the total return and the duration of the backtesting.",
        mainDescription: " Provides an annualized measure of performance."
      },
      {
        title: "3- Sharpe ratio",
        description: "The relationship between return and volatility, adjusted for risk.",
        mainDescription: " Evaluate risk-adjusted profitability."
      },
      {
        title: "4- Maximum Drawdown",
        description: "The biggest loss from a previous high.",
        mainDescription: " Shows the maximum capital reduction experienced."
      },
      {
        title: "5- Sortino Ratio",
        description: "Similar to the Sharpe Ratio, but focuses on losses.",
        mainDescription: " Evaluates risk-adjusted performance, considering only unfavorable losses."
      },
      {
        title: "6- Number of Operations",
        description: "The number of successful and losing trades.",
        mainDescription: " Provides an overview of the consistency of the strategy."
      },
      {
        title: "7- Proportion of Winning Trades",
        description: "The average time a winning or losing trade remains open.",
        mainDescription: " It can provide information on the speed of return on investment."
      },
      {
        title: "8- Reward/Risk Ratios",
        description: "The relationship between average profit and average loss.",
        mainDescription: " Evaluate whether the gains are proportional to the losses."
      },
      {
        title: "9- Performance Factors",
        description: "Any specific metrics relevant to the strategy (percentage of successes, specific metrics of the indicator used, etc.).",
        mainDescription: " Highlights unique features of the strategy."
      }
    ],
    faqData: [
      {
        id: 1,
        question: "?How to ensure the quality and accuracy of tool development?",
        answer: "              In each phase, from planning to execution, you are part of the process. "
      },
      {
        id: 2,
        question: "?Can I test different values ​​for the parameters of my strategies during backtesting?",
        answer: "              Of course! "
      },
      {
        id: 3,
        question: "?Additional features can be added to the tool according to my requirements.",
        answer: "              Yes of course. "
      },
      {
        id: 4,
        question: "?How is the backtesting tool delivered once it is ready?",
        answer: "              Once the backtesting tool is ready, we deliver it in a convenient and accessible way: in web format. "
      },
      {
        id: 5,
        question: "?How to ensure the quality and accuracy of tool development?",
        answer: "              To ensure our tool is of the highest quality and accuracy, we first take the time to understand your trading needs and objectives. "
      },
      {
        id: 6,
        question: "?What assets are available for backtesting and what time frames are the historical data?",
        answer: "              To ensure our backtesting tool meets your needs, we offer a wide range of assets for you to test. "
      }
    ]
  }

  export default dataEN