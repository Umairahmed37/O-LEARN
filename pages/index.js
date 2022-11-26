import Image from "next/image"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

import { PlayIcon, UserIcon, ChevronDownIcon } from '@heroicons/react/24/solid'

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css/pagination";


// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

// Import Swiper styles
import 'swiper/css';


export default function Home() {
  return (
    <>
      <div className="lg:px-28">


        <section id="Hero Section container " className="container mx-auto">

          <div className="grid md:grid-cols-2 pt-16 md:pt-24 px-5 ">

            <div className="heroText order-2 md:order-1 
          lg:mt-20  
          ">
              <h4 className="text-pink-dark lg:text-lg tracking-widest mb-2 mt-3 md:mt-0">Distance Learning easy</h4>

              <h1 className="lg:text-6xl font-bold text-blue-dark-title mb-3  ">

                Learn New Skill Gain More

                Education

              </h1>

              <p className="text-text-color lg:text-lg mt-0 md:mt-10">Take high quality online courses from the best online Take high quality online courses from the best online instrictors around the world & develop your skills.</p>

              <div className="flex flex-row mt-8 items-center">
                <button className="darkbutton ">Get Started</button>
                <div className="ml-5 flex items-center">
                  <div className="p-2 bg-pink-back rounded-full">
                    <PlayIcon className="h-6 w-6 text-[#FF8080]" />
                  </div>
                  <p className="ml-2 font-semibold">How it works</p>
                </div>
              </div>
            </div>

            <div className="heroimage order-1 md:order-2 mx-auto">
              <Image alt="hero image" width='650' height='450' src="/heroimage.png" />
            </div>

          </div>
        </section>

        <section id="Convenience" className="mt-16 py-10 bg-pink-back container mx-auto">

          <div className="flex flex-col md:flex-row">

            <div className="Conv Images flex flex-row justify-center space-x-5 md:w-1/2">

              <div className="space-y-5 ">
                <div className="rounded-full shadow-xl"><img src="/conv1.png" alt="Convenience Image 1" className="w-[150px] h-[180px]" /></div>
                <div className="rounded-full shadow-xl"><img src="/conv2.png" alt="Convenience Image 2" className="w-[150px] h-[180px]" /></div>
                {/* <Image alt="Convenience Image 1" width={200} height={250} src='/conv1.png' /> */}
                {/* <Image className="!w-[100px]" alt="Convenience Image 2" width={200} height={250} src='/conv2.png' /> */}
              </div>


              <div className="flex items-center ">
                <div className="shadow-xl rounded-full">
                  <img src="/conv3.png" alt="Convenience Image 3" className="w-[150px] h-[180px]" />
                </div>
              </div>

            </div>

            <div className="mt-10 px-5 md:w-1/2">
              <h1 className="text-2xl font-bold text-blue-dark">Find Convenient & Affordable Learning</h1>
              <p className="text-text-color mt-3">Here we guide you to the best online courses, e-learning advice,</p>

              <div className="flex mt-5 learningparagraphs">
                <span className="flex justify-center text-4xl text-pink-dark ">01</span><p>Here we guide you to the best online courses, e-learning advice, and technology and resources for education and training. </p>
              </div>

              <div className="flex mt-5 learningparagraphs">
                <span className="flex justify-center text-4xl text-pink-dark ">02</span><p>Here we guide you to the best online courses, e-learning advice, and technology. </p>
              </div>

              <div className="flex mt-5 learningparagraphs">
                <span className="flex justify-center text-4xl text-pink-dark ">03</span><p>Here we guide you to the best online courses, e-learning advice, and technology education and training.  </p>
              </div>

              <div className="w-full mt-5">
                <h2 className="mx-auto w-fit font-bold underline md:ml-12">Learn More</h2>
              </div>

            </div>
          </div>

        </section>

        <section id="Services" className="px-5 container mx-auto">

          <div className=" mt-10" >
            <h1 className="text-3xl  font-bold text-center">Our Courses</h1>
            <p className="text-text-color mt-5 text-center">Take high quality online courses from the best online instructors
              around the world & develop your skills.</p>
          </div>

          <div className="flex flex-col mt-10 items-center  md:flex-row space-y-10 md:space-y-0 md:space-x-10">

            <div className="w-1/2 py-5 bg-[#FBD2D2] text-center rounded-br-3xl border border-[#FBD2D2]">
              <div className="bg-white shadow-2xl flex align-middle w-12 rounded-full mx-auto">
                <img className="mx-auto w-12 p-2 h-12" src="cicon1.png" alt="Design course" />
              </div><h2 className="text-xl font-bold mt-3 ">Design</h2>
              <button href="#" className="underline text-lg">View more</button>
            </div>



            <div className="w-1/2 py-5 hover:bg-[#FBD2D2] duration-150 bg-white text-center rounded-br-3xl border border-[#FBD2D2]">
              <div className="bg-white shadow-2xl flex align-middle w-12 rounded-full mx-auto">
                <img className="mx-auto w-12 p-2 h-12" src="cicon2.png" alt="Design course" />
              </div>
              <h2 className="text-xl font-bold mt-3 ">Development</h2>
              <button href="#" className="underline text-lg">View more</button>
            </div>

            <div className="w-1/2 py-5 hover:bg-[#FBD2D2] duration-150 bg-white text-center rounded-br-3xl border border-[#FBD2D2]">
              <div className="bg-white shadow-2xl flex align-middle w-12 rounded-full mx-auto">
                <img className="mx-auto w-12 p-2 h-12" src="cicon3.png" alt="Design course" />
              </div>              <h2 className="text-xl font-bold mt-3 ">Development</h2>
              <button href="#" className="underline text-lg">View more</button>
            </div>

            <div className="w-1/2 py-5 hover:bg-[#FBD2D2] duration-150 bg-white text-center rounded-br-3xl border border-[#FBD2D2]">
              <div className="bg-white shadow-2xl flex align-middle w-12 rounded-full mx-auto">
                <img className="mx-auto w-12 p-2 h-12" src="cicon4.png" alt="Design course" />
              </div>              <h2 className="text-xl font-bold mt-3 ">Development</h2>
              <button href="#" className="underline text-lg">View more</button>
            </div>

          </div>


        </section>

        <section id="LatestCourses" className="container mx-auto">

          <div className=" mt-16" >
            <h1 className="text-3xl  font-bold text-center">Latest Courses</h1>
            <p className="text-text-color mt-2 text-center">Take high quality online courses from the best online instructors
              around the world & develop your skills.</p>
          </div>

          <div className="md:py-8 pb-10 sm:pb-20 md:flex justify-between  ">

            {/* <div className='lg:flex flex-col justify-center hidden  '>
              <div id='prev_slide'

                className='flex flex-col justify-center cursor-pointer w-16 h-16 rounded-full shadow-2xl bg-pink-main active:bg-pink-dark mb-16 '>

                <AiOutlineArrowLeft className='mx-auto text-3xl' />

              </div>
            </div> */}

            <div className='w-10/12  lg:block mx-auto'>

              <Swiper
                breakpoints={{

                  300: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                   },

                  750: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },

                  820: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },

                }}
                slidesPerView={3}
                spaceBetween={10}
                slidesPerGroup={1}
                loop={true}
                touchEventsTarget='container'
                grabCursor={true}
                loopFillGroupWithBlank={true}
                navigation={{
                  prevEl: '#prev_slide',
                  nextEl: "#next_slide",
                }}
                autoplay={{
                  delay: 3500,
                  // disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}

                className="mySwiper rounded-3xl h-[450px] xs:h-[441px] sm:h-[500px] md:h-[450px]">

                {/* 1 */}
                <SwiperSlide className='rounded-3xl    '>

                  <div className="bg-pink-back mx-8 md:mx-0 p-3  md:p-1 md:pb-3 mt-5 rounded-xl lg:w-full">
                    <Image width={500} height={350} alt="Web Design Course" src='/latestc1.png' />
                    <div className="px-2">

                      <div className="py-2 px-4 text-pink-dark mt-3 bg-pink-main md:text-xs w-fit rounded-xl font-semibold">Web Design</div>
                      <h1 className="mt-3 text-blue-dark font-semibold md:text-lg ">The Complete Web Design Course</h1>

                      <div className="flex flex-row mt-3 justify-between">
                        <div className="flex flex-row md:text-sm items-center text-blue-dark mt-1"> <UserIcon className="w-7 text-pink-dark bg-pink-main" /> <span>500k+</span></div>
                        <div className="flex items-center space md:text-sm"><p className="mr-3">$105.00</p> <img src='/latestprofile.png' /></div>
                      </div>
                    </div>

                  </div>
                </SwiperSlide>

                <SwiperSlide className='rounded-3xl    '>

                  <div className="bg-pink-back mx-8 md:mx-0 p-3  md:p-1 md:pb-3 mt-5 rounded-xl lg:w-full">
                    <Image width={500} height={350} alt="Web Design Course" src='/latestc1.png' />
                    <div className="px-2">

                      <div className="py-2 px-4 text-pink-dark mt-3 bg-pink-main md:text-xs w-fit rounded-xl font-semibold">Web Design</div>
                      <h1 className="mt-3 text-blue-dark font-semibold md:text-lg ">The Complete Web Design Course</h1>

                      <div className="flex flex-row mt-3 justify-between">
                        <div className="flex flex-row md:text-sm items-center text-blue-dark mt-1"> <UserIcon className="w-7 text-pink-dark bg-pink-main" /> <span>500k+</span></div>
                        <div className="flex items-center space md:text-sm"><p className="mr-3">$105.00</p> <img src='/latestprofile.png' /></div>
                      </div>
                    </div>

                  </div>
                </SwiperSlide>

                <SwiperSlide className='rounded-3xl    '>

                  <div className="bg-pink-back mx-8 md:mx-0 p-3  md:p-1 md:pb-3 mt-5 rounded-xl lg:w-full">
                    <Image width={500} height={350} alt="Web Design Course" src='/latestc1.png' />
                    <div className="px-2">

                      <div className="py-2 px-4 text-pink-dark mt-3 bg-pink-main md:text-xs w-fit rounded-xl font-semibold">Web Design</div>
                      <h1 className="mt-3 text-blue-dark font-semibold md:text-lg ">The Complete Web Design Course</h1>

                      <div className="flex flex-row mt-3 justify-between">
                        <div className="flex flex-row md:text-sm items-center text-blue-dark mt-1"> <UserIcon className="w-7 text-pink-dark bg-pink-main" /> <span>500k+</span></div>
                        <div className="flex items-center space md:text-sm"><p className="mr-3">$105.00</p> <img src='/latestprofile.png' /></div>
                      </div>
                    </div>

                  </div>
                </SwiperSlide>

              </Swiper>


              {/* BUTTONS TO CONTROL THE SLIDER */}
              <div className="buttons flex w-full justify-center md:mt-0  mt-0 space-x-5">

                <div className='lg:flex flex-col justify-center   '>
                  <div id='prev_slide'
                    className='flex flex-col justify-center cursor-pointer w-16 h-16 rounded-full shadow-2xl bg-pink-main active:bg-pink-dark mb-1 md:mb-16'>
                    <AiOutlineArrowLeft className='mx-auto text-3xl' />
                  </div>
                </div>

                <div className='lg:flex   flex-col justify-center ml-2  '>
                  <div className='flex flex-col justify-center mb-1 md:mb-16 cursor-pointer w-16 h-16 rounded-full shadow-2xl  bg-pink-main active:bg-pink-dark' id='next_slide'  ><AiOutlineArrowRight className='mx-auto text-3xl' /></div>
                </div>

              </div>

            </div>

            {/* <div className='lg:flex   flex-col justify-center ml-2 hidden '>
              <div className='flex flex-col justify-center mb-16 cursor-pointer w-16 h-16 rounded-full shadow-2xl  bg-pink-main active:bg-pink-dark' id='next_slide'  ><AiOutlineArrowRight className='mx-auto text-3xl' /></div>
            </div> */}

          </div>

        </section>

        <section id="learning-center" className="container mx-auto">


          <div class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-2 md:flex-row flex-col items-center">

              <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-10 md:mb-20 items-center text-center lg:w-8/12">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome to
                  e-Learning Centre

                </h1>
                <p class="mb-8 leading-relaxed">Here we guide you to the best online courses, e-learning advice, and technology and resources for education and training. </p>

                <div className="safe&expert mx-5 space-y-5 ">

                  <div className="flex flex-row space-x-6 ">
                    <div ><img className="mt-1" src="/Icons/secure1.png" alt="iconimage1" /></div>
                    <div className="text-left">
                      <h1 className="font-bold">Safe & Secured</h1>
                      <p>Safe and Secured our services and every step of process.</p>
                    </div>
                  </div>

                  <div className="flex flex-row space-x-6">
                    <div><img className="mt-1" src="/Icons/secure2.png" alt="iconimage1" /></div>
                    <div className="text-left">
                      <h1 className="font-bold">Highly Expert Instructors</h1>
                      <p>There are coffee shops, sports, restaurants and a multitude of great study.</p>
                    </div>
                  </div>

                </div>
              </div>

              <div class="lg:max-w-lg md:w-1/2 w-5/6 lg:w-8/12">
                <img class="object-cover object-center rounded" alt="hero" src="/centerimage.png" />
              </div>
            </div>
          </div>


        </section>

        <section id="Trusted-students" class="text-gray-600 mt-16 body-font container mx-auto">
          <div class="container mx-auto flex px-5  md:flex-row flex-col ">

            <div class="
            flex flex-col  text-center mb-16 

            md:w-7/12 
            md:pr-16 
            md:items-start 
            md:text-left 
            md:mb-0 

            lg:flex-grow 
            lg:pr-24 
            lg:w-8/12

            ">


              <div class=" body-font text-black w-full">
                <div class="container   px-5   ">
                  <div class="  text-center">
                    <h1 className="text-5xl font-bold ">
                      Our Trusted Students
                    </h1>
                    <p className="text-left my-6">Take high quality online courses from the best online instrictors
                      around the world & develop your skills.</p>

                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg> */}
                    <div className="">



                      <Swiper

                        slidesPerView={1}
                        spaceBetween={10}
                        slidesPerGroup={1}
                        pagination={true}
                        loop={true}
                        touchEventsTarget='container'
                        grabCursor={true}
                        loopFillGroupWithBlank={true}
                        navigation={{
                          prevEl: '#prev_slide',
                          nextEl: "#next_slide",
                        }}
                        autoplay={{
                          delay: 3500,
                          // disableOnInteraction: false,
                          pauseOnMouseEnter: true,
                        }}
                        modules={[Autoplay, Pagination, Navigation]}

                        className="mySwiper rounded-3xl h-[300px]">

                        <SwiperSlide className='rounded-3xl    '>

                          <div className="testimonial">

                            <p class="leading-relaxed text-lg w-full   mx-auto italic">“Aenean vulputate massa consequat sapien imperdiet rhoncus. Ut at auctor purus, ac varius dolor. In aliquet erat eu est auctor porttitor.”</p>
                            <span class="inline-block h-1 w-10 rounded bg-black mt-8 mb-6"></span>
                            <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">Larry Diamond</h2>
                            <p class="text-gray-500">Chief Executive Officer, Besnik</p>
                          </div>
                        </SwiperSlide>

                        <SwiperSlide className='rounded-3xl    '>

                          <div className="testimonial">

                            <p class="leading-relaxed text-lg w-full   mx-auto">“Aenean vulputate massa consequat sapien imperdiet rhoncus. Ut at auctor purus, ac varius dolor. In aliquet erat eu est auctor porttitor.”</p>
                            <span class="inline-block h-1 w-10 rounded bg-black mt-8 mb-6"></span>
                            <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">Larry Diamond</h2>
                            <p class="text-gray-500">Chief Executive Officer, Besnik</p>
                          </div>
                        </SwiperSlide>




                      </Swiper>

                      <div className="buttons flex w-full justify-center md:mt-0 mt-0 space-x-5">

                        <div className='lg:flex flex-col justify-center   '>
                          <div id='prev_slide'
                            className='flex flex-col justify-center cursor-pointer w-16 h-16 rounded-full shadow-2xl bg-pink-main active:bg-pink-dark mb-1 md:mb-16'>
                            <AiOutlineArrowLeft className='mx-auto text-3xl' />
                          </div>
                        </div>

                        <div className='lg:flex flex-col justify-center ml-2  '>
                          <div className='flex flex-col justify-center mb-1 md:mb-16 cursor-pointer w-16 h-16 rounded-full shadow-2xl  bg-pink-main active:bg-pink-dark' id='next_slide'  ><AiOutlineArrowRight className='mx-auto text-3xl' /></div>
                        </div>

                      </div>



                    </div>
                    {/* <div className="testimonial">

                      <p class="leading-relaxed text-lg w-full md:w-1/2 mx-auto">“Aenean vulputate massa consequat sapien imperdiet rhoncus. Ut at auctor purus, ac varius dolor. In aliquet erat eu est auctor porttitor.”</p>
                      <span class="inline-block h-1 w-10 rounded bg-black mt-8 mb-6"></span>
                      <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">Larry Diamond</h2>
                      <p class="text-gray-500">Chief Executive Officer, Besnik</p>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            <div class=" lg:w-5/12   w-5/6 mx-auto md:w-5/12 ">
              <img class="object-cover object-center rounded" alt="hero" src="/trusted.png" />
            </div>

          </div>
        </section>

        <section id="Newletter" className="md:pt-5 pt-16 container mx-auto">
          <div className="flex flex-col items-center">
            <h1 className="text-5xl font-bold ">Newsletter</h1>
            <p className="my-5">Take high quality online courses from the best .</p>

            <div className="border-2 w-fit px-2 rounded-full border-pink-main flex ">
              <input className="py-3 focus:outline-none px-3 bg-transparent" type="text" placeholder="Your email address" />
              <button className=""> <img className="bg-pink-button w-10 px-3 h-10 rounded-full" src="/Icons/Vector.svg" alt="" /></button>
            </div>

          </div>

        </section>

        <section id="Footer-nav" className="text-sm my-16 md:my-0 mb-0 md:mb-5 container mx-auto">
          <header class="text-gray-600 body-font ">

            <div class="container mx-auto flex flex-wrap p-5 space-y-5 flex-col md:flex-row">

              <a class="flex title-font font-medium  items-center text-gray-900 mb-4 md:mb-0 justify-center">
                <img src="/Vector.png" alt="" />
              </a>

              <nav class="md:mx-auto flex flex-wrap text-base justify-center ">
                <div className="flex ">
                  <a class="mr-5 hover:text-gray-900 flex">Teacher
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-1 pt-1">
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
                <a class="mr-5 hover:text-gray-900">Courses</a>
                <a class="mr-5 hover:text-gray-900">Scholarships</a>
                <a class="mr-5 hover:text-gray-900">Pricing</a>
              </nav>

              <div className="items-center mt-5 md:mt-2 flex justify-center flex-col ">
                <h2 className="text-xl font-bold">Stay up to date</h2>
                <p className="mt-5">Style Informed on How You <br /> Can Make a Difference </p>
              </div>


            </div>
          </header>

        </section>

      </div>

      <section id="footer" className="bg-pink-back">
        <footer class="text-gray-600 body-font">
          <div class="container px-5 py-2 mx-auto flex justify-center sm:flex-row flex-col">

            <p class="text-sm md:pt-4 text-center md:text-left w-full md:w-2/3 text-gray-500 sm:ml-4  sm:pl-4 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
              ©Copyright©uihut 2021. All rights reserved
            </p>

            <span class="inline-flex w-full sm:w-1/3  sm:mt-0 mt-4 justify-center sm:justify-start">
              <div className="w-full text-center md:ml-auto">
                <h2 className="tracking-widest">Contact</h2>
                <h3 className="font-bold ">muhammadahmadrcs@gmail.com</h3>
              </div>
            </span>
          </div>
        </footer>
      </section>

    </>
  )
}