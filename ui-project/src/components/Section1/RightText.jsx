import React from 'react'
import RightCard from './RightCard'

const RightText = (props) => {
    return (
        <div className='h-full  flex flex-nowrap gap-10 w-2/3 p-6 bg-gray-100'>
            {props.users.map(function (elem, idx) {
                return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} />
            })}
        </div>
    )
}

export default RightText
