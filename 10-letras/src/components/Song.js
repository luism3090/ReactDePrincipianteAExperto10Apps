import React from 'react'

const Song = ( {lyricSong} ) => {

    if(lyricSong === "") return '';

  return (
      <>
        <h2>Lyric Song</h2>
        <div className='song'>{lyricSong}</div>
      </>
    
  )
}

export default Song