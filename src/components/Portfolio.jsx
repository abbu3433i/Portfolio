import React from 'react'
import mongo from '../../public/mongodb.png'
import exp from '../../public/express.jpeg'
import react from '../../public/react.jpeg'
import node from '../../public/nodejs.png'
import java from '../../public/java.png'
import js from '../../public/js.png'

function Portfolio() {
    const cardItem = [
        {
            logo:mongo,
            name:"MongoDB",
            para:"Efficient data management with MongoDB."
        },
        {
            logo:exp,
            name:"Express",
            para:"Seamless server-client integration using Express."
        },
        {
            logo:react,
            name:"ReactJs",
            para:"Dynamic web applications with ReactJS."
        },
        {
            logo:node,
            name:"Node.js",
            para:"Robust backend development using Node.js."
        },
        {
            logo:java,
            name:"Java",
            para:"Efficient algorithms and data structures development."
        },
        {
            logo:js,
            name:"JavaScript",
            para:"Interactive and Dynamic interfaces with JavaScript."
        },
    ]
  return (
    <>
    <div name="Portfolio" 
    className='max-w-screen-2xl mx-auto container px-4 md:px-20 mt-5'>
        <div>
            <h1 className='text-2xl mb-5'>Portfolio</h1>
            <span className='underline'>Featured Project</span>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-7 my-3'>
                {
                    cardItem.map((elem,i)=>{
                        return (
                            <>
                            <div key={i} className='md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-105 duration-300'>
                                <img src={elem.logo} className='w-[120px] h-[120px] rounded-full border-[2px] p-1' alt="" />
                                <div>
                                    <h1 className='text-xl font-semibold px-2 mb-2'>{elem.name}</h1>
                                    <p className='text-gray-700 px-2'>{elem.para}</p>
                                </div>
                                <div className=' justify-around px-6 py-4 space-x-2'>
                                    <button className='bg-blue-500 hover:bg-blue-700  text-white px-4 py-2 rounded font-semibold'>Video</button>
                                    <button className='bg-green-500 hover:bg-green-700  text-white px-4 py-2 rounded font-semibold'>Source code</button>
                                </div>
                            </div>
                            </>
                        )
                    })
                }
            </div>

        </div>
    </div>
    </>
  )
}

export default Portfolio