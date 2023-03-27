import React from 'react'
import { BsFillBookFill, BsFillMoonFill} from 'react-icons/bs';

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
                Library <BsFillBookFill/>
            </button>
            <button onClick={setLightModeHandler}>
                <BsFillMoonFill/>
            </button>
        </nav>
    )
}

export default Nav