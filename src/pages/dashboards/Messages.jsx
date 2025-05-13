import { useState, useEffect } from 'react'
import { getMessages } from '../../firebaseConf.js'

export default function MessagesDashboard(){
    const [ messages, setMessages ] = useState([])
    useEffect(() => {
        async function fetchData(){
            const data = await getMessages()
            setMessages(data)
        }
        fetchData()
    }, [])
    const messagesRows = messages?.map( msg => {
        return(
            <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{msg.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{msg.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{msg.message}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <a href="#" className="text-indigo-600 hover:text-indigo-900 mr-4">Edit</a>
                <a href="#" className="text-red-600 hover:text-red-900">Delete</a>
                </td>
            </tr>
        )
    })
    return(
        <>
        <h1 className="text-left text-3xl pb-10 font-semibold">Messages Dashboard</h1>
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50 sticky top-0 z-10">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {messagesRows}
                </tbody>
            </table>
        </div>
        </>
    )

}

