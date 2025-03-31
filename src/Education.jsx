import React from 'react'
import donutOrange from './assets/Donut-orange.png'
import cone from './assets/Cone-Orange-Glossy.png'


const Education = () => {
  return (
    <div>
      <section className='w-full relative h-auto lg:h-[85vh] bg-none px-7 md:px-16 lg:px-32 flex flex-col lg:flex-row items-center justify-center'>

        <img src={donutOrange} alt="donutOrange" className='hidden lg:flex w-20 md:w-32 lg:w-40 absolute z-10 bottom-0 left-0'/>

        <div className='flex flex-col gap-2 w-auto h-auto'>

          <div >
            <div className='flex flex-col w-auto items-start'>
              <h2 className='font-semibold text-black text-2xl'>Stay Tuned. Coming Soon.</h2>
              <div className='w-10 h-1 mt-1 rounded-full bg-[#FF6600]'></div>
            </div>
          </div>

          {/* <div>
            <p className='text-sm text-[#797979] mt-2 font-light w-sm md:w-2xl lg:w-full leading-7 text-start'>
              We help businesses grow by offering a comprehensive suite of digital services, including cutting-edge web development, 
              strategic branding, professional video editing, and innovative design solutions. 
              Our team is dedicated to creating visually stunning, 
              high-performing digital experiences that not only enhance brand identity but also drive engagement, increase visibility, 
              and maximize business success. Whether you're looking to build a strong online presence, 
              captivate your audience with compelling visuals, or streamline your digital strategy, 
              we provide tailored solutions to meet your unique needs and goals.
            </p>
          </div> */}

        </div>
      </section>
    </div>
  )
}

export default Education