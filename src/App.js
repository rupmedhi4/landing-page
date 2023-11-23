import React from 'react'
import './App.css'
import HomeImg from './components/homeimg/HomeImg'
import About from './components/AboutMe/About'
import ImageGrid from './components/ImgGrid/ImageGrid'
import CollegeGallary from './components/CollegeImg/CollegeGallary'
import AboutCollege from './components/AboutCollege/AboutCollege'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <div>
     
      <HomeImg/>
      <About/>
      <ImageGrid/>
      <CollegeGallary/>
      <AboutCollege/>
      <Footer/>
    </div>
  )
}
