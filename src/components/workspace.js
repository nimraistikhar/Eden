import React, { useState } from 'react'
import Planning from './planning'

function Workspace() {

    const [workspace, setWorkspace] = useState(false)

    const renderWorkspace = () => {
        return (
            <div className='h-screen w-screen flex justify-center align-center lg:mt-20 md:mt-10 pt-1 welcome-sizing'>
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
                        <h1 className='text-center heading-size font-bold flex justify-center flex-wrap'>Let's set up a home for all your work</h1>
                        <p className='text-center text-gray-500 text-base font-medium mt-2'>You can always create another workspace later.</p>
                        <div className='px-2 w-full flex flex-col justify-center items-center'>
                            <div className='flex flex-col mt-11 input-size'>
                                <label className='text-sm font-medium py-2'>Workspace Name</label>
                                <input className='bg-white border border-gray-200 rounded-lg text-sm p-3 font-medium' placeholder='Eden' />
                            </div>
                            <div className='flex flex-col mt-2 input-size'>
                                <label className='text-sm font-medium py-2'>Workspace URL<span className='textGray'>(optional)</span></label>
                                <div className='flex input-size'>
                                    <input className='border-y border-l border-gray-200 w-1/3 rounded-l-lg p-3 text-sm bg-gray-100 font-medium' placeholder='www.eden.com/' />
                                    <input className='border-y border-l border-r border-gray-200 rounded-r-lg w-2/3 p-3 text-sm font-medium' placeholder='Example' />
                                </div>
                            </div>
                            <div className='mt-6 input-size'>
                                <button className='bg-purple w-full rounded-md p-4 text-white text-sm font-medium' onClick={() => setWorkspace(true)}>Create Workspace</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            {workspace ? (
                <Planning />
            )
                : renderWorkspace()
            }
        </>
    )
}

export default Workspace