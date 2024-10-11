import React from 'react'
import Banner from '../../../components/banner/Banner'
import imgbann from "../../../assets/images/bb.png"

function BannerReality() {
  return (
    <Banner
      title="Advanced All-In-One Virtual"
      banName= "Reality Headset"
      subtitle="Starting from"
      price="$899."
      ctaText="Shop"
      imageUrl={imgbann}
    />
  )
}

export default BannerReality