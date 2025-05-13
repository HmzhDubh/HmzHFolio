import { useState, useEffect } from 'react'
import { getPhotos } from '../../firebaseConf.js'

export default function PhotosDashboard(){

    const [ photos, setPhotos ] = useState([])
    useEffect( () => {
        async function fetchData(){
            const data = await getPhotos()
            setPhotos(data)
        }
        fetchData()
    }, [])
    const photosRows = photos?.map( (photo) => {
        return(
            <tr key={photo.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{photo.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{photo.description}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{photo.location}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <img src={photo.url} alt="photo" className="h-10 w-10 rounded-full" />
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
        <h1 className="text-left text-3xl pb-10 font-semibold">Photos dashboard</h1>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 sticky top-0 z-10">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">location</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {photosRows}
          </tbody>
        </table>
        </>
    )
}

