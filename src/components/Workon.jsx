import React, { useRef } from 'react'

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { motion } from 'framer-motion';


function Workon() {
  motion

  const ref = useRef(null)

  return (
    <>
    <div name="WorkOn" ref={ref}
    className='max-w-screen-2xl mx-auto container px-4 md:px-20 my-20 '>
    <h1 className='text-2xl font-semibold text-gray-700 text-center mb-10'>Currently Working On</h1>
            <div className='flex flex-col gap-5  md:flex md:flex-row md:space-x-20 justify-center align-middle items-center cursor-pointer'>
            <motion.span drag dragConstraints={ref} dragTransition={{bounceStiffness:400, bounceDamping:30}}><SiMongodb className='text-8xl hover:scale-125 duration-200' /></motion.span>
            <motion.span drag dragConstraints={ref} dragTransition={{bounceStiffness:400, bounceDamping:30}}><SiExpress className='text-8xl hover:scale-125 duration-200' /></motion.span>
            <motion.span drag dragConstraints={ref} dragTransition={{bounceStiffness:400, bounceDamping:30}}><FaReact className='text-8xl hover:scale-125 duration-200' /></motion.span>
            <motion.span drag dragConstraints={ref} dragTransition={{bounceStiffness:400, bounceDamping:30}}><FaNodeJs className='text-8xl hover:scale-125 duration-200' /></motion.span>
            </div>
    </div>
    <hr />
    </>
  )
}

export default Workon