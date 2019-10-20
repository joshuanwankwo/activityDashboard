import React from 'react';
import './App.css';
import Tenece from '../../Assets/logo.svg'
import Navbar from '../navbar/navbar'


class ApplicForm extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="content">
                <Navbar/>
                <img src={Tenece} />
                <form>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>LOGIN</button>
                    <a href="genesystechhub.com">Forgot Password?</a>
                </form>
            </div>
        )
    }
}

export default ApplicForm