import Section1 from './components/Section1/Section1'

const App = () => {
    const users = [
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRstZv7AtQn7IN6CpR7Go7trCo_JqHomt4ugIy3acPePQ&s=10',
            intro: '',
            tag: 'Satisfied'
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLe1hD2oNLVFpFdWQ4HwbP2SCjFAm5Q2GU25F6RxA-YdXURc529M9eY_gJ&s=10',
            intro: '',
            tag: 'Underserved'
        },
        {
            img: 'https://media.istockphoto.com/id/2220160646/photo/young-asian-businesswoman-smiling-with-arms-crossed-in-modern-office.jpg?s=612x612&w=0&k=20&c=9_-QQRrIdTdYcWSifw2wsue-tJ7DvWGs961G_8vJqLE=',
            intro: '',
            tag: 'Underbanked'
        }
    ]

    return (
        <div className='bg-gray-200'>
            <Section1 users={users} />
        </div>
    )
}

export default App
