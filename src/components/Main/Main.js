import React, { useEffect, useState } from 'react';
import './main.scss';
import backgroundImage from '../../img/background.jpg'

const Main = ({data, backdrop, trailer}) => {
    
    const [background, setBackground ] = useState(backgroundImage);
    
    useEffect(() => {
        if (backdrop) {
            setBackground(backdrop.link);
        }
    })
    
    return (
        <div className="main-page"> 
            <img className="main-page__image" alt={data.title} src={background}></img>
            <div className="main-page__info"> 
                <h1 className="main-page__title">{data.title}</h1>
                <div className="main-page__subtitle">
                    <div className="main-page__rating">IMDb {data.imDbRating}</div>
                    <h2 className="main-page__type">{data.type}</h2>
                    <h2 className="main-page__genre">{data.genreList[0].value}</h2>
                    <h2 className="main-page__year">{data.year}</h2>
                </div>
            </div>
            <a href={trailer} target="_blank" rel="noreferrer" className="main-page__button">Watch</a>
            <div className="main-page__description">{data.awards}</div>
        </div>
    )
}

export default Main;