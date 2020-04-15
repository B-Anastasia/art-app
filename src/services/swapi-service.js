class SwapiService {
    _apiBase = 'https://api.harvardartmuseums.org/';
    _apiKEY = 'apikey=65582c50-731b-11ea-ba77-8b81ecbc6885';
    async  getResource (url){
        const res = await fetch(`${this._apiBase}url${this._apiKEY}`);
        if (!(res.ok)){
            throw new Error(`Could not fetch to ${url}, received ${res.status}`)
        }
        return await res.json();
    };

    async getAllPeople(){
        const res = await this.getResource('person?');
        return res.results;
    }
    getPerson = async (id) =>{
        const res = await this.getResource(`person/${id}?`);
        return res.results;
    }
}

const swapi = new SwapiService();
swapi.getAllPeople().then(
    (person)=>{
        person.forEach(person=>{
            console.log(person);
        })
    }
);
