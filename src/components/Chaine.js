import React from 'react'
import { IoIosStar } from "react-icons/io";


export const Chaine = (props) => {
  return (
    <div className='watch'>
      
       
        <img  src={props.img} />
        {/* <div className='sale1'>sale</div> */}
       
        <p>{props.title}</p>
       
        <div className='flex'>
        <p className='wer'>₹999 </p>
        <p className='text'>{props.price}</p>
        </div>
        
       
        
    </div>
  )
}
