import React from 'react'
import {useHistory} from 'react-router-dom'

const Logout = ({setIsLoggedIn, setUser}) => {
    const history = useHistory()
    const onClick = () =>{
        localStorage.clear()
        setIsLoggedIn(false)
        setUser({})
        history.push('/')
    }
    return (
        <>
            <a className="dropdown-item" onClick={ onClick } data-testid="Logout">Logout</a>   
        </>
    )
}

export default Logout
