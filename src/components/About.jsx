import React from 'react'

function About() {
    const data =[
        {
            deadline:"Education & Training",
            para:"A comprehensive blend of web development education and hands-on training, encompassing key technologies such as HTML, CSS, JavaScript, and the MERN stack, alongside practical experience in real-world projects and internships."
        },
        {
            deadline:"Skill & Expertise",
            para:"Proficient in web development with expertise in HTML, CSS, JavaScript, and the MERN stack. Experienced in creating dynamic, user-friendly interfaces and completing projects like a Doctor management system and Swiggy UI."
        },
        {
            deadline:"Professional Experience",
            para:"Completed a virtual internship at CodSoft, focusing on web development with html, css, and JavaScript. Developed a Work Studio project using ReactJS and created a Pinterest clone using the MERN stack."
        },
        {
            deadline:"Achivements & Rewards",
            para:"Achieved HackerRank certification in Java, CodeChef certification in JavaScript, and CodSoft virtual internship certification. Additionally, earned a C++ certification from SkillUp and numerous other certificates in various programming languages and technologies."
        },
        {
            deadline:"Misson Statement",
            para:"To master Java programming and develop strong data structures and algorithms skills, aiming to build efficient, scalable, and high-performance solutions for complex problems."
        }, 
    ]

  return (
    <>
    <div name="About" 
    className='max-w-screen-2xl mx-auto container px-4 md:px-20 my-20'>
        <h1 className='text-2xl mb-5'>About</h1>
        <p>Aspiring Full Stack development with MERN technologies(MongoDB,Express.js,React.js,Node.js). Experienced in creating dynamic web applications, including a Pinterest clone and Swiggy UI, with a strong foundation in DSA.</p>
    
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