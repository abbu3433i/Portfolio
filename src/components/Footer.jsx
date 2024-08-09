import { motion } from 'framer-motion';
import React from 'react'
import { FaFacebook,FaTwitter,FaInstagram,FaLinkedinIn } from "react-icons/fa6";

function Footer() {
    const slidefoot = {
        initial:{
            y:100,
            opacity:0
        },
        animate:{
            y:0,
            opacity:1,
            transition:{duration:1},
        }
    }
    motion
  return (
    <>
    <hr />
    <footer>
        <motion.div
        variants={slidefoot} 
        initial="initial" 
        whileInView="animate" 
        className='max-w-screen-2xl mx-auto container px-4 md:px-20 my-20'>
            <div className='flex flex-col justify-center items-center'>
                <div className='flex space-x-4'>
                    <a href="https://www.facebook.com/login/" target='blank'>
                        <FaFacebook size={26}/>
                    </a>
                    <a href="https://x.com/?lang=en" target='blank'>
                        <FaTwitter size={26}/>             
                    </a>
                    <a href="https://www.instagram.com/" target='blank'>
                        <FaInstagram size={26}/>
                    </a>
                    <a href="https://www.linkedin.com/in/abhishek-gour-248703258/" target='blank'>
                        <FaLinkedinIn size={26}/>
                    </a>   
                </div>

                <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'> {/*border-t is responsible for create small horizontal line */}
                    <p className='text-sm'>&copy; 2024 Company. All right reserved.</p>
                    <p className='text-sm'>Supportive partner ❤️Gopal </p>
                </div>
            </div>
        </motion.div>
    </footer>
    </>
  )
}

export default Footer