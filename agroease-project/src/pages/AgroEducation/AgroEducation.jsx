import React from 'react'
import { AiOutlineCaretRight } from 'react-icons/ai'

import { agroNews } from './AgroEduData'
import './AgroEducation.css'
import Navbar1 from '../../components/Navbar1/Navbar1'
import Footer from '../../components/Footer/Footer'


export const Agroeducation = () => {
  return (
    <React.Fragment>
      <Navbar1 />
      <h4 className='text-center font-bold text-2xl pt-5'>AgroEducation</h4>
      <section className='agroedu-container pt-8'>
        
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
        <div className='agroedu-play-icon'><AiOutlineCaretRight className="text-2xl"/></div>
        </div>

        </div>
         </div>
        </div>
      )
    })}
      </section>
      <Footer />
    </React.Fragment>
  )
}
