import React from 'react';
import {Link} from 'react-router-dom';
import './searchCard.scss';

const searchCard = ({data, loading, isFound}) => {

    const {id, title, type, year, image, awards, genreList, imDbRating} = data;

    if (title) {
        return (
            <Link to={`/filmpage/${id}`} className="search-card">
                <div className="search-card__image">
                    <img src={image} alt={title}/>
                </div>
                        
                <div className="search-card__info">
                     <div className="search-card__title">{title}</div>
                     <div className="search-card__subtitle">
                         <h2 className="search-card__type">{type}</h2>
                         <h2 className="search-card__genre">{genreList[0].value}</h2>
                         <h2 className="search-card__year">{year}</h2>
                     </div>
                     <div className="search-card__description">{awards}</div>
                </div>
                <div className="search-card__rating">IMDb {imDbRating}</div>
            </Link>
        )
    } else if (loading) {
        return (
            <div className="search-card">
                <div className="search-card__preloader">
                    <div className="spinner-eclipse"> 
                        <div className="spinner-eclipse__content">
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>  
        )
    } else if (isFound) {
        return (
            <div className="search-card">
                <div className="search-card__preloader">
                    <span>{isFound}</span>
                </div>
            </div>  
        )
    } else return (
        <div className="search-card search-card__hidden"></div>
    )

};

export default searchCard;