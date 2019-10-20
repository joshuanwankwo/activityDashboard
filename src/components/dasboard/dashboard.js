 import React from "react"
import "./dashboard.css"
import SideMenu from "../sidemenu/sidemenu"
import Board from "../board/board"
import NavBar from "../navbar/navbar"
import ApplicForm from "../login/Login"


 class Dashboard extends React.Component{
     constructor(props){
         super(props);
         this.state={
             board:true,
             applicForm: false
         }
     }
     render(){
         if(this.state.board){
    return (
        <div className="dash">
            <NavBar />  
            <div id="control">     
            <SideMenu />
            <Board />
            </div>     
        </div>
    )
         }else{
             return(
                <div className="dash">
                <NavBar />  
                <div id="control">     
                <SideMenu />
                <ApplicForm />
                </div>     
            </div>
             )
         }
    }
}

export default Dashboard