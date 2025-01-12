import './App.css'
import { About } from './components/about'
import Footer from './components/footer'
import { Header } from './components/header'
import ListProjects from './components/project'
import Social from './components/social'


function App() {
  return (
    <>
      <Header />
      <main>
        <Social />
        <About />
        <ListProjects />
      </main>
      <Footer />
    </>
  )
}

export default App
