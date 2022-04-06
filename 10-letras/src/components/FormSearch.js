import React, { useState } from 'react'
import { validateSearch } from '../helpers/index'
import Loading from './Loading';

const FormSearch = ( {setLyricsSearchEngine, loading} ) => {

    const [searchLyrcisSong, setSearchLyrcisSong] = useState({
        artist:'',
        song:''
    })

    const { artist, song  } = searchLyrcisSong;

    const [validateSearchLyrcisSong, setValidateSearchLyrcisSong] = useState({
        errorValidateSearch: false,
        msjerrorValidateSearch:''
    })

    const { errorValidateSearch, msjerrorValidateSearch } = validateSearchLyrcisSong;

    const changeSearchLyrcisSong = (e) => {

        setSearchLyrcisSong({
            ...searchLyrcisSong,
            [e.target.name]: e.target.value
        })

    }

    const submitSearchLyrcisSong = (e) => {

        e.preventDefault();

        const stateValidation = validateSearch(artist,song);

        setValidateSearchLyrcisSong(stateValidation);

        if(stateValidation.errorValidateSearch)
        return;

        setLyricsSearchEngine({
            artist,
            song
        })

    }

  return (
    <>
        <div className='bg-info'>
            <div className='container'>
                <div className='row'>
                    <form   onSubmit={submitSearchLyrcisSong}
                            className='col card text-white bg-transparent mb-5 pt-5 pb-2'>
                        <fieldset>
                            <legend className='text-center'>
                                Song lyrics search engine
                            </legend>
                            
                            { errorValidateSearch ? <p className='alert alert-danger text-center p-2'> {msjerrorValidateSearch} </p> : '' }

                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='form-group'>
                                        <label htmlFor='artist'>Artist</label>
                                        <input
                                            type="text"
                                            id="artist"
                                            className='form-control'
                                            name="artist"
                                            placeholder='Artist name'
                                            value={artist}
                                            onChange={changeSearchLyrcisSong}
                                        />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                <div className='form-group'>
                                        <label htmlFor='song'>Song</label>
                                        <input
                                            type="text"
                                            id="song"
                                            className='form-control'
                                            name="song"
                                            placeholder='Song name'
                                            value={song}
                                            onChange={changeSearchLyrcisSong}
                                        />
                                    </div>
                                </div>
                            </div>
                                <button
                                    type="submit"
                                    className='btn btn-primary float-right'
                                >
                                    Search
                                </button>
                                <div className='loading'>
                                    { loading ? <Loading /> : ''} 
                                </div>
                                
                        </fieldset>
                        
                    </form>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default FormSearch