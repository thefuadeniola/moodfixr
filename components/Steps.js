import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { steps } from '@/constants/data'

const Steps = () => {
    return (
        <div className='h-screen bg-primary-blue-200 p-24'>
            <div className='flex flex-col justify-center text-center'>
                <div className='flex flex-row items-center justify-center'>
                    <h1 className='sm:text-[36px] text-[36px] font-extrabold'>Fix your mood in 3 easy steps</h1>
                    <Image src='/assets/wrench.png' className='object-contain' height={60} width={60} />
                </div>
                <div className='flex flex-row space-x-6 justify-center mt-10 p-8'>
                    {steps.map((step) => {
                        return (
                            <div className='card flex flex-col' key={step.name}>
                                <div className='h-1/2 flex items-center justify-center mb-8'>
                                    <Image src={step.image} className='object-contain' width={80} height={80} />
                                </div>
                                <div className='flex flex-col items-center justify-center text-center'>
                                    <h1 className='font-bold mb-6'>{step.name}</h1>
                                </div>
                            </div>)
                    })}
                </div>
                <Link href='' className='flex justify-center mt-4'>
                    <button className='flex flex-row bg-black justify-center items-center button space-x-2 px-6 py-2'>
                        <h1 className='font-bold text-white'>Take the Questionnaire</h1>
                        <Image src='/assets/white-arrow.png' className='object-contain' height={32} width={32} />
                    </button>
                </Link>

            </div>
        </div>
    )
}

export default Steps