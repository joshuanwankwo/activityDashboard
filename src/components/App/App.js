import React from "react"
import "./App.css"
import SideMenu from "../sidemenu/sidemenu"
import Board from "../board/board"
import NavBar from "../navbar/navbar"
import Homepage from '../home/homepage'


class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            homepage: true,
            board: false,
        }
        this.switchState = this.switchState.bind(this);
        this.changeState = this.changeState.bind(this);
    }

    switchState(){
        this.setState({
            homepage: false,
            board:true,
        })
    }

    changeState(){
        console.log("Hey, I run");
        this.setState({
            homepage: true,
            board: false,
        })
    }

    render(){
        if(this.state.homepage == true && this.state.board == false){
            return(
                <div>
                    <NavBar run = {this.changeState}/>
                    <div id="control">
                        <SideMenu action = {[this.changeState, this.switchState]}/>
                        <Homepage />
                    </div>
                </div>
            )
        }

        else{
            return(
                <div>
                    <NavBar run = {this.changeState}/>
                    <div id="control">
                        <SideMenu action = {[this.changeState, this.switchState]}/>
                        <Board />
                    </div>
                </div>
            )
        }
    }

}



export default App