import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'



function Navbar() {
 

  const [navtheme, setNavtheme] = useState(true)

  const changetheme = () => {
    if (window.scrollY === 0) {
      setNavtheme(true)
      // document.getElementById('Navul').classList.remove('text-black')

    } else {
      setNavtheme(false)
      // document.getElementById('Navul').classList.add('text-black')
    }

  }

  useEffect(() => {
    window.addEventListener("scroll", changetheme)
  })

  // console.log(document.getElementById('navcheckbox'));


  // const hamclick = (e) => {
  //   e.target.classList.toggle('is-active')

  // }


  const uncheck = () => {
    document.getElementById("navcheckbox").checked = false
  }


  return (
    <>
      <div className='w-full  mx-auto'>

        <div className={`flex fixed 
          
        !w-[98vw]
        
        py-2 
        justify-between  
        duration-300 z-50 

${!navtheme && ' bg-pink-back shadow-lg'}
 
 `}>

          <div className='h-16 ml-6 mt-2 lg:mt-3 w-48 lg:w-52 lg:h-12 flex flex-col justify-center'>
            <Link href="/" passHref>
              <a >

                <Image priority={true} width={50} height={55} className='cursor-pointer' src={'/Vector.png'} alt="frontimage" />

              </a>
            </Link>
          </div>

          <ul id='Navul' className='

    items-center hidden ml-auto  text-black 

    md:static md:flex md:space-x-5 md:tracking-tight md:font-normal md:bg-transparent md:text-sm 
   
    lg:space-x-8 lg:text-base lg:tracking-normal

    whitespace-nowrap 

    xl:space-x-9 xl:text-lg xl:tracking-wide 
    
    '>
            <Link href='/'><a className='align-center items-center duration-300 !text-[#FD6060] hover:text-[#FD6060]hover-underline-animation'>Become a Teacher</a></Link>
            <Link href='/#aboutus'><a className='align-center items-center duration-300 text-black hover:text-[#FD6060] hover-underline-animation'>Courses</a></Link>
            <Link href='/#services'><a className='align-center items-center duration-300 text-black hover:text-[#FD6060] hover-underline-animation'>Free Courses</a></Link>
            <Link href='/#features'><a className='align-center items-center duration-300 text-black hover:text-[#FD6060] hover-underline-animation'>Paid Courses</a></Link>
            
            


            <div className='md:self-center '>
              

                <button className='  
          px-4 py-2 text-black duration-300 border-2 border-black
          hover:bg-black hover:text-white 
          
          md:align-middle md:rounded-3xl
          
          '>   Ahmad
                </button>
              



            </div>
          </ul>

          {/* MOBILE VIEW */}
          <label className='Navdrop md:hidden z-50 '>
            <input id='navcheckbox' type="checkbox" />
            <span className="menu">
              <span className="hamburger">
              </span>
            </span>
            <ul className='relative z-30 invisible pt-32 -ml-3' >
              <li onClick={uncheck}><Link href='/'>Become A Teacher</Link></li>
              <li onClick={uncheck}><a href='#aboutus'>Courses</a></li>
              <li onClick={uncheck}><a href='#services'>Free Courses</a></li>
              <li onClick={uncheck}><a href='#features'>Paid Courses</a></li>
               


              
            </ul>
          </label>




        </div>


      </div>
    </>
  )
}

export default Navbar