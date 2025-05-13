import React from "react"
import { Outlet, NavLink} from "react-router-dom"

export default function DashboardLayout() {
    return (
        <>
            <h1 className="text-5xl font-semibold text-center p-10">Dashboard</h1>
            <div className="grid grid-col-2 grid-flow-col gap-4 p-10 bg-blue-100 border-b-2 border-t-2 border-indigo-800">
                <div className="row-span-3">
                    <ul className="flex flex-col me-20 items-center text-xl">
                        <NavLink className={ ( {isActive} )=> isActive ? "underline text-gray-900 font-medium" : "hover:underline hover:text-gray-800" } end to=".">Projects</NavLink>
                        <NavLink className={ ( {isActive} )=> isActive ? "underline text-gray-900" : "hover:underline hover:text-gray-800" } to="photos">Photos</NavLink>
                        <NavLink className={ ( {isActive} )=> isActive ? "underline text-gray-900" : "hover:underline hover:text-gray-800" } to="experience">Experience</NavLink>
                        <NavLink className={ ( {isActive} )=> isActive ? "underline text-gray-900" : "hover:underline hover:text-gray-800" } to="tech-stack">Tech Stack</NavLink>
                        <NavLink className={ ( {isActive} )=> isActive ? "underline text-gray-900" : "hover:underline hover:text-gray-800" } to="messages">Messages</NavLink>
                    </ul>
                </div>
                <div className="col-span">
                    <button>Filter</button>
                    <button>Filter</button>
                    <button>Search</button>
                </div>

                <div className="row-span-2 col-span-2">
                    <Outlet />
                </div>
            </div>
        </>
    )
}