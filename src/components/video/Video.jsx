import React from 'react'
import portada from '../../videos/tunel.mp4'
export default function Video() {
  return (
    <div className='video'>
        <div className='overlay'>
            <div className='contenedor contenido-video'>
                <h2>Welcome to my portfolio</h2>
                <p>everything is possible with heart and mind in the purpose</p>
            </div>
        </div>
        <video autoPlay muted loop>
            <source src={portada} type="video/mp4"/>
        </video>
    </div>
  )
}

