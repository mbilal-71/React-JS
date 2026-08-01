import RightCardContent from "./RightCardContent"

const RightCard = () => {
    return (
        <div className='h-full w-80 rounded-4xl overflow-hidden relative'>
            <img className='h-full w-auto object-cover' src="https://media.istockphoto.com/id/2223853446/photo/woman-standing-indoors-using-a-tablet-device-in-a-contemporary-office-space.jpg?s=612x612&w=0&k=20&c=EK2RztytyMc7_rHK7u2Z63SdncesjuKgeSem6d_BXKc=" alt="" />
            <RightCardContent />
        </div>
    )
}

export default RightCard
