import React from 'react'
import Slider from '../Slider/Slider'

export default function Home() {
  return (
    <>
    <Slider  text="Home Slide"
      nextPath="/about"
      prevPath="/contact"/>
    </>
  )
}
