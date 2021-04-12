export default class FetchData {
    
    API_KEY = 'k_mflg6001';  //k_2rrd716q k_yq57vu99 
    SERVER = 'https://imdb-api.com/en/API';

    getData = async (url) => {
        const response = await fetch(url);
        if (response.ok) {
            return await response.json();
        } else {
            throw new Error(`Не удалось получить данные по адресу ${url}`)
        }
    }

    getSearchResult =  async (query) => await this.getData(`${this.SERVER}/Search/${this.API_KEY}/${query}`);

    getCardData = async (id) => await this.getData(`${this.SERVER}/Title/${this.API_KEY}/${id}`);

    getBackdrop = async (id) => await this.getData(`${this.SERVER}/Posters/${this.API_KEY}/${id}`);

    getTrailer = async (id) => await this.getData(`${this.SERVER}/Trailer/${this.API_KEY}/${id}`);

}