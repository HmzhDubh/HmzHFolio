import { Link } from 'react-router-dom'
export default function Header(){
    return(
        <>
        <header className="flex justify-between p-6 ps-20 pe-20 bg-blue-100">
            <div className="ms-10 text-indigo-800 flex items-center">
                <Link to='/' className="text-4xl ">HmzH</Link>
                <small className="ps-3 text-sm mt-1"> Photographer / Developer</small>
            </div>
            <div id="main" className="me-10">
                <nav className='flex items-center text-indigo-800'>
                    <ul className="flex gap-8 ">
                        <Link to="/projects">Projects</Link >
                        <Link to="/about">About</Link >
                        <Link to="/gallery">Gallery</Link >
                        <li></li>
                    </ul>
                    <button className='px-5 py-3 mt-1 bg-red-600 rounded-3xl text-indigo-200'>Contact</button>
                </nav>
            </div>
            </header>
        </>

    )
}