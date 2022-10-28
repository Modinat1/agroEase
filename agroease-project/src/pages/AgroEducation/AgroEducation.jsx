import React from 'react'
import { AiOutlineCaretRight } from 'react-icons/ai'

import { agroNews } from './AgroEduData'
import './AgroEducation.css'


export const Agroeducation = () => {
  return (
    <React.Fragment>
      <section className='agroedu-container'>
    {agroNews.map((agronew)=>{
      const {id, image, title, subtitle, body} = agronew
      return(
        <div className='agroedu-card' key={id}>

          <img src={image} alt="" />

         <div className='agro-subcard'>
         <h3>{title}</h3> 
          
        <div className='agronews-body'>
        <h5>{subtitle}</h5>

        <div className='news-flex'>
         <p>{body}</p>
        <AiOutlineCaretRight className='play-icon'/>
        </div>

        </div>
         </div>
        </div>
      )
    })}
      </section>
    </React.Fragment>
  )
}
