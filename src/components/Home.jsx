import React from 'react'
import ImpAterts from './ImpAterts'
import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'
import Offer from './Offer'
import Carts from './Carts'
import Experince from './Experience'
import Categories from './Categories'

const Home = () => {
  return (
    <div>
        <ImpAterts />
        <Navbar />
        <Hero />
        <Experince />
        <Offer />
        <Categories />
        {/* <Carts /> */}
        <Footer />
    </div>
  )
}

export default Home