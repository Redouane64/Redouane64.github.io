import './App.css'
import { About } from './components/about'
import Footer from './components/footer'
import { Header } from './components/header'
import Social from './components/social'

function App() {
  return (
    <>
      <Header />
      <main>
        <Social />
        <About />
      </main>
      <Footer />
    </>
  )
}

export default App
