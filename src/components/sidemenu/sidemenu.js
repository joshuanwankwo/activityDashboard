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
                <li><i class="fas fa-home"></i>Home</li>
                <li><i class="fas fa-binoculars"></i>Views</li>
                <li><i class="fas fa-user-cog"></i>Settings</li>
                <li><i class="fas fa-tasks"></i>Dailly Tasks</li>
                <li><i class="fas fa-project-diagram"></i>Projects</li>
                <li><i class="fas fa-users"></i>Connections</li>
                <li><i class="fas fa-microchip"></i>Dashboard</li>
                <li><i class="fas fa-sign-out-alt"></i>Log out</li>
            </ul>
        </div>
    )
}

export default SideMenu
