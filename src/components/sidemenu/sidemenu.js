import React from "react"
import "./sidemenu.css"
import DP from "../../Assets/darkcode.jpeg";



function SideMenu(props){
    return(
        <div id="sidemenucon">
            <div id="imgcon">
            </div>
            <img src={DP} id="dp"/>
            <h1 id="name">DarkCode</h1>
            <h2 id="role">Intern at Genesys Tech Hub</h2>
            <hr />
            <ul>
                <li>Home</li>
                <li>Views</li>
                <li>Settings</li>
                <li>Log out</li>
            </ul>
        </div>
    )
}

export default SideMenu
