import React from 'react'

const LibrarySong = ({song, songs, setCurrentSong, id, audioRef, isPlaying}) => {

    const songSelectHandler = () => {
        const selectedSong = songs.filter((state) => state.id === id)
        console.log(selectedSong)
        setCurrentSong(selectedSong[0])
        if(isPlaying) {
            const playPromise =  audioRef.current.play()
                if(playPromise !== undefined) {
                playPromise.then((audio) => {
                    audio.current.play()
                })
            }   
        }
    }

    return(
        <div onClick={songSelectHandler}className="library-song">
            <img src={song.cover} alt={song.name}></img>
            <div className='song-description'>
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong;