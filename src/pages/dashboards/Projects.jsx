import { useState, useEffect } from 'react'
import { getProjects } from '../../firebaseConf.js'
export default function ProjectsDashboard(){

    const [ projects, setProjects ] = useState([])
    useEffect( () => {
        async function fetchData(){
            const data = await getProjects()
            setProjects(data)
        }
        fetchData()
    })
    const projectRows = projects?.map( (project) => {
        return (
            <tr className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{project.title}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.description}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{project.status}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:underline">
                <a href={project.link} target="_blank">Visit</a>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <img src={project.image} alt="Project" className="h-10 w-10 rounded-full" />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <a href="#" className="text-indigo-600 hover:text-indigo-900 mr-4">Edit</a>
                <a href="#" className="text-red-600 hover:text-red-900">Delete</a>
              </td>
            </tr>
        )
    } )
    return(
        <>
        <h1 className="text-left text-3xl pb-10 font-semibold">Projects Dashboard</h1>
        <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 sticky top-0 z-10">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Link</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {projectRows}
          </tbody>
        </table>
        </div>
        </>
    )

}

