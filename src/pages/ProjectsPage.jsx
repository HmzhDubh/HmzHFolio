import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Project(){

    const [projects, setProjects] = useState([])

    useEffect( ()  => {
        fetch('/database/projects')
            .then( res => res.json() )
            .then( data => setProjects(data.projects) )


    }, [])

    const projectsCards = projects.map(project => {
        return (

            <div key={project.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">

                    <img className="rounded-t-lg" src={project.image} alt="" />

                <div className="p-5">

                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.name}</h5>

                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.description}</p>
                    <p className="mb-3 font-light text-gray-700 dark:text-gray-400">Status: {project.status}</p>
                    <div className="flex justify-between">
                    <Link to={project.id} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-lg bg-red-600 text-indigo-200 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        View Details
                         <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </Link>
                    <p className="rounded p-2 uppercase bg-white-600 text-indigo-900">#{project.type}</p>
                    </div>
                </div>
            </div>

        )

    })
    return (
        <div className="filter drop-shadow-lg mt-32 text-center">
            <h1 className="text-red-500 text-6xl font-black mb-10">Projects</h1>
            <div className="flex flex-wrap justify-center gap-16 p-4 sm:p-8">{projectsCards}</div>
        </div>
    )
}