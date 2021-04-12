import React from 'react';
import {Link} from 'react-router-dom';
import './similar.scss';

const Similar = ({data}) => {
    return (
        <div className="similar-films"> 
            <h2 className="similar-films__title">You may also like</h2>
            <div className="similar-films__cards">
                {data.map(item => (
                    <Link  to={`/filmpage/${item.id}`} className="similar-films__film-card" key={item.id}>
                    <img className="similar-films__film-image" src={item.image} alt={item.title}></img>
                    <div className="similar-films__film-info">
                        <h2>{item.title}</h2>
                        <h3>{item.genres}</h3>
                        <article>{item.plot}</article>
                        <div className="similar-films__film-rating">IMDb {item.imDbRating}</div>
                     </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Similar;


