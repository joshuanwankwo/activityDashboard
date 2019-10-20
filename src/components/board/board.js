import React from "react"       
import "./board.css"
import Card from "../card/card"


function Board(props){
    return(
        <div id="main">
                <div className="data">
                <i class="fas fa-running"></i>
                <h1>75</h1>
                <h3>DAYS STREAK</h3>
                </div>
                <div className="data">
                <i class="fab fa-gratipay"></i>
                <h1>969</h1>
                <h3>LIKES</h3>
                </div>
                <div className="data">
                <i class="fas fa-tasks"></i>
                <h1>15</h1>
                <h3>PROJECTS</h3>
                </div>
                <div className="data">
                <i class="fas fa-medal"></i>
                <h1>2</h1>
                <h3>INTERN OF THE WEEK</h3>
                {/* A page showing an article of how and why he became intern of the week and the prize attached */}
                </div>
                <div className="data">
                <i class="fas fa-terminal"></i>
                <h1>214</h1>
                <h3>CHALLENGES</h3>
                {/* A page showing all the chllenge engagement, both the accepted, declined, won, defeated, and created one then a sumary */}
                </div>
                <div className="data">
                <i class="fas fa-superscript"></i>
                <h1>1</h1>
                <h3>RANKING</h3>
                {/* A detailed page showing his ranking in the entire path */}
                </div>
                <div className="data">
                <i class="far fa-newspaper"></i>
                <h1>7</h1>
                <h3>ARTICLES</h3>
                {/* A page showing all his articles, how many readers and how his articles are ranking above other people's own */}
                </div>
                <div className="data">
                <i class="fas fa-users"></i>
                <h1>5</h1>
                <h3>COMMUNITIES</h3>
                {/* showing list of the groups and communnity he is currently involed and the ones he created */}
                </div>
        </div>
    )
}

export default Board