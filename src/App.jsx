import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero';
import Highlights from './sections/Highlights';
import Expectations from './sections/Expectations';
import Sponsors from './sections/Sponsors';
import BookStand from './sections/BookStand';
import FAQ from './sections/FAQ';
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
      <section id="guests">
        <Guests />
      </section>
      <section id="sponsors">
        <Sponsors />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <BookStand />
      <Tickets />
      <section id="contact">
        <Footer />
      </section>
    </>
  )
}

export default App;