import React from 'react'
import { FaFacebook,FaTwitter,FaInstagram,FaLinkedinIn } from "react-icons/fa6";

function Footer() {
  return (
    <>
    <hr />
    <footer>
        <div className='max-w-screen-2xl mx-auto container px-4 md:px-20 my-20'>
            <div className='flex flex-col justify-center items-center'>
                <div className='flex space-x-4'>
                    <FaFacebook size={26}/>
                    <FaTwitter size={26}/>
                    <FaInstagram size={26}/>
                    <FaLinkedinIn size={26}/>
                </div>
                <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'> {/*border-t is responsible for create small horizontal line */}
                    <p className='text-sm'>&copy; 2024 Company. All right reserved.</p>
                    <p className='text-sm'>Supportive partner ❤️Gopal </p>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer