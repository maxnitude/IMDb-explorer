import React from 'react';
import Similar from '../Similar/Similar';
import './film-description.scss'

const FilmDescription = ({data}) => {
    return (
        <div className="film-desription"> 
            <div className="film-desription__info">
                <h1 className="film-desription__title">Watch {data.title} on FILMS</h1>
                <article className="film-desription__article">{data.plot}</article>
            </div>
            <Similar data={data.similars.slice(0, 4)}/>
        </div>
    )
}

export default FilmDescription;