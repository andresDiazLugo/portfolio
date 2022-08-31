import React from 'react'
import {imagenes} from './img.js'

export default function Skill() {
    return (
    <section id='skill' className='containerSkill'>
        <h1 >Skills</h1>
        <div className='containerImg'>
            {imagenes?.map(e=><img src={e.img} key={e.id}/>)}
        </div>
    </section>
  )
}
