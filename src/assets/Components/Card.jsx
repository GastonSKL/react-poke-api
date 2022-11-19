import React from 'react';
import './Card.css';
import { FaStar } from 'react-icons/fa';

export const Card = ({name, img}) => {
  return (
    <div className='Card'>
        <div className='Card__title'>
            <h2 className='Card__title-title'>{name}</h2>
            <p className='Card__title-id'><FaStar /></p>
        </div>
        <div className='Card__description'>
            <div className='img__container'>
            <img className='Card__description-img' src={img} alt='{id}'></img>
            <p className='Card__description-hg'>POKE</p>
            </div>
            
        </div>

    </div>
  )
}
