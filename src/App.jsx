import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero';
import Highlights from './sections/Highlights';
import Expectations from './sections/Expectations';
import Sponsors from './sections/Sponsors';
import BookStand from './sections/BookStand';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Highlights />
      <Expectations />
      <Sponsors />
      <BookStand />
    </>
  )
}


export default App;