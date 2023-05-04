import { UserIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import React, { useState } from 'react'
import _ from "lodash";



const Courses = () => {

  const [iteration, setiteration] = useState(5)


  return (
    <div className='pt-24 w-full mx-auto' >

      <div className='searchmodule flex justify-center'>

        <form>
          <div className='flex mt-5'>

            <div className='flex border border-2 px-4 py-1 rounded-lg bg-[#F2F4F8]'>
              <img className='w-4 h-4 self-center mr-4' src="/icons/search.png" alt="" />
              <input className='w-96 outline-none bg-[#F2F4F8]' type="text" placeholder='Search for Courses' />
            </div>

            <button type='submit' className='px-5 py-3 bg-[#F05C75] rounded-xl text-white ml-2'>Search</button>
          </div>

        </form>

      </div>




      <div className='w-10/12  lg:block mx-auto mt-20 '>

        <div className='flex flex-wrap space-x-5 justify-center'>



          {_.times(10, (i) => (

            <div key={i} className='rounded-3xl h-[450px] xs:h-[441px] sm:h-[500px] md:h-[450px] w-[250px] xs:w-[341px] sm:w-[300px] md:w-[350px]'>
              <div className="bg-pink-back mx-8 md:mx-0 p-3  md:p-1 md:pb-5 mt-5 rounded-xl lg:w-full">
                <Image width={400} height={270} alt="Web Design Course" src='/latestc1.png' />

                <div className="px-3">

                  <div className="py-2 px-4 text-pink-dark mt-3 bg-pink-main md:text-xs w-fit rounded-xl font-semibold">Web Design</div>
                  <h1 className="mt-3 text-blue-dark font-semibold md:text-lg ">The Complete Web Design Course</h1>

                  <div className="flex flex-row mt-3 justify-between">
                    <div className="flex flex-row md:text-sm items-center text-blue-dark mt-1">
                      <UserIcon className="w-7 text-pink-dark bg-pink-main" /> <span className='ml-1'> 500k+</span></div>
                    <div className="flex items-center space md:text-sm"><p className="mr-3">$105.00</p> <img src='/latestprofile.png' /></div>
                  </div>
                </div>

              </div>
            </div>


          ))}


          




        </div>

      </div>

    </div>
  )
}

export default Courses