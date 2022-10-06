import React from 'react'

function Congratulations() {
    return (
        <div className='flex justify-center align-center mt-36 pt-3 welcome-sizing'>
            <div className=''>
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
                        <p className='bg-purple line-height'></p>
                    </div>
                    <div className='bg-purple border border-gray-200 p-3 rounded-full w-full h-10 w-10 flex justify-center items-center text-white'>4</div>
                </div>
                <div className='mt-20 pt-4'>
                    <div className='w-auto flex justify-center items-center'>
                        <div className='p-6 bg-purple rounded-full'>
                            <img className='w-4 h-4 bg-purple rounded-full flex justify-center items-center' src='tick.png' />
                        </div>
                    </div>
                    <h1 className='text-center heading-size font-bold pt-9'>Congratulations, Eren!</h1>
                    <p className='text-center text-gray-500 text-base font-medium mt-2'>You have completed onboarding, you can start using Eden!</p>
                    <div className='mt-8 flex justify-center items-center'>
                        <button className='bg-purple input-size rounded-md p-4 text-white text-sm font-medium'>Launch Eden</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Congratulations