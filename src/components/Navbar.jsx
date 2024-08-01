import React, { useState } from 'react'
import pic from '../../public/hacker.avif'
import { Link } from 'react-scroll'

function Navbar() {
    const [menu, setmenu] = useState(false)
    const navItem = [
        {
            id:1,
            text: 'Home'
        },
        {
            id:2,
            text: 'About'
        },
        {
            id:3,
            text: 'Portfolio'
        },
        {
            id:4,
            text: 'WorkOn'
        },
        {
            id:5,
            text: 'Contact'
        }
    ]
  return (  
    <>
    <div className='nav max-w-screen-2xl mx-auto container px-4 md:px-20 shadow-md h-16   fixed top-0 right-0 left-0 z-50  bg-white'>
        <div className='flex justify-between items-center h-16'>

            <div className='flex space-x-2 '>
                <img src={pic} className='h-12 w-12 rounded-full' alt="" />
                <h1 className='font-semibold text-xl cursor-pointer'>Abhishe<span className='text-gray-600 text-2xl'>k</span>
                <p className='text-sm'>Web Developer</p>
                </h1>
            </div>

            {/* desktop navbar */}
            <div>
                <ul className='hidden md:flex space-x-8'>
                    {
                        navItem.map((elem,i)=>{
                           return(
                            <li className='hover:scale-105 duration-200 cursor-pointer' key={i}>

                                <Link to={elem.text}
                                smooth={true}
                                duration={500}
                                activeClass='active'>
                                    {elem.text}
                                </Link>
                            </li>
                           ) 
                        })
                    }
                </ul>
                <div onClick={()=>setmenu(!menu)} className='text-2xl cursor-pointer md:hidden'>
                    {
                    menu?<span className='text-4xl'>&times;</span> :<span>&#9776;</span>
                    }
                </div>
            </div>
        </div>

        {/* mobile navbar */}
           {menu && (
            <div className='bg-white text-black'>
            <ul className='md:hidden flex flex-col h-screen justify-center items-center space-y-2 text-2xl'> {/*md: mtlb bada device:-ye bade device pe hidden rahega */}
                    {
                        navItem.map((elem,i)=>{
                           return(
                            <li className='hover:scale-105 duration-200 cursor-pointer' key={i}>
                                <Link onClick={()=>setmenu(!menu)}
                                to={elem.text}
                                smooth={true}
                                duration={500}
                                activeClass='active'>
                                    {elem.text}
                                </Link>
                            </li>
                           ) 
                        })
                    }
             </ul>
           </div>
           )}   
    </div>
    </>
  )
}

export default Navbar