import React from 'react'
import LeftText from './leftText'
import RightText from './RightText'

const Page1content = (props) => {
    return (
        <div className='px-18 py-3 h-[90vh] w-full flex gap-10 '>
            <LeftText />
            <RightText users={props.users} />
        </div>
    )
}

export default Page1content
