import React, {useState} from 'react'
import {BsPlayFill, BsFillPauseFill } from 'react-icons/bs';
import {TfiAngleLeft, TfiAngleRight} from 'react-icons/tfi'

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
                 <TfiAngleLeft/>
                <div onClick={playSongHandler}>
                    {isPlaying ? <BsPlayFill/>: <BsFillPauseFill/>}
                </div>
                <TfiAngleRight/>
            </div>
        </div>
    )
}

export default Player;