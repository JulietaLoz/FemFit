import React from 'react'
import Button from './Button'

export default function Hero() {
    return (
        <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
            <div className='flex flex-col gap-4'>
                <p>IT'S TIME TO</p>
                <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Empower<span className='text-pink-400'>Yourself</span></h1>
            </div>
            <p className='text-sm md:text-base font-light'>I acknowledge that I may become <span className='text-pink-400 font-medium'>unstoppably powerful</span> and accept all risks of becoming the local <span className='text-pink-400 font-medium'>fitness sensation</span>, with the potential of an extreme transformation.</p>
            <Button func={() => {
                window.location.href = '#generate'
            }} text={"Accept & Begin"}></Button>
        </div>
    )
}
