import React, {useState, useEffect} from 'react';
import useFilmInfo from '../useFilmInfo/useFilmInfo';
import Header from '../Header/Header';
import Main from '../Main/Main';
import FilmDescription from '../FilmDescription/FilmDescription';
import ScrollToTop from '../../service/ScrollToTop';

const FilmPage = (props) => {
    
    const [actualFilmInfo, setFilmInfo] = useState(null);
    const [backdrop, setBackdrop] = useState(null);
    const [trailerLink, setTrailerLink] = useState(null);

    const { filmInfo, backdrops, trailer } = useFilmInfo(props.match.params.id);

    useEffect (() => {
        setFilmInfo(filmInfo);
        setBackdrop(backdrops[0]);
        setTrailerLink(trailer);
    }, [filmInfo, backdrops, trailer]);

    ScrollToTop();
 
    if (actualFilmInfo !== null) {
        console.log(actualFilmInfo);
        return (
            <div className="film-page"> 
                <Header />
                <Main data={actualFilmInfo.data} backdrop={backdrop} trailer={trailerLink}/>
                <FilmDescription data={actualFilmInfo.data}/>
            </div>
        )
    } return (
        <div className="film-page"> 
            <Header />
        </div>
    )

}

export default FilmPage;