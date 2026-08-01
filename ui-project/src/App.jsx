import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
import Page1content from './components/Section1/Page1content'

const App = () => {
condt users = [
        {
            img: 'https://media.istockphoto.com/id/2232984535/photo/businesslady-dressed-in-elegant-jacket-holds-tablet-posing-in-workspace.jpg?s=612x612&w=0&k=20&c=Wk0MtatgZ_fm6Gx8Q_JemQHtmK2T_r34Dgf1buFNO7w=',
            intro: '',
            tag: 'Satisfied'
        },
        {
            img: 'https://media.istockphoto.com/id/2228764569/photo/hispanic-female-software-developer-coding-at-night-in-office.jpg?s=612x612&w=0&k=20&c=d6bNhps-84PN0uBSzec-s1Dqwe6e74A1QIvDqrMFBCI=',
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
            <Section1 />


        </div>
    )
}

export default App
