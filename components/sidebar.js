import React from 'react'
import Link from 'next/link'
import "../pages/_app";

//sideBar
const Sidebar = () => {
    return (
        <div>
            <div className="sidenavbar">
                <h2> Menu </h2>
                <ul>
                    <li> Dashboard </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar