import { useState, useEffect } from 'react'
import { getPhotos } from '../firebaseConf.js'

export default function galleryPage(){
    const [images, setImages] = useState([])
            useEffect(() => {
                async function fetchData() {
                  const data = await getPhotos();

                  setImages(data);
                }

                fetchData();
            }, []);
    const imagesElems = images.map( img => {
        return (
            <img key={img.id} src={img.url} width="300" height="600"></img>

        )

    } )
    return(
        <div className="pt-10">
            <h1 className="text-center text-5xl m-20 font-bold text-indigo-900">The Gallery</h1>

            <div className="flex flex-wrap justify-center sm:p-8">
                {imagesElems}

            </div>
        </div>
    )


}