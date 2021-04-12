import React, { useState } from 'react';
import WithService from '../WithService/WithService';
import SearchCard from '../SearchCard/SearchCard'
import './search.scss';

const Search = (props) => {

    const [searchData, setSearchData] = useState({});
    const [loading, setLoading] = useState(false);
    const [isFound, setIsFound] = useState(null);

    const {service} = props;

    function getCardInfo (id) {
        service.getCardData(id)
        .then(res => { 
                if (id) {
                    setSearchData(res);
                    setLoading(false);
                } else {
                    console.log('Not found')
                }
        })
    }

    const getResult = () => {
        const query = document.querySelector('.search__form-input').value;
        if (query === '' || query.trim() == 0) {
            setLoading(false);
            setIsFound('Empty request');
        } else {
            service.getSearchResult(query)
            .then(res => {
                // console.log(res);
                if (res.results.length) {
                    getCardInfo(res.results[0].id); 
                } else {
                    setLoading(false);
                    setIsFound('Nothing found');
                    console.log(isFound)
                }
            });
        }
    }

	return (
        <>
        <div className="search">
            <form className="search__form">
                <div className="search__form-block">
                    <input type="text" 
                            className="search__form-input" 
                            id="searchText" 
                            placeholder="Type here something..."
                            // onSubmit={(e) => {
                            //     if (e.target.value) {
                            //         e.preventDefault();
                            //         console.log(e.target.value);
                            //         getResult(e.target.value)
                            //     }
                            // }}              
                        />
                    {/* <div className="search__cross hide">
                        <span></span>
                        <span></span>
                    </div> */}
                </div>
                <button className="search-button" type="submit" 
                        onClick={(e) => {
                            e.preventDefault();
                            setSearchData({});
                            setLoading(true);
                            getResult()    
                            }
                        }
                > 
                    <span className="search-button__text">Search</span>
                </button>
            </form>
        </div>
        <SearchCard data={searchData} loading={loading} isFound={isFound}/>
        </>
	)
};

export default  WithService()(Search);
