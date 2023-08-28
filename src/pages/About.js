import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import img3 from '../images/img3.webp'
import img4 from '../images/img4.png'
import img5 from '../images/img5.png'
import img6 from '../images/img6.png'
import img7 from '../images/img7.png'
import img8 from '../images/img8.png'
import img9 from '../images/img9.png'
import watch1 from '../images/watch1.jpg'
import watch2 from '../images/watch2.webp'
import watch3 from '../images/watch3.webp'
import watch4 from '../images/watch4.webp'
import watch5 from '../images/watch5.webp'
import watch6 from '../images/watch6.webp'
import watch7 from '../images/watch7.webp'
import watch8 from '../images/watch8.webp'
import watch9 from '../images/watch9.webp'
import watch10 from '../images/watch10.webp'
import watch11 from '../images/watch11.webp'
import watch12 from '../images/watch12.webp'
import watch13 from '../images/watch13.webp'
import watch14 from '../images/watch14.webp'
import watch15 from '../images/watch15.webp'
import watch16 from '../images/watch16.webp'
import watch17 from '../images/watch17.webp'
import slik1 from '../images/slik1.webp'
import slik2 from '../images/slik2.webp'
import slik3 from '../images/slik3.webp'
import slik4 from '../images/slik4.webp'
import flet1 from '../images/flet1.webp'
// import insta1 from '../images/insta1.webp'
// import insta2 from '../images/insta2.webp'
// import insta3 from '../images/insta3.webp'
// import insta4 from '../images/insta4.webp'
// import insta5 from '../images/insta5.webp'
// import insta6 from '../images/insta5.webp'
// import insta7 from '../images/insta7.webp'
// import insta8 from '../images/insta8.webp'
// import insta9 from '../images/insta9.webp'
// import insta10 from '../images/insta10.webp'
// import insta11 from '../images/insta11.webp'
// import insta12 from '../images/insta12.webp'
// import insta13 from '../images/insta13.webp'
// import insta14 from '../images/insta14.webp'
// import insta15 from '../images/insta15.webp'






import { Carousel } from "react-bootstrap";
import { VscArrowSmallRight } from "react-icons/vsc";
import Card1 from '../components/Card1';
import { Watch } from '../components/Watch';
import Watchslik from '../components/Watchslik';
import { IoIosStar } from "react-icons/io";

const About = () => {





  const dataa =
    [
      {
        img: slik1,
        title: "Combo Of Moon Style Scrunchies Watch + Earrings (Cadet Black)"

      },
      {
        img: slik2,
        title: "Combo Of Moon Style Scrunchies Watch + Earrings (Cadet Black)"

      },
      {
        img: slik3,
        title: "Combo Of Moon Style Scrunchies Watch + Earrings (Cadet Black)"

      },
      {
        img: slik4,
        title: "Combo Of Moon Style Scrunchies Watch + Earrings (Cadet Black)"

      },


    ]

  const data =
    [
      {
        img: watch1,
        title: "Premium Rose Gold Diamond Scrunchies Watch (Brownish Crimson)",
        price: '110₹'


      },
      {
        img: watch3,
        title: "Premium Rose Gold Diamond Scrunchies Watch (Brownish Crimson)",
        price: '110₹'


      },
      {
        img: watch4,
        title: "Premium Rose Gold Diamond Scrunchies Watch (Brownish Crimson)",
        price: '110₹'


      },
      {
        img: watch5,
        title: "Premium Rose Gold Diamond Scrunchies Watch (Brownish Crimson)",
        price: '110₹'


      },
      {
        img: watch6,
        title: "Premium Rose Gold Diamond Scrunchies Watch (Brownish Crimson)",
        price: '110₹'


      },
      {
        img: watch7,
        title: "Premium Rose Gold Diamond Scrunchies Watch (Brownish Crimson)",
        price: '110₹'


      },
      {
        img: watch8,
        title: "Premium Rose Gold Diamond Scrunchies Watch (Brownish Crimson)",
        price: '110₹'


      },
      {
        img: watch9,
        title: "Premium Rose Gold Diamond Scrunchies Watch (Brownish Crimson)",
        price: '110₹'


      },
      {
        img: watch10,
        title: "Premium Rose Gold Diamond Scrunchies Watch (Brownish Crimson)",
        price: '110₹'


      },
      {
        img: watch11,
        title: "Premium Rose Gold Diamond Scrunchies Watch (Brownish Crimson)",
        price: '110₹'


      },
      {
        img: watch12,
        title: "Premium Rose Gold Diamond Scrunchies Watch (Brownish Crimson)",
        price: '110₹'


      },
      {
        img: watch13,
        title: "Premium Rose Gold Diamond Scrunchies Watch (Brownish Crimson)",
        price: '110₹'


      },
      {
        img: watch14,
        title: "Premium Rose Gold Diamond Scrunchies Watch (Brownish Crimson)",
        price: '110₹'


      },
      {
        img: watch15,
        title: "Premium Rose Gold Diamond Scrunchies Watch (Brownish Crimson)",
        price: '110₹'


      },
      {
        img: watch16,
        title: "Premium Rose Gold Diamond Scrunchies Watch (Brownish Crimson)",
        price: '110₹'


      },
      {
        img: watch17,
        title: "Premium Rose Gold Diamond Scrunchies Watch (Brownish Crimson)",
        price: '110₹'


      },
      {
        img: watch14,
        title: "Premium Rose Gold Diamond Scrunchies Watch (Brownish Crimson)",
        price: '110₹'


      },
      {
        img: watch15,
        title: "Premium Rose Gold Diamond Scrunchies Watch (Brownish Crimson)",
        price: '110₹'


      },
      {
        img: watch16,
        title: "Premium Rose Gold Diamond Scrunchies Watch (Brownish Crimson)",
        price: '110₹'


      },
      {
        img: watch17,
        title: "Premium Rose Gold Diamond Scrunchies Watch (Brownish Crimson)",
        price: '110₹'


      },
      {
        img: watch14,
        title: "Premium Rose Gold Diamond Scrunchies Watch (Brownish Crimson)",
        price: '110₹'


      },
      {
        img: watch15,
        title: "Premium Rose Gold Diamond Scrunchies Watch (Brownish Crimson)",
        price: '110₹'


      },
      {
        img: watch16,
        title: "Premium Rose Gold Diamond Scrunchies Watch (Brownish Crimson)",
        price: '110₹'


      },
      {
        img: watch17,
        title: "Premium Rose Gold Diamond Scrunchies Watch (Brownish Crimson)",
        price: '110₹'


      },

    ]

  return (
    <>
      <div className='main-box'>
        <div className='w-1140'>
          <div className='flex'>
            <div className='img-1'>
              <div className='img me-2'>
                <img src={img3} alt="" width={400} />
              </div>
              <div className='text text-center'>Gift Combos<VscArrowSmallRight></VscArrowSmallRight></div>
            </div>
            <div className='img-1'>
              <div className='img me-2'>
                <img src={img4} alt="" width={400} />
              </div>
              <div className='text  text-center'>Scrunchies Watches<VscArrowSmallRight></VscArrowSmallRight></div>
            </div>
            <div className='img-1'>
              <div className='img'>
                <img src={img5} alt="" width={400} />
              </div>
              <div className='text text-center'>Scrunchies Earrings<VscArrowSmallRight></VscArrowSmallRight></div>
            </div>
          </div>

        </div>
      </div>
      <div className='w-1140'>
        <div className='flex'>
          <div className='part-11'><img src={img6} alt="" width={150} /></div>
          <div className='part-11'><img src={img7} alt="" width={150} /></div>
          <div className='part-11'><img src={img8} alt="" width={150} /></div>
          <div className='part-11'><img src={img9} alt="" width={150} /></div>

        </div>
      </div>

      <div className='part-3'>
        <div className='w-1140'>
          <h2>Best Selling</h2>
          <div className='main-1'>                                                                
            <div className='flex'>
              {
                data.map((el, index) => {
                  return < Watch img={el.img} title={el.title} price={el.price} />
                })
              }

            </div>

          </div>
        </div>
      </div>


      <div className='gift-combo'>
        <div className='w-1140'>
          <h1>Valentines Gift Combos</h1>


        </div>
        <div className='slik'>
          <div className='slikk-part'>
            <div className='flex'>
              {
                dataa.map((el, index) => {
                  return < Watchslik img={el.img} title={el.title} />
                })
              }

            </div>
          </div>
        </div>
      </div>

      <div className='flet-box'>
        <div className='w-1140'>
          <div className='flex'>
            <div className='flet'>
              <img src={flet1} alt="" />
            </div>
            <div className='flet-1'>
              <h1>how to create a <br></br>combo ?</h1>
              <p>Simply just go to the website and add your choice of earrings and watches to the cart. Th discount will be applied automatically</p>
            </div>
          </div>
        </div>
      </div>

      <div className='review'>
        <div className='w-1140'>
          <h1>Customers Reviews</h1>
          <div className='star-e'><IoIosStar></IoIosStar><IoIosStar></IoIosStar><IoIosStar></IoIosStar><IoIosStar></IoIosStar><IoIosStar></IoIosStar></div>
          <h2>from 51 reviews</h2>

          <Carousel variant="dark">
            <Carousel.Item>
              <div className='star-ee'><IoIosStar></IoIosStar><IoIosStar></IoIosStar><IoIosStar></IoIosStar><IoIosStar></IoIosStar><IoIosStar></IoIosStar></div>
              <h2>I bought the Scrunchies Earring and Scrunchies Watch, and it is the best watch I've <br></br>ever worn. The fabric around the band of the watch is so smooth that you don't even<br></br> feel like you're wearing anything during a workout. It's been a month since my<br></br> purchase and I still love it!</h2>
              <h3>Priya Rathod</h3>
            </Carousel.Item>
            <Carousel.Item>
              <div className='star-ee'><IoIosStar></IoIosStar><IoIosStar></IoIosStar><IoIosStar></IoIosStar><IoIosStar></IoIosStar><IoIosStar></IoIosStar></div>
              <h2>Whether I'm going to work, an event or just hanging out, I love wearing my<br></br> Scrunchies Watch. Not only does it look great with anything I wear but the fabric is<br></br> just so smooth, you can barely feel you're wearing<br></br> it!</h2>
              <h3>Moxa Arora</h3>
            </Carousel.Item>
            <Carousel.Item>
              <div className='star-ee'><IoIosStar></IoIosStar><IoIosStar></IoIosStar><IoIosStar></IoIosStar><IoIosStar></IoIosStar><IoIosStar></IoIosStar></div>
              <h2>I have been looking for a good watch for the longest time. I tried out so many<br></br> watches, but they were always either too expensive or not practical enough.<br></br> I was scrolling through Instagram and stumbled upon Scrunchies Watch. It's not only<br></br> affordable, but has such a cute design that matches my style! It's also<br></br> really</h2>
              <h3>Shivani Shah</h3>
            </Carousel.Item>
          </Carousel>
        </div>

      </div>

      



      
    </>
  )
}

export default About