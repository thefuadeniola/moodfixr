import React from 'react'

const Button = ({ type, text, handleClick, buttonStyles }) => {
    return (
        <button type={type}
            onClick={handleClick}
            className={`button flex flex-row relative justify-center items-center py-3 px-6 outline-none bg-primary-blue ${buttonStyles}`}>
            <span className='text-white'>{text}</span>
        </button>
    )
}

export default Button