import { Link } from 'react-router-dom'
import projectsList from '../assets/projectsList.js'
export default function Project(){
    const projectsCards = projectsList.map(project => {
        return (

            <Link to={`projects/${project.id}`} key={project.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg" src={project.image} alt="" />
                <div className="p-5">

                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.name}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.description}</p>
                    <p className="mb-3 font-light text-gray-700 dark:text-gray-400">Status: {project.status}</p>
                    <div className="flex justify-between">

                    <p className="rounded p-2 uppercase bg-white-600 text-indigo-900">#{project.type}</p>
                    </div>
                </div>
            </Link>

        )

    })
    return (
        <div className="filter drop-shadow-lg">
            <h1 className="text-red-500 text-4xl font-black ms-36 mb-10">Projects</h1>
            <div className="flex flex-wrap justify-center gap-16 p-4 sm:p-8">{projectsCards}</div>
        </div>
    )
}