import React from 'react'
import { Chaine } from '../components/Chaine'
import chain1 from '../images/chain1.webp'
import chain2 from '../images/chain2.webp'
import chain3 from '../images/chain3.webp'
import chain4 from '../images/chain4.webp'
import chain5 from '../images/chain5.webp'
import chain6 from '../images/chain6.webp'
import chain7 from '../images/chain7.webp'
import chain8 from '../images/chain8.webp'
import chain9 from '../images/chain9.webp'
import chain10 from '../images/chain10.webp'
import chain11 from '../images/chain11.webp'
import chain12 from '../images/chain12.webp'
import chain13 from '../images/chain13.webp'
import chain14 from '../images/chain14.webp'
import chain15 from '../images/chain15.webp'
import chain16 from '../images/chain16.webp'
















const   Chain = () => {
    const data =
    [
      {
        img: chain1,
        title: "Scrunchies Earrings (Cadet Black)",
        price: '110₹'


      },
      {
        img: chain2,
        title: "Scrunchies Earrings (Cadet Black)",
        price: '110₹'


      },
      {
        img: chain3,
        title: "Premium Rose Gold Diamond Scrunchies Watch (Brownish Crimson)",
        price: '110₹'


      },
      {
        img: chain4,
        title: "Scrunchies Earrings (Cadet Black)",
        price: '110₹'


      },
      {
        img: chain5,
        title: "Premium Rose Gold Diamond Scrunchies Watch (Brownish Crimson)",
        price: '110₹'


      },
      {
        img: chain6,
        title: "Scrunchies Earrings (Cadet Black)",
        price: '110₹'


      },
      {
        img: chain7,
        title: "Premium Rose Gold Diamond Scrunchies Watch (Brownish Crimson)",
        price: '110₹'


      },
      {
        img: chain8,
        title: "Premium Rose Gold Diamond Scrunchies Watch (Brownish Crimson)",
        price: '110₹'


      },
      {
        img: chain9,
        title: "Premium Rose Gold Diamond Scrunchies Watch (Brownish Crimson)",
        price: '110₹'


      },
      {
        img: chain10,
        title: "Premium Rose Gold Diamond Scrunchies Watch (Brownish Crimson)",
        price: '110₹'


      },
      {
        img: chain11,
        title: "Premium Rose Gold Diamond Scrunchies Watch (Brownish Crimson)",
        price: '110₹'


      },
      {
        img: chain12,
        title: "Premium Rose Gold Diamond Scrunchies Watch (Brownish Crimson)",
        price: '110₹'


      },
      {
        img: chain13,
        title: "Premium Rose Gold Diamond Scrunchies Watch (Brownish Crimson)",
        price: '110₹'


      },
      {
        img: chain14,
        title: "Premium Rose Gold Diamond Scrunchies Watch (Brownish Crimson)",
        price: '110₹'


      },
      {
        img: chain15,
        title: "Premium Rose Gold Diamond Scrunchies Watch (Brownish Crimson)",
        price: '110₹'


      },
      {
        img: chain16,
        title: "Premium Rose Gold Diamond Scrunchies Watch (Brownish Crimson)",
        price: '110₹'


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

export default Chain