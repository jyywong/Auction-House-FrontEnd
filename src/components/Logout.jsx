import React from 'react'
import {useHistory} from 'react-router-dom'

const Logout = ({setIsLoggedIn}) => {
    const history = useHistory()
    const onClick = () =>{
        console.log('hello')
        localStorage.clear()
        setIsLoggedIn(false)
        history.push('/')
    }
    return (
        <>
            <a class="dropdown-item" onClick={ onClick }href="#">Logout</a>   
        </>
    )
}

export default Logout
