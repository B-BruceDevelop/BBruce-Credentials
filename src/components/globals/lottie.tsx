'use client'
import React from 'react'

import Lottie from 'lottie-react'; 

type Props = {
    asset: object
    loop?: boolean
    className?: string
}

const LottieComponent = ({asset, loop = true, className}: Props) => {
  return (
    <Lottie
        animationData={asset}
        loop={loop}
        className={className}
    />
  )
}

export default LottieComponent