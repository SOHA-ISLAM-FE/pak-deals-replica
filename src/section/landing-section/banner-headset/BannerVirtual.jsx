import React from 'react'
import Banner from '../../../components/banner/Banner'
import imgbann from "../../../assets/images/headsetRed.png"

function BannerVirtual() {
  return (
    <div>
    <Banner
      title="Advanced All-In-One Virtual"
      banName= "Reality Headset"
      subtitle="Starting from"
      price="$899."
      ctaText="Shop"
      imageUrl={imgbann}
    />
  </div>
  )
}

export default BannerVirtual