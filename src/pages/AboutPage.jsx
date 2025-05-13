import { useState, useEffect } from 'react'
import { getExperience, getTechStack } from '../firebaseConf.js'

export default function AboutPage(){

    const [ experience, setExperience ] = useState([])
    const [ techStack, setTechStack ] = useState([])

    useEffect( () => {
        async function fetchData() {
            const data = await getExperience()
            setExperience(data)
        }
        fetchData()
    }, []);

    useEffect( () => {
        async function fetchData() {
            const data = await getTechStack()
            setTechStack(data)
        }
        fetchData()
    }, []);

    const experienceListItems = experience.map( item => {
        return(
            <li key={item.id} >{item.domain} {item.progress}%</li>

        )
    })
    const techStackItems = techStack.map( (item) => {
        return(
            <li key={item.id} style={{ color: item.colorCode }} className={`rounded-3xl p-2 items-center`}>{item.tool}</li>
        )
    })
    return(
        <div className="p-32">
            <div className="flex flex-col gap-16 items-center">
                <h1 className="text-8xl font-extrabold text-center text-indigo-800">I'm Hmzh.</h1>
                <a className="bg-indigo-800 rounded-2xl p-3 text-red-600" href="../assets/cv.pdf" download> Download My Resume</a>

                <div className='flex gap-40 text-3xl font-semibold text-indigo-800'>
                    <a href="#about_me">About Me</a>
                    <a href="#skills">Skills</a>
                    <a href="#tech_stack">Technical Stack</a>
                    <a href="#contacts">Contacts</a>

                </div>
            </div>
            <div id="about_me" className="mt-20">

                <h1 className='text-7xl font-extrabold text-indigo-800'>About Me</h1>
                <hr className="bg-indigo-900 w-80 h-1"></hr>
                <p className="text-2xl font-semibold mt-10 text-red-600">My name is Hamzh Dabbah, graduated from king abdulaziz university, Faculty of Computing and Information Technology, majored in Information Technology, specialized Software Engineering, I'm Skilled in Java and python, in addition to SQL DB and web design. I am interested in photography, and using Editing tools such as Lightroom and Photoshop. I have been working on several projects and applications, I participated in developing "BreachyApp" and "EcoPlate" Applications. To contact me for any purpose, my contact information are below. THANK YOU !.</p>

                <div id="skills" className="flex flex-col mt-20 items-center gap-16">
                    <div className='flex flex-col items-center'>
                        <h1 className='text-5xl font-extrabold text-indigo-800'>Experience</h1>
                        <hr className="bg-indigo-900 w-80 h-1"></hr>
                    </div>
                    <ul className="flex justify-start items-center gap-8 text-xl text-center font-bold text-red-600">
                        {experienceListItems}

                    </ul>

                </div>
            </div>
            <div id="tech_stack" className="flex flex-col mt-20 items-center gap-16">
                <div className='flex flex-col items-center'>
                    <h1 className='text-5xl font-extrabold text-indigo-800'>Tech-Stack</h1>
                    <hr className="bg-indigo-900 w-80 h-1"></hr>
                </div>
                    <ul className="flex gap-6 text-lg font-semibold text-red-600">
                        {techStackItems}
                    </ul>
                </div>
        </div>
    )
}