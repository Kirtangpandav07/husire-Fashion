import React from 'react'
import { Chaine } from '../components/Chaine'
import combo1 from '../images/combo1.webp'
import combo2 from '../images/combo2.webp'
import combo3 from '../images/combo3.webp'
import combo4 from '../images/combo4.webp'
import combo5 from '../images/combo5.webp'
import combo6 from '../images/combo6.webp'
import combo7 from '../images/combo7.webp'
import combo8 from '../images/combo8.webp'
import combo9 from '../images/combo9.webp'
import combo10 from '../images/combo10.webp'
import combo11 from '../images/combo11.webp'
import combo12 from '../images/combo12.webp'

















const   Combo = () => {
    const data =
    [
      {
        img: combo1,
        title: "Scrunchies Earrings (Cadet Black)",
        price: '449₹'


      },
      {
        img: combo2,
        title: "Scrunchies Earrings (Cadet Black)",
        price: '449₹'


      },
      {
        img: combo3,
        title: "Premium Rose Gold Diamond Scrunchies Watch (Brownish Crimson)",
        price: '449₹'


      },
      {
        img: combo4,
        title: "Scrunchies Earrings (Cadet Black)",
        price: '449₹'


      },
      {
        img: combo5,
        title: "Premium Rose Gold Diamond Scrunchies Watch (Brownish Crimson)",
        price: '449₹'


      },
      {
        img: combo6,
        title: "Scrunchies Earrings (Cadet Black)",
        price: '449₹'


      },
      {
        img: combo7,
        title: "Premium Rose Gold Diamond Scrunchies Watch (Brownish Crimson)",
        price: '449₹'


      },
      {
        img: combo8,
        title: "Premium Rose Gold Diamond Scrunchies Watch (Brownish Crimson)",
        price: '449₹'


      },
      {
        img: combo9,
        title: "Premium Rose Gold Diamond Scrunchies Watch (Brownish Crimson)",
        price: '449₹'


      },
      {
        img: combo10,
        title: "Premium Rose Gold Diamond Scrunchies Watch (Brownish Crimson)",
        price: '449₹'


      },
      {
        img: combo11,
        title: "Premium Rose Gold Diamond Scrunchies Watch (Brownish Crimson)",
        price: '449₹'


      },
      {
        img: combo12,
        title: "Premium Rose Gold Diamond Scrunchies Watch (Brownish Crimson)",
        price: '449₹'


      },
 
     
    ]

    
  return (
    <>
           <div className='part-4'>
                <div className='w-1140'>
                    <h2>Scrunchies Earrings</h2>
                    <div className='main-1'>
                        <div className='flex'>
                            {
                                data.map((el, index) => {
                                    return < Chaine img={el.img} title={el.title} price={el.price} />
                                })
                            }

                        </div>

                    </div>
                </div>
            </div>

    </>
  )
}

export default Combo