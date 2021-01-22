import React from 'react'
import  Link  from 'next/link'

const Sidebar = () => {
    return (
        <div>
            <div className="sidenavbar">
                <h2> sidebar </h2>
                <ul>
                    <li> <Link className="links" href="/"> Dashboard</Link></li>
                </ul>   
            </div>
        </div>
    )
}

export default Sidebar