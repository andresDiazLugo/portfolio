import {useEffect} from 'react'
import Header from './components/Header/Header'
import Video from './components/video/Video'
import About from './components/About/About'
import Skill from './components/Skill/Skill'
import Proyect from './components/Proyect/Proyect'
import Footer from './components/footer/Footer'
import Contact from './components/Contact/Contact'

function App() {
  
  useEffect(() => {
    const barra = document.querySelector('.containerHeader')
    const about = document.querySelector('.containerAbout')
    const body = document.querySelector('body')
    
    window.addEventListener('scroll', ()=>{
      if(about.getBoundingClientRect().top <100){
        barra.classList.add('fijo')
        body.classList.add('fijo')
        
      }else{
        barra.classList.remove('fijo')
        body.classList.remove('fijo')

      }
    });
  
    // return () => {
    //   window.removeEventListener('scroll', handleScroll);
    // };
  }, []);
  return (
    <div className="App">
      <Header/>
      <Video/>
      <main>
          <About/>
          <Skill/>
          <Proyect/>
      </main>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
