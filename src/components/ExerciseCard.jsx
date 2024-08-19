import React, { useState } from 'react'

export default function ExerciseCard(props) {
    
    const { exercise, i } = props

    const [setsCompleted, setSetsComplete] = useState(0)

    function handleSetIncrement() {
        setSetsComplete((setsCompleted + 1) % 6)
    }

    return (
        <div className='p-4 rounded-md flex flex-col gap-4 bg-pink-100 sm:flex-wrap'>
            <div className='flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-x-4'>
                <h4 className='text-3xl hidden sm:inline sm:text-4xl md:text-5xl font-semibold text-pink-700'>
                    0{i + 1}
                </h4>
                <h2 className='capitalize whitespace-nowrap truncate max-w-full text-lg sm:text-xl md:text-2xl flex-1 sm:text-center'>{exercise.name.replaceAll("_", " ")}</h2>
                <p className='text-sm text-pink-700 capitalize'>{exercise.type}</p>
            </div>
            <div className='flex flex-col'>
                <h3 className='text-pink-700 text-sm'>Muscle Groups</h3>
                <p className='capitalize'>{exercise.muscles.join(' & ')}</p>
            </div>

            <div className='flex flex-col bg-pink-100 rounded gap-2 '>
                {exercise.description.split('___').map((val, index) => {
                    return (
                        <div key={index} className='text-sm'>
                            {val}
                        </div>
                    )
                })}
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-4 sm:place-items-center gap-2'>
                {['reps', 'rest', 'tempo'].map(info => {
                    return (
                        <div key={info} className='flex flex-col p-2 rounded border-[1.5px] border-solid border-pink-700 w-full'>
                            <h3 className='capitalize text-pink-700 text-sm'>{info === 'reps' ? `${exercise.unit}` : info}</h3>

                            <p className='font-medium'>{exercise[info]}</p>
                        </div>
                    )
                })}
                <button onClick={handleSetIncrement} className='flex flex-col p-2 rounded border-[1.5px] duration-200 border-solid border-pink-700 hover:border-pink-500 w-full duration-200'>
                    <h3 className='text-pink-700 text-sm capitalize'>Sets completed</h3>
                    <p className='font-medium'>{setsCompleted} / 5</p>
                </button>
            </div>
        </div>
    )
}
