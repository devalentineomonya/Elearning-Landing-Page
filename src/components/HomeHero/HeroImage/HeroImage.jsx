import React from 'react'
import "../herostyles.css"
import pattern1bg from "../../../assets/pattern1bg.png"
const HeroImage = () => {
  return (
    <div className="hero-image flex w-full flex-1 justify-end ">
      <img src={pattern1bg}/>
    </div>
  )
}

export default HeroImage
