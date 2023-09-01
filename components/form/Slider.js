import React from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import { useFormContext } from '@/context/formContext'

const SliderComponent = () => {
    const { numValue, setNumValue, base, question } = useFormContext()
    console.log(`${base}, ${question}, ${numValue}`)
    return (
        <div className='w-full max-w-md mx-auto mt-8 flex flex-col items-center justify-center'>
            <h1
                className='text-sm leading-5 font-medium text-gray-700 text-left'
            >Please drag the slider (scale of 1-10) to describe of strongly you feel</h1>
            <Box sx={{ width: 300, display: 'flex', justifyContent: 'center' }}>
                <Slider
                    defaultValue={5}
                    step={1}
                    marks
                    min={1}
                    max={10}
                    value={numValue}
                    onChange={(e) => setNumValue(e.target.value)}
                />
            </Box>
            <p className='text-sm leading-5 font-medium text-gray-700 text-result'>
                Please do this to enable us give you the best results.
            </p>

        </div>
    )
}

export default SliderComponent