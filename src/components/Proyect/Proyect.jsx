import React from 'react'
import {proyects} from './proyectos.js'
import { BsYoutube } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';

export default function Proyect() {
  return (
    <section className='containerPro'>
        <h1 id='projects'>Projects</h1>
        <ul>
        {proyects?.map(e=>{
           return <li key={e.id} className='containerLi'><a  href={e.url} target="_blank"> <img className='img' src={e.img}/></a> <div className='containerEnlace'><a>{<BsYoutube size="6rem" color='red'/>}</a> <a href={e.git} target="_blank" >{<AiFillGithub size="6rem" color='black'/>}</a></div></li>
        })}

        </ul>
    </section>
  )
}
