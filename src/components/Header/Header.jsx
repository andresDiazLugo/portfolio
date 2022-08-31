import React from 'react'
export default function Header() {
  const scrollNav = (e)=>{
    e.preventDefault()
    const seccionScroll = e.target.attributes.href.value
    const seccion = document.querySelector(seccionScroll)
    seccion.scrollIntoView({behavior : "smooth"});
  }
  return (
    <header className='containerHeader'>
        <div className='containerLogo'>
            <h1>Andres <span>Diaz Lugo</span></h1>
        </div>
            <nav className='containerNav'>
                <a onClick={scrollNav} style={{textDecoration:"none",}} href="#projects">Projects</a>
                <a style={{textDecoration:"none",}} href="https://www.linkedin.com/in/alberto-diaz-lugo-91b0a0239/" target="_blank" >Linkedin</a>
                <a onClick={scrollNav} style={{textDecoration:"none", }} href="#about">About</a>
                <a style={{textDecoration:"none",}} href="https://github.com/andresDiazLugo" target="_blank">GitHub</a>
                <a onClick={scrollNav} style={{textDecoration:"none", }} href="#skill">Skill</a>
            </nav>
    </header>
  )
}
