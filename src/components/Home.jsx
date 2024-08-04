import React from 'react'

import pic from '../../public/abhishek.jpg'

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { FaTelegram } from "react-icons/fa";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

import { ReactTyped} from "react-typed";
import { motion } from 'framer-motion';

function Home() {
    motion
  return (
    <>
    <div name="Home" 
    className='max-w-screen-2xl mx-auto container px-4 md:px-20 my-20'>
        <div className='flex flex-col md:flex-row'>
            <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
            <span>Welcome In My Feed</span>
            <div className='flex space-x-1 text-2xl md:text-4xl'>
                <h1>Hello I am a</h1>
                {/* <span className='text-red-700'>Devloper</span> */}
                <ReactTyped className='text-red-700'
                strings={["Developer","Programmer","Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
                />
            </div>
            <br />
            <p className='text-justify'>Proficient in Java and the MERN stack (MongoDB, Express.js, React.js, Node.js), I specialize in
             developing dynamic web applications and robust backend systems. With a strong focus on
             performance, security, and scalability, I am dedicated to delivering high-quality software
             solutions that meet and exceed client expectations.</p>
            <br />

            {/* social media icons */}
            <div className='flex flex-col md:flex-row space-y-6 md:space-y-0 items-center justify-between'>
            <div className='space-y-2'>
            <h1>Available on</h1>
            <ul className='flex space-x-5'>
                <li>
                    <a href="https://www.linkedin.com/feed/" target='_blank'>
                        <FaLinkedin className='text-2xl cursor-pointer' />
                    </a> 
                </li>
                <li>
                   <a href="https://github.com/abbu3433i" target='_blank'>
                   <FaGithub className='text-2xl cursor-pointer' />
                    </a> 
                </li>
                <li>
                   <a href="https://leetcode.com/u/ABHI0660/" target='_blank'>
                   <SiLeetcode className='text-2xl cursor-pointer' />
                    </a>  
                </li>
                <li>
                   <a href="https://web.telegram.org/" target='_blank'>
                   <FaTelegram className='text-2xl cursor-pointer' />
                    </a>
                </li>
            </ul>
            </div>

            <div className='space-y-2'>
            <h1>M <span> E</span> R<span> N</span></h1>
            <div className='flex space-x-5'>
            <SiMongodb className='text-3xl hover:scale-125 duration-200' />
            <SiExpress className='text-3xl hover:scale-125 duration-200' />
            <FaReact className='text-3xl hover:scale-125 duration-200' />
            <FaNodeJs className='text-3xl hover:scale-125 duration-200' />
            </div>
            </div>


            </div>

            </div> {/* upar bale 1/2 ka div he */}

            <div className='md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1 flex justify-center align-middle items-center'>
            <motion.span initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
        duration: 1,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01] }}> 
        <img src={pic} className='rounded-full md:w-[400px] md:h-[450px]' alt="" /></motion.span>
            </div>
        </div>
    </div>
    <hr />
    </>
  )
}

export default Home