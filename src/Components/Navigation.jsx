import React from 'react'

import { nav } from './Data'

const Navigation = ({ open }) => {



    return (

        <nav className={open ? "open" : null}>
            <div className="nav-container">

                <div className="wrapper">
                    <div className="line-container">
                        <span className="line"></span>
                    </div>
                    <ul className="menu-container">
                        {nav.map((menu, i) => (
                            <li key={i}>
                                <h3>{menu.topic}</h3>
                                <ul className="subtopic-container">
                                    {menu.subtopics.map((submenu, i) => (
                                        <li key={i}>
                                            {submenu.title}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

        </nav>
    )
}

export default Navigation
