import React from 'react'

const Info = ( { information } ) => {

    if(Object.keys(information).length === 0) return null;

    const { strArtistThumb, strGenre, strBiographyEN, strFacebook, strTwitter, strLastFMChart } = information;

  return (
    <div className='card border-light'>
        <div className='card-header bg-primary text-light font-weight-bold'>
            Artist information
        </div>
        <div className='card-body'>
            <img src={strArtistThumb} alt="Artist logo"/>
            <p className='card-text'>Gender: {strGenre}</p>
            <p className='card-text'>Biography: </p>
            <p className='card-text'>{strBiographyEN}</p>
            <p className='card-text'>
            <a href={`https://${strFacebook}`} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
            </a>
            <a href={`https://${strTwitter}`} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
            </a>
            <a href={`${strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-lastfm"></i>
            </a>
            </p>
        </div>
    </div>
  )
}

export default Info