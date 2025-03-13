export default function Header(){
    return(
        <>
        <header className="flex justify-between p-6 ps-20 pe-20 bg-blue-100">
            <div className="ms-10 text-indigo-800 flex items-center">
                <a href='main' className="text-4xl ">HmzH</a>
                <small className="ps-3 text-sm mt-1"> Photographer / Developer</small>
            </div>
            <div id="main" className="me-10">
                <nav className='flex items-center text-indigo-800'>
                    <ul className="flex gap-8 ">
                        <li>Projects</li>
                        <li>About</li>
                        <li>Gallery</li>
                        <li></li>
                    </ul>
                    <button className='px-5 py-3 mt-1 bg-red-600 rounded-3xl text-indigo-200'>Contact</button>
                </nav>
            </div>
            </header>
        </>

    )
}