import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { SCHEMES, WORKOUTS } from '../utils/swoldier';
import Button from './Button';

function Header(props) {
    const { index, title, description } = props;
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-center gap-2'>
                <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-pink-700'>{index}</p>
                <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
            </div>
            <p className='text-sm sm:text-base mx-auto'>{description}</p>
        </div>
    );
}

export default function Generator(props) {
    const { muscles, setMuscles, poison, setPoison, goal, setGoal, updateWorkout } = props;
    const [showModal, setShowModal] = useState(false);

    function toggleModal() {
        setShowModal(!showModal);
    }

    function updateMuscles(muscleGroup) {
        if (muscles.includes(muscleGroup)) {
            setMuscles(muscles.filter(val => val !== muscleGroup));
            return;
        }

        if (muscles.length > 2) {
            return;
        }

        if (poison !== 'individual') {
            setMuscles([muscleGroup]);
            setShowModal(false);
            return;
        }

        setMuscles([...muscles, muscleGroup]);
        if (muscles.length === 2) {
            setShowModal(false);
        }
    }

    return (
        <SectionWrapper id={'generate'} header={"Generate your workout"} title={['It\'s', 'Time', 'to Shine']}>
            <Header index={'01'} title={'Choose your style'} description={"Select the type of workout you want to do."} />
            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
                {Object.keys(WORKOUTS).map((type, typeIndex) => {
                    return (
                        <button 
                            onClick={() => {
                                setMuscles([]);
                                setPoison(type);
                            }} 
                            className={'bg-pink-100 border  duration-200 px-4 py-3 rounded-lg hover:bg-pink-200 hover:border-pink-600 ' + 
                                      (type === poison ? ' border-pink-600 bg-pink-200 text-pink-700' : ' border-pink-400')} 
                            key={typeIndex}
                        >
                            <p className='capitalize'>{type.replaceAll('_', " ")}</p>
                        </button>
                    );
                })}
            </div>
            <Header index={'02'} title={'Target your muscles'} description={"Pick the muscle groups to work on."} />
            <div className='bg-pink-100 border border-solid border-pink-400 rounded-lg flex flex-col'>
                <button onClick={toggleModal} className='relative p-3 flex items-center justify-center hover:bg-pink-200 hover:border-pink-600'>
                    <p className='capitalize'>{muscles.length === 0 ? 'Select muscle groups' : muscles.join(' ')}</p>
                    <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
                </button>
                {showModal && (
                    <div className='flex flex-col px-3 pb-3'>
                        {(poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((muscleGroup, muscleGroupIndex) => {
                            return (
                                <button 
                                    onClick={() => {
                                        updateMuscles(muscleGroup);
                                    }} 
                                    key={muscleGroupIndex} 
                                    className={'hover:text-pink-400 duration-200 ' + (muscles.includes(muscleGroup) ? ' text-pink-400' : ' ')}
                                >
                                    <p className='uppercase'>{muscleGroup.replaceAll('_', ' ')}</p>
                                </button>
                            );
                        })}
                    </div>
                )}
            </div>
            <Header index={'03'} title={'Set your goal'} description={"Choose your ultimate objective."} />
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
                    return (
                        <button 
                            onClick={() => {
                                setGoal(scheme);
                            }} 
                            className={'bg-pink-100 border  duration-200 hover:bg-pink-200 hover:border-pink-600 py-3 rounded-lg px-4 ' + 
                                      (scheme === goal ? ' border-pink-600 bg-pink-200 text-pink-700' : ' border-pink-400')} 
                            key={schemeIndex}
                        >
                            <p className='capitalize'>{scheme.replaceAll('_', " ")}</p>
                        </button>
                    );
                })}
            </div>
            <Button func={updateWorkout} text={"Formulate"}></Button>
        </SectionWrapper>
    );
}
