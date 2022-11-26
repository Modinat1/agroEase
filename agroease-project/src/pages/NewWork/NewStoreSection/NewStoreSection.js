import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import "./NewStoreSection.css"
import { NewStoreSectionModule } from './NewStoreSectionModule'

const NewStoreSection = () => {
  return (
    <div>
        <div className="newstoresec-width">
            <div className='newstoresec-shop'>
                <p>Shop in our Store</p>
            </div>
            <div className='flexing-store'>
                {
                    NewStoreSectionModule.map((newcard) => {
                        return (
                            <div className='newstorecardsec-width'>
                                <div className='newstorecardsec-single-width'>
                                    <div className='newstorecardsec-img'>
                                        <img src={newcard.imageurl} alt=""/>
                                    </div>
                                    <div className='newstorecardsec-descrip'>
                                        <h3>{newcard.name}</h3>
                                        <p>{newcard.details}</p>
                                    </div>
                                    <div className='newstorecardsec-price-cart'>
                                        <p>{newcard.price}</p>
                                        <div className='newstorecardsec-buy-cart'>
                                            <button className='newstorecart'>
                                                <AiOutlineShoppingCart className='main-green'/>
                                            </button>
                                            <div>
                                                <button className='newstorebuy'>{newcard.newBuy}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default NewStoreSection