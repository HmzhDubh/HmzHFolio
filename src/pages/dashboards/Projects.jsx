import { useState, useEffect } from 'react'
import { getProjects, deleteProject } from '../../firebaseConf.js'
import AddProject from '../../components/dashboardComponents/AddProject.jsx'
export default function ProjectsDashboard(){

    const [ projects, setProjects ] = useState([])
    const [showModal, setShowModal] = useState(false);
    const [ deleteResponse , setDeleteResponse] = useState("")


    useEffect( () => {
        async function fetchData(){
            const data = await getProjects()
            setProjects(data)
        }
        fetchData()
    }, [])
    function handleDelete(projectId){

        const res = deleteProject(projectId)
        console.log(res)
        setDeleteResponse(res)
    }

    const projectRows = projects?.map( (project) => {
        return (
            <tr key={project.id} className="hover:bg-gray-50">
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
                <button onClick={() => handleDelete(project.id)} className="text-red-600 hover:text-red-900">Delete</button>
              </td>
            </tr>
        )
    } )

    return(
        <>
            {deleteResponse && <div className="text-center bg-yellow-300 p-2 m-2 rounded-lg">{deleteResponse}</div>}
             {showModal && (
                    <div
                      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full h-screen bg-black bg-opacity-50"
                      role="dialog"
                      aria-modal="true"
                    >
                      <div className="relative p-4 w-full max-w-2xl max-h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                          {/* Header */}
                          <div className="flex items-center justify-between p-4 md:p-5 border-b border-gray-200 dark:border-gray-600 rounded-t">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                              Terms of Service
                            </h3>
                            <button
                              onClick={() => setShowModal(false)}
                              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                              </svg>
                              <span className="sr-only">Close modal</span>
                            </button>
                          </div>

                          {/* Body */}
                            <AddProject />


                        </div>
                      </div>
                    </div>
                  )}

            <div className="flex justify-between items-start">
                <h1 className="text-left text-3xl pb-10 font-semibold">Projects Dashboard</h1>
                <button onClick={() => setShowModal(true)} className="bg-red-600 p-1 rounded-lg text-white">+ New Project</button>

            </div>
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

