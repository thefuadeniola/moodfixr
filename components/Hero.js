import React from 'react'
import Button from './Button'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto'>
            <div className='flex-1'>
                <h1 className='sm:text-[48px] text-[36px] font-extrabold'>Suggesting the best multimedia, make you feel instantly better.</h1>
                <p className='text-[27px] text-black-100 font-light mt-5'>
                    Fix your mood with a mix of our human and AI tested algorithm.
                </p>
                <Button title='Explore Cars' type='button' text='Get Me Fixed' />
            </div>
            <div className='flex-[1.5] flex justify-end items-end w-full xl:h-screen'>
                <div className='hero__image'>
                </div>
                <div className='hero__image-overlay' />

            </div>
        </div>

    )
}

export default Hero