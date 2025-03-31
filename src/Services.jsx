import React, {useState} from 'react'
import donutOrange from './assets/Donut-orange.png'
import cone from './assets/Cone-Orange-Glossy.png'
import socialMM from './assets/social MM.png'
import communityM from './assets/community M.png'
import PrMediaM from './assets/Pr Media M.png'
import ProjectA from './assets/Project A.png'
import ProjectM from './assets/Project M.png'
import Web3 from './assets/Web3 dApp D.png'
// import donutYellow from './assets/Donut-yellow.png'

const Services = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is TeamCore?",
      answer: "TeamCore is a comprehensive team collaboration platform designed to streamline communication, project management, and workflow automation for modern teams."
    },
    {
      question: "What is TeamCore?",
      answer: "At its core, TeamCore provides a unified workspace with tools for task tracking, document sharing, and real-time collaboration across departments."
    },
    {
      question: "What is TeamCore?",
      answer: "The platform combines AI-powered insights with intuitive interfaces to help teams work more efficiently and make data-driven decisions."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  return (
    <div>
      <section className='w-full relative h-auto lg:h-[85vh] bg-none px-7 md:px-16 lg:px-32 flex flex-col lg:flex-row items-center'>

        <img src={donutOrange} alt="donutOrange" className='hidden lg:flex w-20 md:w-32 lg:w-40 absolute z-10 bottom-0 left-0'/>

        <div className='flex flex-col gap-2 w-auto h-auto'>

          <div>
            <div className='flex flex-col w-auto items-start'>
              <h2 className='font-semibold text-black text-2xl'>Transforming Ideas into Digital Solutions</h2>
              <div className='w-38 h-1 mt-1 rounded-full bg-[#FF6600]'></div>
            </div>

            <img src={cone} alt="cone" className='hidden lg:flex w-28 h-auto absolute top-28 right-52 animate-float'/>
          </div>

          <div>
            <p className='text-sm text-[#797979] mt-2 font-light w-sm md:w-2xl lg:w-full leading-7 text-start'>
              We help businesses grow by offering a comprehensive suite of digital services, including cutting-edge web development, 
              strategic branding, professional video editing, and innovative design solutions. 
              Our team is dedicated to creating visually stunning, 
              high-performing digital experiences that not only enhance brand identity but also drive engagement, increase visibility, 
              and maximize business success. Whether you're looking to build a strong online presence, 
              captivate your audience with compelling visuals, or streamline your digital strategy, 
              we provide tailored solutions to meet your unique needs and goals.
            </p>
          </div>

        </div>
      </section>

      
      <section className='w-full h-auto py-24 bg-none px-7 md:px-16 lg:px-32 flex flex-col gap-20 items-center'>
        <div className='flex flex-col'>
          <h2 className='font-semibold text-black text-2xl'>Our Services</h2>
          <div className='w-16 h-1 rounded-full bg-[#FF6600]'></div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          <div className="relative w-72 md:w-80 lg:w-96 group">
            <img src={socialMM} alt="" className="w-full opacity-85 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col items-center justify-center p-6 rounded-lg">
              <p className="text-white text-lg font-bold drop-shadow-lg">Social Media Management</p>
              <p className="text-[#FF6600] text-lg font-bold drop-shadow-lg">$*000</p>
            </div>
          </div>
          <div className="relative w-72 md:w-80 lg:w-96 group">
            <img src={communityM} alt="" className="w-full opacity-85 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col items-center justify-center p-6 rounded-lg">
              <p className="text-white text-lg font-bold drop-shadow-lg">Social Media Management</p>
              <p className="text-[#FF6600] text-lg font-bold drop-shadow-lg">$*000</p>
            </div>
          </div>
          <div className="relative w-72 md:w-80 lg:w-96 group">
            <img src={PrMediaM} alt="" className="w-full opacity-85 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col items-center justify-center p-6 rounded-lg">
              <p className="text-white text-lg font-bold drop-shadow-lg">Social Media Management</p>
              <p className="text-[#FF6600] text-lg font-bold drop-shadow-lg">$*000</p>
            </div>
          </div>
          <div className="relative w-72 md:w-80 lg:w-96 group">
            <img src={ProjectA} alt="" className="w-full opacity-85 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col items-center justify-center p-6 rounded-lg">
              <p className="text-white text-lg font-bold drop-shadow-lg">Social Media Management</p>
              <p className="text-[#FF6600] text-lg font-bold drop-shadow-lg">$*000</p>
            </div>
          </div>
          <div className="relative w-72 md:w-80 lg:w-96 group">
            <img src={ProjectM} alt="" className="w-full opacity-85 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col items-center justify-center p-6 rounded-lg">
              <p className="text-white text-lg font-bold drop-shadow-lg">Social Media Management</p>
              <p className="text-[#FF6600] text-lg font-bold drop-shadow-lg">$*000</p>
            </div>
          </div>
          <div className="relative w-72 md:w-80 lg:w-96 group">
            <img src={Web3} alt="" className="w-full opacity-85 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col items-center justify-center p-6 rounded-lg">
              <p className="text-white text-lg font-bold drop-shadow-lg">Social Media Management</p>
              <p className="text-[#FF6600] text-lg font-bold drop-shadow-lg">$*000</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300"
          >
            <button
              className={`w-full px-6 py-4 text-left flex justify-between items-center ${activeIndex === index ? 'bg-blue-50' : 'bg-white'}`}
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
              <span className="text-gray-500 text-xl">
                {activeIndex === index ? '−' : '+'}
              </span>
            </button>
            
            <div 
              className={`px-6 overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-96 pb-4' : 'max-h-0'}`}
            >
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
      </section>
    </div>
  )
}

export default Services