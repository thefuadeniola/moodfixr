'use client'
import React from 'react'
import PreferredMedia from './form/preferredMedia'
import BaseMoods from './form/BaseMoods'
import { FormProvider } from '@/context/formContext'

const FormSection = () => {
    return (
        <div className='h-screen p-24 flex flex-col'>
            <FormProvider>
                <PreferredMedia />
                <BaseMoods />
            </FormProvider>
        </div>
    )
}

export default FormSection