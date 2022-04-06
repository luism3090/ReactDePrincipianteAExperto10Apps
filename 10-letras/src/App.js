import { useEffect, useState } from 'react';
import FormSearch from './components/FormSearch';
import axios from 'axios';
import Song from './components/Song';
import Info from './components/Info';

function App() {

  const [lyricsSearchEngine, setLyricsSearchEngine] = useState({});

  const [lyricSong, setLyricSong] = useState('')

  const [information, setInformation] = useState({})

  const [loading, setLoading] = useState(false)

  useEffect(() => {

    if(Object.keys(lyricsSearchEngine).length === 0) return;
    
    const getDataAPI = async () => {

      setLoading(true)

      const { artist, song } = lyricsSearchEngine

      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;

      const url2 = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`

      try{

        const [lyricSong, information] = await Promise.all([
          axios(url),
          axios(url2)
        ])

        setLyricSong(lyricSong.data.lyrics);
        setInformation(information.data.artists[0])

        setLoading(false)

      }
      catch(e){
        
        setLoading(false)

        alert("No se encontró la letra");

      }

    }

    getDataAPI();

  }, [lyricsSearchEngine])
  

  return (
    <>
      <FormSearch 
        setLyricsSearchEngine={setLyricsSearchEngine}
        loading={loading}
      />
      
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-6'>
            <Info 
              information={information}
            />
          </div>
          <div className='col-md-6'>
            <Song 
              lyricSong={lyricSong}
            />
          </div>
        </div> 
          
      </div>
      
    </>
  );
}

export default App;
