import RightCardContent from "./RightCardContent"

const RightCard = (props) => {
    return (
        <div className='h-full w-80 rounded-4xl overflow-hidden relative'>
            <img className='h-full w-auto object-cover' src={props.img} alt="" />
            <RightCardContent tag={props.tag} id={props.id} />
        </div>
    )
}

export default RightCard
