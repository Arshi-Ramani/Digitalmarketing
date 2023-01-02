import FeaturesCard1 from '../images/features-card-1.jpg'
import FeaturesCard2 from '../images/features-card-2.jpg'
import FeaturesCard3 from '../images/features-card-3.jpg'
import FeaturesCard4 from '../images/features-card-4.jpg'
import FeaturesCard5 from '../images/features-card-5.jpg'
import FeaturesCard6 from '../images/features-card-6.jpg'
import FeaturesCard7 from '../images/features-card-7.jpg'

const data = [
        {
        id: 1,
        title: "Online advertising.",
        content: "Lorem ipsum dolor sit adipisicing  amet consectetur adipisicing elit. ",
        image: FeaturesCard1
        },
        {
        id: 2,
        title: "Search Engine Optimisation.",
        content: "Lorem ipsum dolor sit adipisicing  amet consectetur adipisicing elit.",
        image: FeaturesCard2
        },
        {
        id: 3,
        title: "Online Content and Blogging.",
        content: "Lorem ipsum dolor sit adipisicing  amet consectetur adipisicing elit.",
        image: FeaturesCard3
        },
        {
        id: 4,
        title: "Web PR.",
        content: "Lorem ipsum dolor sit adipisicing  amet consectetur adipisicing elit.",
        image: FeaturesCard4
        },
        {
        id: 5,
        title: "Social Media Management and Listening.",
        content: "Lorem ipsum dolor sit adipisicing  amet consectetur adipisicing elit. ",
        image: FeaturesCard5
        },
        {
        id: 6,
        title: "Mobile Marketing.",
        content: "Lorem ipsum dolor sit adipisicing  amet consectetur adipisicing elit.",
        image: FeaturesCard6
        },
        {
        id: 7,
        title: "Web Analytics.",
        content: "Lorem ipsum dolor sit adipisicing  amet consectetur adipisicing elit.",
        image: FeaturesCard7
        },
    ]
    const Features = () => {
    return (
        <div id='features' className='pt-32 pb-24 before:bottom-[-60%] xl:before:left-[80%] before:left-[60%] before:bg-no-repeat relative before:content md:before:w-[95%] before:w-[100%] before:!z-[-1] before:h-full before:absolute feature-shape overflow-hidden before:opacity-50'>
            <div className="container">
                <div className="text-center  max-w-[600px] mx-auto wow animate__fadeInDown">
                    <h1 className='md:text-4xl text-2xl py-3 '>We Provide Different <span className='text-primary-color'>Features</span> For Your Agency </h1>
                    <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
                <div className="">
                    <div className="flex sm:pt-24 pt-12 gap-8 sm:gap-y-14 flex-wrap justify-center">
                    {data.map((item) => (
                            <div className='xl:w-[23%] lg:w-[30%] sm:w-[40%] w-full max-w-[350px] wow animate__fadeInUp'>
                                <img src={item.image} alt=" random imgee" className="w-full object-cover object-center rounded-lg shadow-md sm:h-[260px]
                                h-[220px]"/>    
                                <div className="relative px-4 -mt-36">
                                    <div className="bg-primary-color bg-primary-blur p-6 rounded-lg shadow-lg text-dark-blue">
                                        <h4 className="mt-1 text-xl font-semibold leading-tight truncate mb-3">{item.title}</h4>
                                        <p className="line-clamp">{item.content}</p>
                                    </div>
                                </div>
                            </div>
                        ))} 
                    </div>
                </div>
            </div>
        </div>
    )}

export default Features