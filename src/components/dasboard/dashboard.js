 import React from "react"
import "./dashboard.css"
import SideMenu from "../sidemenu/sidemenu"
import Board from "../board/board"
import NavBar from "../navbar/navbar"


function Dashboard(props) {
    return (
        <div className="dash">
            <NavBar />  
            <div id="control">     
            <SideMenu />
            <Board />
            </div>     
        </div>
    )
}

export default Dashboard