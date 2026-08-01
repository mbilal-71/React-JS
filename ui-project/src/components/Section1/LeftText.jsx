import React from 'react'

import HeroText from './HeroText'
import ArrowText from './ArrowText'
const LeftText = () => {
    return (
        <div className='h-full w-1/3  flex flex-col justify-between'>
            <HeroText />
            <ArrowText />

        </div>
    )
}

export default LeftText
