import { useState, useEffect } from 'react'
import { getTechStack } from '../../firebaseConf.js'

export default function TechStackDashboard(){

    const [ techStack, setTechStack ] = useState([])
    useEffect(() => {
        async function fetchData(){
            const data = await getTechStack()
            setTechStack(data)
        }
    fetchData()
    },[])

    const techStackRows = techStack?.map((tool) => {
        return(
            <tr key={tool.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{tool.tool}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tool.colorCode}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <a href="#" className="text-indigo-600 hover:text-indigo-900 mr-4">Edit</a>
                    <a href="#" className="text-red-600 hover:text-red-900">Delete</a>
                </td>
            </tr>
        )
    })
    return(
        <>
            <h1 className="text-center text-2xl">TechStack Dashboard</h1>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50 sticky top-0 z-10">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tool</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Color</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {techStackRows}
                    </tbody>
                </table>
        </>
    )

}

