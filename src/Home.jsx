import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import cone from './assets/Cone-Orange-Glossy.png'
import cube from './assets/RoundCube-White-Glossy.png'
import cylinder from './assets/Cylinder-Yellow-Glossy.png'
import boxes from './assets/Boxes.png'
import man from './assets/Man.png'
import manFace from './assets/man-face.png'
import donutOrange from './assets/Donut-orange.png'
import donutYellow from './assets/Donut-yellow.png'
import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";

const Home = () => {

  const aboutRef = useRef(null);
  const counters = [
    { target: 3, suffix: '+' },
    { target: 95, suffix: '%' },
    { target: 30, suffix: '+' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          counters.forEach((counter, index) => {
            const element = document.getElementById(`counter-${index}`);
            gsap.fromTo(element, 
              { innerText: 0 },
              {
                innerText: counter.target,
                duration: 2,
                snap: { innerText: 1 },
                ease: "power1.out",
                onUpdate: function() {
                  element.innerText = Math.floor(this.targets()[0].innerText);
                },
                delay: index * 0.3 // stagger animations
              }
            );
          });
          observer.disconnect(); // Stop observing after triggering
        }
      });
    }, { threshold: 0.5 }); // Trigger when 50% visible

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <section className='w-full h-[85vh] bg-none px-7 md:px-16 lg:px-32 flex flex-col lg:flex-row justify-between items-center'>
        <div className='relative w-full h-full flex flex-col justify-center items-center lg:items-start gap-3'>
          <img src={cone} alt="cone"  className='hidden md:flex lg:hidden absolute top-3 right-4 w-28 h-auto animate-float'/>
          <span className='text-[#363636] font-medium italic text-sm md:text-lg'>Where you get value for your money...</span>
          <h1 className='text-3xl md:text-5xl text-black text-center lg:text-start font-bold'>Welcome To Te<span className='text-[#FF6600]'>a</span>mC<span className='text-[#FF6600]'>o</span>re</h1>
          <p className='text-[#797979] font-normal text-xs md:text-sm leading-6 lg:text-start text-center'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Vitae neque, qui ipsa corporis illum deserunt? Assumenda, 
            illum magnam voluptate voluptatum minima amet rem eius exercitationem officiis distinctio fugit, 
            recusandae earum.
          </p>

          <div className='flex gap-2.5 mt-3'>
            {/* Contact Button */}
            <button className="flex px-6 py-3 bg-[#FF6600] border-2 font-semibold border-[#FF6600] text-md text-white rounded-lg hover:bg-[#FF6600] hover:text-[#ffffff] hover:border-none transition-all duration-500">
              Hire Us
            </button>

            <button className="flex px-6 py-3 bg-none border-2 font-semibold border-[#FF6600] text-md text-[#FF6600] rounded-lg hover:bg-[#FF6600] hover:text-[#ffffff] hover:border-none transition-all duration-500">
              Contact Us
            </button>
          </div>
        </div>
        <div className='relative w-full h-full flex flex-col justify-center items-center'>
          <img src={cone} alt="cone" className='hidden lg:flex w-28 h-auto absolute top-10 right-96 animate-float mr-10'/>
          <img src={cube} alt="cube" className='w-20 md:w-24 h-auto absolute top-3 left-3 md:top-24 md:left-8 lg:left-96 lg:ml-16 animate-rotate-alternate animate-float'/>
          <img src={man} alt="man" className='w-64 md:w-lg lg:w-96 h-auto'/>
          <img src={cylinder} alt="cylinder" className='w-16 md:w-20 h-auto absolute top-12 md:top-80 lg:top-96 right-2 md:right-2 lg:right-10 animate-float'/>
        </div>
      </section>

      <section className='w-full h-auto py-24 bg-none px-7 md:px-16 lg:px-32 flex flex-col gap-20 justify-center items-center'>
        <div className='flex flex-col'>
          <h2 className='font-semibold text-black text-2xl'>What We Do</h2>
          <div className='w-16 h-1 rounded-full bg-[#FF6600]'></div>
        </div>
        <div className='w-auto h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          <div className='w-60 py-10 px-6 bg-[#FFF0E5] rounded-md flex flex-col items-center gap-3'>
            <img src={boxes} alt="boxes" />
            <h4 className='text-xl font-semibold'>Create</h4>
            <p className='text-sm text-[#797979] font-light text-center '>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Facere explicabo.
            </p>
          </div>
          <div className='w-60 py-10 px-6 bg-[#FFF0E5] rounded-md flex flex-col items-center gap-3'>
            <img src={boxes} alt="boxes" />
            <h4 className='text-xl font-semibold'>Edit</h4>
            <p className='text-sm text-[#797979] font-light text-center '>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Facere explicabo.
            </p>
          </div>
          <div className='w-60 py-10 px-6 bg-[#FFF0E5] rounded-md flex flex-col items-center gap-3'>
            <img src={boxes} alt="boxes" />
            <h4 className='text-xl font-semibold'>Assist</h4>
            <p className='text-sm text-[#797979] font-light text-center '>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Facere explicabo.
            </p>
          </div>
          <div className='w-60 py-10 px-6 bg-[#FFF0E5] rounded-md flex flex-col items-center gap-3'>
            <img src={boxes} alt="boxes" />
            <h4 className='text-xl font-semibold'>Delete</h4>
            <p className='text-sm text-[#797979] font-light text-center '>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Facere explicabo.
            </p>
          </div>
        </div>
      </section>

      <section ref={aboutRef} id="about" className='w-full relative h-[75vh] lg:h-[85vh] bg-none justify-center px-7 md:px-16 lg:px-32 flex flex-col lg:flex-row items-center'>
        <img src={donutOrange} alt="donutOrange" className='w-20 md:w-32 lg:w-48 absolute z-10 bottom-0 left-0'/>
        <div className='flex flex-col gap-2 w-auto h-auto'>

          <div className='flex flex-col w-auto items-center'>
            <h2 className='font-semibold text-black text-2xl'>About Us</h2>
            <div className='w-16 h-1 mr-10 rounded-full bg-[#FF6600]'></div>
          </div>

          <div>
            <p className='text-sm text-[#797979] mt-2 font-light w-sm md:w-2xl lg:w-3xl leading-6 text-center'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, laboriosam similique. Dolor, voluptates. 
              Temporibus ipsa qui minus rerum reiciendis ea totam provident quod maiores facere, explicabo exercitationem deleniti
              Libero, tempore. Animi reprehenderit debitis laudantium, amet, 
              corporis minima ducimus quidem nulla nostrum nobis modi! Qui suscipit ab pariatur vel maxime porro assumenda amet, 
              laudantium natus reiciendis facilis est. Minus.
            </p>
          </div>

          <div className="px-15 grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 md:mt-16">
            {counters.map((counter, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-black mb-2">
                  <span id={`counter-${index}`}>0</span>
                  {counter.suffix}
                </div>
                <p className="text-gray-600 text-sm">
                  {index === 0 && 'Years Experience'}
                  {index === 1 && 'Client Satisfaction'}
                  {index === 2 && 'Projects Completed'}
                </p>
              </div>
              ))}
          </div>

        </div>
        <img src={donutYellow} alt="donutYellow" className='w-20 md:w-32 lg:w-48 absolute top-60 md:top-0 right-0'/>
      </section>

      
      <section className='w-full h-auto py-24 bg-none px-7 md:px-16 lg:px-32 flex flex-col gap-20 justify-center items-center'>
        <div className='flex flex-col'>
          <h2 className='font-semibold text-black text-2xl'>Reviews</h2>
          <div className='w-16 h-1 rounded-full bg-[#FF6600]'></div>
        </div>
        <div className='w-auto h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-15 lg:gap-6'>
          <div className='relative w-60 py-10 px-6 bg-[#FFF0E5] rounded-md flex flex-col justify-center text-center items-center gap-3'>
            <img src={manFace} alt="manFace" className='absolute top-[-50px] z-10 w-28'/>
            <div className='flex flex-col gap-2 mt-10'>
              <h4 className='text-xl font-semibold'>John Doe</h4>
              <p className='text-xs text-[#797979] italic font-light text-center '>
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Voluptates veniam animi ex explicabo quo quisquam, consequuntur iusto aspernatur.'
              </p>
            </div>
            <div className='flex gap-2 text-amber-300'>
              <FaStar size={13}/>
              <FaStar size={13}/>
              <FaStar size={13}/>
              <FaStar size={13}/>
              <FaRegStarHalfStroke size={13}/>
            </div>
          </div>
          <div className='relative w-60 py-10 px-6 bg-[#FFF0E5] rounded-md flex flex-col justify-center text-center items-center gap-3'>
            <img src={manFace} alt="manFace" className='absolute top-[-50px] z-10 w-28'/>
            <div className='flex flex-col gap-2 mt-10'>
              <h4 className='text-xl font-semibold'>John Doe</h4>
              <p className='text-xs text-[#797979] italic font-light text-center '>
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Voluptates veniam animi ex explicabo quo quisquam, consequuntur iusto aspernatur.'
              </p>
            </div>
            <div className='flex gap-2 text-amber-300'>
              <FaStar size={13}/>
              <FaStar size={13}/>
              <FaStar size={13}/>
              <FaStar size={13}/>
              <FaRegStarHalfStroke size={13}/>
            </div>
          </div>
          <div className='relative w-60 py-10 px-6 bg-[#FFF0E5] rounded-md flex flex-col justify-center text-center items-center gap-3'>
            <img src={manFace} alt="manFace" className='absolute top-[-50px] z-10 w-28'/>
            <div className='flex flex-col gap-2 mt-10'>
              <h4 className='text-xl font-semibold'>John Doe</h4>
              <p className='text-xs text-[#797979] italic font-light text-center '>
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Voluptates veniam animi ex explicabo quo quisquam, consequuntur iusto aspernatur.'
              </p>
            </div>
            <div className='flex gap-2 text-amber-300'>
              <FaStar size={13}/> 
              <FaStar size={13}/>
              <FaStar size={13}/>
              <FaStar size={13}/>
              <FaRegStarHalfStroke size={13}/>
            </div>
          </div>
          <div className='relative w-60 py-10 px-6 bg-[#FFF0E5] rounded-md flex flex-col justify-center text-center items-center gap-3'>
            <img src={manFace} alt="manFace" className='absolute top-[-50px] z-10 w-28'/>
            <div className='flex flex-col gap-2 mt-10'>
              <h4 className='text-xl font-semibold'>John Doe</h4>
              <p className='text-xs text-[#797979] italic font-light text-center '>
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Voluptates veniam animi ex explicabo quo quisquam, consequuntur iusto aspernatur.'
              </p>
            </div>
            <div className='flex gap-2 text-amber-300'>
              <FaStar size={13}/>
              <FaStar size={13}/>
              <FaStar size={13}/>
              <FaStar size={13}/>
              <FaRegStarHalfStroke size={13}/>
            </div>
          </div>
        </div>
      </section>

      <section className='w-full h-[85vh] bg-none px-7 md:px-16 lg:px-32 flex flex-col lg:flex-row justify-between items-center'>
        <div className='relative w-full h-full flex flex-col justify-center items-center lg:items-start gap-3'>
          {/* <img src={cone} alt="cone"  className='hidden md:flex lg:hidden absolute top-3 right-4 w-28 h-auto animate-float'/> */}
          {/* <span className='text-[#363636] font-medium italic text-sm md:text-lg'>Where you get value for your money...</span> */}
          {/* <h1 className='text-3xl md:text-5xl text-black text-center lg:text-start font-bold'>Welcome To Te<span className='text-[#FF6600]'>a</span>mC<span className='text-[#FF6600]'>o</span>re</h1> */}
          <div className='flex flex-col'>
            <h2 className='font-semibold text-black text-2xl'>Meet The Founder</h2>
            <div className='w-16 h-1 rounded-full bg-[#FF6600]'></div>
          </div>
          <p className='text-[#797979] font-normal text-xs md:text-sm leading-6 lg:text-start text-center'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Vitae neque, qui ipsa corporis illum deserunt? Assumenda, 
            vitae neque, qui ipsa corporis illum deserunt? Assumenda, 
            illum magnam voluptate voluptatum minima amet rem eius exercitationem officiis distinctio fugit,
            recusandae earum.
          </p>
        </div>
        <div className='relative w-full h-full flex flex-col justify-center items-center'>
          <img src={cone} alt="cone" className='hidden lg:flex w-28 h-auto absolute top-10 right-96 animate-float mr-10'/>
          <img src={cube} alt="cube" className='w-20 md:w-24 h-auto absolute top-3 left-3 md:top-24 md:left-8 lg:left-96 lg:ml-16 animate-rotate-alternate animate-float'/>
          <img src={man} alt="man" className='w-64 md:w-lg lg:w-96 h-auto'/>
          <img src={cylinder} alt="cylinder" className='w-16 md:w-20 h-auto absolute top-12 md:top-80 lg:top-96 right-2 md:right-2 lg:right-10 animate-float'/>
        </div>
      </section>
    </div>
  )
}

export default Home