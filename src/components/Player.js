import React, {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlay, faAngleLeft, faAngleRight, faPause} from '@fortawesome/free-solid-svg-icons'

const Player = ({
    audioRef,
    isPlaying,
    setIsPlaying,
    songInfo,
    setSongInfo,
    currentSong,
    setCurrentSong,
    songs,
    setSongs}) => {
 

    //Handlers
    const playSongHandler = () => {
        console.log(audioRef.current)
        setIsPlaying(!isPlaying)
        isPlaying ? audioRef.current.play() : audioRef.current.pause()

    }

    const dragHandler = (e) => {
        console.log(e.target.value)
        audioRef.current.currentTime = e.target.value
        setSongInfo({...songInfo, currentTime:e.target.value})
    }

    //General funcs
    const getTime = (time) => {
        return(
            Math.floor(time/60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }

    return(
        <div className="player">
            <div className="time-control">
                <h3>{getTime(songInfo.currentTime)}</h3>
                <input min={0}
                 max={songInfo.duration || 0} 
                 value={songInfo.currentTime}
                onChange={dragHandler}
                type="range"/>
                <h3>{getTime(songInfo.duration)}</h3>
            </div>
            <div className='play-control'>
                <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft}/>
                <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={isPlaying ? faPlay: faPause}/>
                <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight}/>

            </div>
        </div>
    )
}

export default Player;