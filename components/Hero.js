import React from 'react'
import Button from './Button'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
    return (
        <div className='p-24 flex flex-row justify-around'>
            <div className='text-left w-1/2 max-w-md'>
                <span className='text-primary-blue-200'>--- welcome to moodfixr ---</span>
                <h1 className='sm:text-[48px] text-[36px] font-extrabold'>Good Vibes Only.</h1>
                <p className='text-[27px] text-black-100 font-light mt-5'>
                    Fix your mood with a mix of our human and AI tested algorithm.
                </p>
                <Link href='/mood'>
                    <Button title='Explore Cars' type='button' text='Get Me Fixed' buttonStyles={'mt-8'} />
                </Link>
            </div>
            <div className='w-1/2 flex items-center justify-center'>
                <Image src='/assets/herobg.jpg' className='absolute object-cover herobg' height={600} width={500} />
            </div>
        </div>

    )
}

export default Hero