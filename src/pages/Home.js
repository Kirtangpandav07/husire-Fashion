import React from 'react'
import img2 from '../images/img2.jpg'
import About from './About'
import Reply from './Reply'
// import Chain from './Chain'



const Home = () => {
  return (
    <>
    <img src={img2} width="100%" className='col-lg-12 col-sm-12'></img>
    <About/>
    <Reply/>
    {/* <Chain/> */}
    </>
  )
}

export default Home