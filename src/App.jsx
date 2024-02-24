import Router from './router/index.jsx';
import { Header, Footer, WhatsappButton } from './components/index.js'
import './App.css';

function App() {


  return (
    <>
      <Header />
      <WhatsappButton/>
      <main>
        <Router />
      </main>
      <Footer />
    </>
  )
}

export default App
