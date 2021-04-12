import  { useEffect, useState }  from 'react';
import FetchData from  '../../service/FetchData';

const service = new FetchData();

const useFilmInfo = (id) => {
		
    const [filmInfo, setFilmInfo] = useState(null);
    const [backdrops, setBackdrop] = useState([]);
    const [trailer, setTrailer] = useState(null);

    useEffect(() => {
        service.getCardData(id)
            .then(data => setFilmInfo({data}))
    }, [id]);

    useEffect(() => {
        service.getBackdrop(id)
            .then(data => setBackdrop(data.backdrops))
    }, [id]);

    useEffect(() => {
        service.getTrailer(id)
            .then(data => setTrailer(data.link))
    }, [id]);

    return { filmInfo, backdrops, trailer }
};

export default useFilmInfo;