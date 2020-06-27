import React from 'react';
import {NavLink,withRouter} from 'react-router-dom'
import Auth from '../services/auth'

const Navbar = (props) => {
    var isLoggedIn = Auth.isauthenticated()
    var display = (isLoggedIn) ? {display:'block'} : {display:'none'}
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <NavLink className="navbar-brand" to="/">NA</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/signup">SignUp</NavLink>
                    </li>
                    <li className="nav-item">
                        <button className='nav-link' style={display} onClick={()=>{
                            Auth.logout()
                            props.history.push("/")
                        }}>Logout</button>
                    </li>
                </ul>
            </div>
        </nav>
     );
}
 
export default withRouter(Navbar);