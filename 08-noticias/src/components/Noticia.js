import React from 'react'

const Noticia = ( props ) => {

    const { urlToImage, title, description, url, source  } = props.noticia;

    let imagen;

    if(urlToImage !== null){

        if(!urlToImage.includes('__export')){

            imagen = (<div className='card-image'>
                        <img src={urlToImage} alt={title} />
                        <span className='card-title'>{source.name}</span>
                    </div>)
        }

    }

  return (
    <>
        <div className="col s12 m6 14">
            <div className='card'>
                {imagen}
                <div className='card-content'>
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
                <div className='card-action'>
                    <a 
                        href={`${url}`} 
                        rel="noreferrer" 
                        target='_blank'
                        className='waves-effect waves-light btn'
                        > Ver noticia completa</a>
                </div>
            </div>
            <br/>
        </div>
    </>
  )
}

export default Noticia