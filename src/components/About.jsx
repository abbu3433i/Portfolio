import React from 'react'

function About() {
    const data =[
        {
            deadline:"Education & Training",
            para:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, magnam asperiores at eligendi adipisci quos odit quia officiis accusamus quibusdam quasi obcaecati dolorem saepe architecto"
        },
        {
            deadline:"Skill & Expertise",
            para:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, magnam asperiores at eligendi adipisci quos odit quia officiis accusamus quibusdam quasi obcaecati dolorem saepe architecto"
        },
        {
            deadline:"Professional Experience",
            para:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, magnam asperiores at eligendi adipisci quos odit quia officiis accusamus quibusdam quasi obcaecati dolorem saepe architecto"
        },
        {
            deadline:"Achivements & Rewards",
            para:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, magnam asperiores at eligendi adipisci quos odit quia officiis accusamus quibusdam quasi obcaecati dolorem saepe architecto"
        },
        {
            deadline:"Misson Statement",
            para:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, magnam asperiores at eligendi adipisci quos odit quia officiis accusamus quibusdam quasi obcaecati dolorem saepe architecto"
        }, 
    ]

  return (
    <>
    <div name="About" 
    className='max-w-screen-2xl mx-auto container px-4 md:px-20 my-20'>
        <h1 className='text-2xl mb-5'>About</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, magnam asperiores at eligendi adipisci quos odit quia officiis accusamus quibusdam quasi obcaecati dolorem saepe architecto nulla dolores cumque temporibus non! Vero, numquam! Aliquam, molestias voluptatum!</p>
    
    <br />
    {
        data.map((elem,i)=>{
            return (
                <>
                <h1 key={i} className='text-green-600 font-semibold text-xl'>{elem.deadline}</h1>
                <span key={i}>{elem.para}</span>
                <br />
                <br />
                </>
            )
        })
    }

    </div>
    {/* <hr /> */}
    </>
  )
}

export default About