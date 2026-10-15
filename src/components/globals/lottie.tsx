'use client'
import React from 'react'
import dynamic from 'next/dynamic'

// lottie-web touches `document` on import; Node 21+ exposes a global `navigator`,
// which defeats its browser check during prerender. Load it on the client only.
const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

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
