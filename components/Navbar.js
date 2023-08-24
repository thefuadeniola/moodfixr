import React from 'react'
import Button from './Button'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
    return (
        <div className='max-w-[1440px] mx-auto justify-between sm:px-16 px-6 py-4 navbar relative shadow-sm m-auto flex flex-row space-x-8 items-center'>
            <div className='logo flex space-x-2 tracking-tight'>
                <Image src='/assets/logo-no-background.svg' width={100} height={30} />
            </div>
            <div className='flex flex-row space-x-4 items-center'>
                <Link href='/signin'>
                    <span>Sign In</span>
                </Link>
                <Link href='/signup'>
                    <Button type='button' text='Sign Up' onClick={() => { }} buttonStyles={''} />
                </Link>
            </div>
        </div>
    )
}

