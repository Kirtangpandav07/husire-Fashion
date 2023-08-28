import React from 'react'

const Watchslik = (props) => {
  return (
    <div className='slik-part'>
        <img src={props.img} alt="" />
        {/* <div className='saleee'>sale</div> */}
        <p>{props.title}</p>
        <div className='flex'>
           <p className='wer-4'>₹999 </p>
           <p className='textt'>₹110</p>
           <p className='textt'></p>
        </div>
        
    </div>
  )
}

export default Watchslik