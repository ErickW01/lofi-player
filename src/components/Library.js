import React from 'react'
import LibrarySong from './LibrarySong'
import Song from './Song'

const Library = ({songs, setCurrentSong, audioRef, isPlaying, libraryStatus}) => {
    return (
        <div className={`library  ${libraryStatus && "active-library"}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map((song) => (
                    <LibrarySong 
                    songs={songs}
                    setCurrentSong={setCurrentSong}
                    song={song} 
                    id={song.id}
                    key={song.id}
                    audioRef={audioRef}
                    isPlaying={isPlaying}
                    />
                ))}
            </div>
        </div>
    )
}
export default Library