import axios from 'axios'
import { motion } from 'framer-motion'
import React from 'react'
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast'

function Contact() {
  const slideVariant = {
    initial:{
        x:-100,
        opacity:0
    },
    animate:{
        x:0,
        opacity:1,
        transition:{duration:1},
    }
}
  motion
// ye do line form ki field required honi chahiye isliye likhin hen
    const { register, handleSubmit,watch,formState:{errors} } = useForm()

    const onSubmit = async(data) => {
      const userInfo = {
        name:data.name,
        email:data.email,
        message:data.message,
      }
      try {
       await axios.post("https://getform.io/f/bjjedpkb",userInfo)
       toast.success("Yahoo! message has been sent");
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
      }
    }
  
  return (
    <>
    <div name="Contact"
     className='max-w-screen-2xl mx-auto container px-4 md:px-20 my-16'>
        <h1 className='text-3xl font-bold mb-4'>Contact Me</h1>
        <span>Please fill out the form below to contact me</span>
        <motion.div 
        variants={slideVariant} 
        initial="initial" 
        whileInView="animate" 
        className='flex flex-col justify-center items-center mt-5 md:justify-around md:flex md:flex-row'>

  
                        <div className='mb-8'>

                          <div className="mb-2">
                            <h1 className='text-2xl font-semibold'>📞 Calling... </h1>
                            <h4>+91 9174746169</h4>
                          </div>
                          <div className="mb-2">
                            <h1 className='text-2xl font-semibold'>📩 Email</h1>
                            <h3>abhishek123gour@email.com</h3>
                          </div>
                          <div className="mb-2">
                            <h1 className='text-2xl font-semibold'>🏠 Address</h1>
                            <h3>Bhopal Madhya Pradesh</h3>
                          </div>

                        </div>
            <form 
            onSubmit={handleSubmit(onSubmit)}
            // action="https://getform.io/f/avrezdna" 
            // method="POST"
             className='bg-slate-200 w-96 px-6 py-4 rounded-xl'>
                <h1 className='mb-4 text-xl font-semibold '>Send your message!!!</h1>
                <div className='flex flex-col mb-2'>
                    <label className='text-gray-500' htmlFor="">Name:</label>
                    <input
                    {...register("name", { required: true })}
                    className='rounded appearance-none'
                     type="text" 
                     placeholder='Enter name' 
                     name='name'
                    />
                    {errors.name && <span>This field is required</span>}
                </div>

                <div className='flex flex-col mb-2'>
                    <label className='text-gray-500' htmlFor="">Email:</label>
                    <input
                    {...register("email", { required: true })}
                     className='rounded appearance-none'
                      type="email" 
                      placeholder='Enter email'
                      name='email' 
                      />
                      {errors.email && <span>This field is required</span>}
                </div>

                <div className='flex flex-col mb-2'>
                    <label className='text-gray-500' htmlFor="">Message:</label>
                    <textarea
                    rows={5}
                    cols={5}
                    {...register("message", { required: true })}
                     className='rounded appearance-none'
                      type="text" 
                      placeholder='Enter Query'
                      name='message' 
                      />
                      {errors.message && <span>This field is required</span>}
                </div>
                <button type='submit'
                 className='bg-slate-700 text-white hover:bg-black px-4 py-1 rounded-xl mt-2'>Send</button>
            </form>
    </motion.div>
        </div>
    </>
  )
}

export default Contact