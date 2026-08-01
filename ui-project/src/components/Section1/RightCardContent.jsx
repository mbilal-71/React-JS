import React from 'react'

const RightCardContent = () => {
    return (
        <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-between p-6p">
            <h2 className='text-black bg-white p-1 m-3 rounded-full h-10 w-10 flex justify-center items-center text-2xl '>1</h2>
            <div className="p-4">
                <p className='text-white text-lg leading-normal font-medium mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam omnis doloremque architecto delectus odit itaque!</p>
                <div className="flex justify-between">
                    <button className='bg-gray-500 text-white font-medium px-4 py-3 rounded-full'>Satisfied</button>
                    <button className='bg-gray-500 text-white font-medium px-4 py-3 rounded-full'><i class="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
    )
}

export default RightCardContent
