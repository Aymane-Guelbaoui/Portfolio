import React from 'react'
import Slider from './Slider/Slider'

export default function About() {
  return (
    <>
    <Slider  text="About Slide"
          nextPath="/contact"
          prevPath="home"/>
      
    </>
  )
}
