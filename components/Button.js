import React from 'react'

const Button = ({ type, text, handleClick }) => {
    return (
        <button type={type}
            onClick={handleClick}
            className='button flex flex-row relative justify-center items-center py-3 px-6 outline-none'>
            {text}
        </button>
    )
}

export default Button