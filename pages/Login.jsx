import React from 'react'

function Login() {
  return (
    <div className='flex justify-center  items-center h-screen  '>

      <div className=' flex flex-col-reverse md:flex-row'>


        <div className='flex flex-col justify-center items-center bg-[#EBFCF4] rounded-xl'>
          <div className='flex gap-x-12 mt-12'>
            <a href="">About</a>
            <a href="">Contact Us</a>
          </div>
          <img src="/login.png" alt="" />
        </div>




        <div className='flex flex-col justify-start  gap-y-8 p-12'>
          <div className='flex justify-start items-center gap-x-4'>
            <img src="/Vector.png" alt="" />
            <p>E-Learning</p>
          </div>

          <div>
            <p className='font-semibold opacity-80'>Login to start Learning</p>
          </div>

          <form className='flex flex-col justify-center items-center gap-y-3' >
            <input class=" appearance-none border-2 border-gray-200 rounded w-full py-2 px-12 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-password" type="email" placeholder="Email" />
            <input class=" appearance-none border-2 border-gray-200 rounded w-full py-2 px-12 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" id="inline-password" type="password" placeholder="Password" />
          </form>
          <div className='flex justify-start items-center gap-x-2'>
            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <p className='opacity-60'>I agree with terms and policies</p>

          </div>
          <button type="button" class="text-white bg-blue-300 hover:bg-blue-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-400 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Rigister</button>

          <div className='opacity-60'>
            <p>Have not an account   <span className='text-blue-400 underline'>   Login</span></p>
          </div>

        </div>




      </div>

    </div>
  )
}

export default Login