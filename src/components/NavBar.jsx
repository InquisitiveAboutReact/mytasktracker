import React from 'react';
import {Link} from 'react-router-dom';

// Link tag prevents every request to go to the server. React Link has in build function to keep that into react 
// ... and render the component
const NavBar = () => {
    return (
        <div>
            <nav className="navbar">
                <h1>Keep track your daily tasks</h1>
                <div className="links">
                    <Link to="/" style={{
                        color:'white',
                        backgroundColor:'#f1356d',
                        fontWeight:'bolder',
                        borderRadius:'8px'
                    }}>Home</Link>
                    <Link to="/create" style={{
                        color:'white',
                        backgroundColor:'#f1356d',
                        fontWeight:'bolder',
                        borderRadius:'8px'
                    }}>New Task</Link>
                </div>
            </nav>
        </div>
    )
}

export default NavBar

