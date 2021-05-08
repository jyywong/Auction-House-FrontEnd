import React from 'react'
import {Link} from 'react-router-dom'
import Logout from './Logout'


const LoggedInDropdown = ({setIsLoggedIn, user}) => {
    return (
        <>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {user.username}
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                    <Link to={'/messages'} >
                    <a class="dropdown-item" href="#">Messages</a>
                    </Link>
                    
                    <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                    <Logout setIsLoggedIn={setIsLoggedIn}/>
                </div>
            </li>
        </>
    )
}

export default LoggedInDropdown
