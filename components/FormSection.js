'use client'
import React from 'react'
import PreferredMedia from './form/preferredMedia'
import BaseMoods from './form/BaseMoods'

const FormSection = () => {
    return (
        <div className='h-screen p-24 flex flex-col'>
            <PreferredMedia />
            <BaseMoods />
        </div>
    )
}

export default FormSection