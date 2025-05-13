import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getPhotos } from '../firebaseConf.js'

export default function Gallery(){

    const [images, setImages] = useState([])
        useEffect(() => {
            async function fetchData() {
              const data = await getPhotos();

              setImages(data);
            }

            fetchData();
        }, []);

    const imagesElements = images?.map(img => {
        return(
            <img key={img.id} src={img.url} width="300" height="600"></img>
        )})

    return(
        <div className="filter drop-shadow-lg mt-16">
            <h1 className="text-red-500 text-4xl font-black text-center mb-14">Photo Gallery</h1>
            <div className="flex flex-wrap justify-center p-4 sm:p-8">
                {imagesElements}

            </div>
        </div>


    )

}