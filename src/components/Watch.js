import React from 'react'
import { IoIosStar } from "react-icons/io";


export const Watch = (props) => {
  return (
    <div className='watch'>
      
       
        <img  src={props.img} />
        <div className='sale'>sale</div>
       
        <p>{props.title}</p>
        <p className='star'><IoIosStar></IoIosStar><IoIosStar></IoIosStar><IoIosStar></IoIosStar><IoIosStar></IoIosStar><IoIosStar></IoIosStar></p>
        <div className='flex'>
        <p className='wer'>₹999 </p>
        <p className='text'>{props.price}</p>
        </div>
        <div className='add-cart'>Add to cart</div>
       
        
    </div>
  )
}
