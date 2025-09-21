import React from 'react'
import Navbar from './components/Navbar'
import Homepage from './Homepage'
import Footer from './components/Footer'
import Page from './Page'
import About from './About'
import EditorialBoard from './EditorialBoard'
import SubscribingInstitutions from './SubscribingInstitutions'
import Pricing from './Pricing'
import Article from './Article'
import { Routes, Route } from "react-router-dom";
import Form from './components/Form'
import ScrollToTop from "./ScrollToTop";
import LocomotiveScroll from 'locomotive-scroll';
const locomotiveScroll = new LocomotiveScroll();






export default function App() {
  return (
    <div>
      <Navbar />


      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/article" element={<Article />} />
        <Route path="/editorialBoard" element={<EditorialBoard />} />
        <Route path="/subscribingInstitutions" element={<SubscribingInstitutions />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/page2" element={<Page />} />
        <Route path="/form" element={<Form />} />
      </Routes>
      <Footer />

    </div>
  )
}
