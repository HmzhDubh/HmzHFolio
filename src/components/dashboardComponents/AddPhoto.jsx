import { useState, useEffect } from 'react'
import { addPhoto } from '../../firebaseConf.js'
export default function AddPhoto(){

    const [ contactFormData, setContactFormData ] = useState({
            title: "",
            description: "",
            location: "",
            url: "",
        })
    const [ response, setResponse ] = useState("")

    function handleSubmit(e){
            e.preventDefault()
            console.log(contactFormData);
            const res = addPhoto(contactFormData);
            setResponse(res)

        }
        function handleChange(e) {
                const { name, value } = e.target
                setContactFormData(prev => ({
                    ...prev,
                    [name]: value
                }))
            }
        useEffect(() => {
            if (response) {
              const timer = setTimeout(() => {
                setResponse(null);
              }, 5000);
              return () => clearTimeout(timer);

            }
        }, [response]);

    return(
        <>
        {response && (
                <div className="flex justify-between text-center bg-green-100 p-5 m-10 rounded text-gray-700 text-lg">
                  {response}
                  <button onClick={() => setResponse(null)} className="ml-4 font-bold">x</button>
                </div>
        )}
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-10 m-10 bg-white rounded-lg">
                        <h1 className="text-center text-2xl font-bold pb-2">New Photo</h1>

                        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                        <div className="relative pb-1">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                            </svg>
                            </div>
                            <input onChange={handleChange} type="text" id="title" name="title" className="bg-gray-50 border border-indigo-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com"></input>
                        </div>

                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                            <div className="relative pb-1">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                          <svg xmlns="http://www.w3.org/2000/svg"
                                 fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2">
                              <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0115 0"/>
                            </svg>
                        </div>
                        <textarea onChange={handleChange} type="text" id="description" name="description" className="bg-gray-50 border border-indigo-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="eg. John Doe"></textarea>
                      </div>

                      <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
                      <div className="relative pb-1">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                          <svg xmlns="http://www.w3.org/2000/svg"
                                 fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2">
                              <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M7.5 12h.008v.008H7.5V12zm4.5 0h.008v.008H12V12zm4.5 0h.008v.008H16.5V12z" />
                              <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-3.59-.66L3 20l1.66-4.97A7.96 7.96 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                        </div>
                        <input onChange={handleChange} type="text" id="location" name="location" className="bg-gray-50 border border-indigo-200 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full ps-10 p-2.5  dark:bg-indigo-700 dark:border-indigo-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-indigo-500" placeholder="Suggestion: ..."></input>
                      </div>

                      <label htmlFor="url" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image Url</label>
                      <div className="relative pb-1">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                          <svg xmlns="http://www.w3.org/2000/svg"
                                 fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                 stroke="currentColor" className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2">
                              <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M7.5 12h.008v.008H7.5V12zm4.5 0h.008v.008H12V12zm4.5 0h.008v.008H16.5V12z" />
                              <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-3.59-.66L3 20l1.66-4.97A7.96 7.96 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                        </div>
                        <input onChange={handleChange} type="text" id="url" name="url" className="bg-gray-50 border border-indigo-200 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full ps-10 p-2.5  dark:bg-indigo-700 dark:border-indigo-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-indigo-500" placeholder="Suggestion: ..."></input>
                      </div>


                      <div className="flex justify-center mt-7">
                      <button type="submit" className="bg-indigo-600 rounded-lg p-1 text-white">Submit</button>
                      </div>
                    </form>
        </>

    )

}