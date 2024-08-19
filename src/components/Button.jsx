import React from 'react'

export default function Button(props) {
    const { text, func } = props
    return (
        <button 
            onClick={func} 
            className='px-8 mx-auto py-4 rounded-md border-[2px] bg-pink-500 hover:bg-pink-600 border-pink-400 border-solid text-white font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-lg'>
            <p>{text}</p>
        </button>
    )
}
