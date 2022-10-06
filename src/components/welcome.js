import React, { useState } from 'react'
import Workspace from './workspace'

function Welcome() {
    const [welcome, setWelcome] = useState(false)

    const renderWelcome = () => {
        return (
            <div className='h-screen w-screen flex justify-center align-center lg:mt-20 md:mt-10 pt-1 welcome-sizing'>
                <div className='lg:bg-white'>
                    <div className='flex justify-center items-center -ml-3'>
                        <img className='w-11 h-14' src='eden.png' />
                        <h3 className='text-3xl font-semibold tracking-tighter'>Eden</h3>
                    </div>
                    <div className='flex justify-center items-center pt-16'>
                        <div className='bg-purple rounded-full w-full h-10 w-10 flex items-center justify-center text-white'>1</div>
                        <div className='flex'>
                            <p className='bg-purple line-height'></p>
                            <p className='bg-gray-200 line-height'></p>
                        </div>
                        <div className='bg-white border border-gray-200 p-3 rounded-full w-full h-10 w-10 flex justify-center items-center textgray'>2</div>
                        <div className='flex'>
                            <p className='bg-gray-200 line-height'></p>
                            <p className='bg-gray-200 line-height'></p>
                        </div>
                        <div className='bg-white border border-gray-200 p-3 rounded-full w-full h-10 w-10 flex justify-center items-center textgray'>3</div>
                        <div className='flex'>
                            <p className='bg-gray-200 line-height'></p>
                            <p className='bg-gray-200 line-height'></p>
                        </div>
                        <div className='bg-white border border-gray-200 p-3 rounded-full w-full h-10 w-10 flex justify-center items-center textgray'>4</div>
                    </div>
                    <div className='mt-20 pt-1'>
                        <h1 className='text-center heading-size font-bold'>Welcome! First things first...</h1>
                        <p className='text-center text-gray-500 text-base font-medium mt-2'>You can always change them later.</p>
                        <div className='px-2'>
                            <div className='flex flex-col mt-11'>
                                <label className='text-sm font-medium py-2'>Full Name</label>
                                <input className='bg-white border border-gray-200 rounded-lg text-sm p-3' placeholder='Steve Jobs' required />
                            </div>
                            <div className='flex flex-col mt-2'>
                                <label className='text-sm font-medium py-2'>Display Name</label>
                                <input className='bg-white border border-gray-200 rounded-lg text-sm p-3' placeholder='Steve' required />
                            </div>
                            <div className='mt-6'>
                                <button className='bg-purple w-full rounded-md p-4 text-white text-sm font-medium' onClick={() => setWelcome(true)}>Create Workspace</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            {welcome ? (
                <Workspace />
            )
                : renderWelcome()
            }
        </>
    )
}

export default Welcome