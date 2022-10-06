import React, { useState } from 'react'
import Congratulations from './congratulations';

function Planning() {

    const [planning, setPlanning] = useState(false);

    const renderPlanning = () => {
        return (
            <div className='flex justify-center align-center lg:mt-20 md:mt-10 pt-1 welcome-sizing'>
                <div>
                    <div className='flex justify-center items-center -ml-3'>
                        <img className='w-11 h-14' src='eden.png' />
                        <h3 className='text-3xl font-semibold tracking-tighter'>Eden</h3>
                    </div>
                    <div className='flex justify-center items-center pt-16'>
                        <div className='bg-purple rounded-full w-full h-10 w-10 flex items-center justify-center text-white'>1</div>
                        <div className='flex'>
                            <p className='bg-purple line-height'></p>
                            <p className='bg-purple line-height'></p>
                        </div>
                        <div className='bg-purple border border-gray-200 p-3 rounded-full w-full h-10 w-10 flex justify-center items-center text-white'>2</div>
                        <div className='flex'>
                            <p className='bg-purple line-height'></p>
                            <p className='bg-purple line-height'></p>
                        </div>
                        <div className='bg-purple border border-gray-200 p-3 rounded-full w-full h-10 w-10 flex justify-center items-center text-white'>3</div>
                        <div className='flex'>
                            <p className='bg-purple line-height'></p>
                            <p className='bg-gray-200 line-height'></p>
                        </div>
                        <div className='bg-white border border-gray-200 p-3 rounded-full w-full h-10 w-10 flex justify-center items-center textgray'>4</div>
                    </div>
                    <div className='mt-20 pt-1'>
                        <h1 className='text-center heading-size font-bold'>How are you planning to use Eden?</h1>
                        <p className='text-center text-gray-500 text-base font-medium mt-2'>We'll streamline your setup experience accordingly.</p>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='planning-width'>
                                <div className='flex planning-width-flex pt-11'>
                                    <div className='md:w-1/2 planning-border px-7 py-6 md:mr-1'>
                                        <img className='w-5 h-5 mb-5' src='person-icon-1672.svg' />
                                        <h5 className='font-semibold text-base'>For myself</h5>
                                        <p className='font-medium text-sm pt-2 text-gray-500'>Write better. Think more clearly. Stay organized.</p>
                                    </div>
                                    <div className='md:w-1/2 planning-border rounded-lg px-7 py-6 md:ml-5 planning-space'>
                                        <img className='w-5 h-5 mb-5' src='3-person.png' />
                                        <h5 className='font-semibold text-base'>With my team</h5>
                                        <p className='font-medium text-sm pt-2 text-gray-500'>Wikis, docs, tasks & projects, all in one place.</p>
                                    </div>
                                </div>
                                <div className='mt-6 w-full'>
                                    <button className='bg-purple w-full rounded-md p-4 text-white text-sm font-medium' onClick={() => setPlanning(true)}>Create Workspace</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            {planning ? (
                <Congratulations />
            )
                : renderPlanning()
            }
        </>
    )

}

export default Planning