import React from 'react'
import { Link } from 'react-router-dom';
export const LoggedOutButtons = () => {
    return (
        <>
            
            <li className="nav-item">
                <Link>
                    <a className="nav-link" href="#">
                        Sign Up
                    </a>
                </Link>
            </li>
            <li className="nav-item">
                <Link to={'/login'}>
                    <a className="nav-link" href="#">
                        Login
                    </a>
                </Link>
            </li>
        </>
    )
}

export default LoggedOutButtons
