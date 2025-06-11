import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero';
import Highlights from './sections/Highlights';
import Expectations from './sections/Expectations';
import Sponsors from './sections/Sponsors';
import BookStand from './sections/BookStand';
import Faq from './sections/Faq';
import Tickets from './sections/Tickets';
import Footer from './components/Footer';
import Guests from './sections/Guests';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Highlights />
      <Expectations />
      <Guests />
      <Sponsors />
      <Faq />
      <BookStand />
      <Tickets />
      <Footer />
    </>
  )
}


export default App;