import React from "react"
import { Outlet, NavLink} from "react-router-dom"

export default function DashboardLayout() {
    return (
        <>
            <h1>Dashboard</h1>
            <div className="grid grid-rows-3 grid-flow-col gap-4 p-10 bg-gray-200 m-10 rounded-xl">
                <div className="row-span-3">
                    <ul className="flex flex-col ">
                        <NavLink className={ ( {isActive} )=> isActive ? "underline text-gray-900" : "hover:underline hover:text-gray-800" } end to=".">Projects</NavLink>
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