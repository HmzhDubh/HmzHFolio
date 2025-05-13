import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProject } from '../firebaseConf.js'

export default function ProjectDetailsPage(){
    const params = useParams()
    const [project, setProject] = useState({})

    useEffect( () => {
        async function fetchProject(){
            const project = await getProject(params.id)
            console.log(project)
            setProject(project)
        }
        fetchProject()
    }, [] )

    return(

        <div>

            <div className="flex justify-evenly p-10 m-20">

                <img className="w-80" src={project.image}></img>
                <div>
                    <h1 className="text-4xl"> {project.title} </h1>
                    <h1> {project.description} </h1>
                    <h1> {project.status} </h1>
                    <h1> {project.type} </h1>
                    <a href={project.link}> Visit </a>
                </div>
            </div>

        </div>

    )
}