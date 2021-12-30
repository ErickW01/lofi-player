import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMusic, faMoon} from "@fortawesome/free-solid-svg-icons"

const Nav = ({libraryStatus, setLibraryStatus, 
    lightStatus, setLightStatus}) => {

    const setLibraryHandler = () => {
        setLibraryStatus(!libraryStatus)
        console.log(libraryStatus)
    }

    const setLightModeHandler = () => {
        setLightStatus(!lightStatus)
    }

    return(
        <nav>
            <h1>Lofi</h1>
            <button onClick={setLibraryHandler}>
                Library 
                <FontAwesomeIcon icon={faMusic}></FontAwesomeIcon>
            </button>
            <button onClick={setLightModeHandler}>
                <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>
            </button>
        </nav>
    )
}

export default Nav