import React, {useEffect, useState} from 'react'
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
 

    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value
        setSongInfo({...songInfo, currentTime:e.target.value})
    }

    //General funcs
    const getTime = (time) => {
        return(
            Math.floor(time/60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }

    const handleSongChange = (isPrev) => {
        if(isPrev) {
            setCurrentSong(songs[currentSong.index === 0 ? songs.length - 1 : currentSong.index - 1])
        }
        else {
            setCurrentSong(songs[currentSong.index === songs.length - 1 ? 0 : currentSong.index + 1])
        }
    }

    useEffect(() => {
        isPlaying ? audioRef.current.play() : audioRef.current.pause()
    }, [isPlaying, audioRef])

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
                 <div onClick={() => handleSongChange(true)}>
                    <TfiAngleLeft/>
                 </div>
                <div onClick={() => setIsPlaying(!isPlaying)}>
                    {isPlaying ? <BsFillPauseFill/> : <BsPlayFill/>}
                </div>
                <div onClick={() => handleSongChange(false)}>
                    <TfiAngleRight/>
                </div>
            </div>
        </div>
    )
}

export default Player;