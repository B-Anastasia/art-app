import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import "./main.scss";

ReactDOM.render(
    <App />, document.getElementById('root')
);



class SwapiService {
    _apiBase = 'https://api.harvardartmuseums.org/';
    _apiObjectClassification = 'https://api.harvardartmuseums.org/object?classification=';
    _apiKEY = 'apikey=65582c50-731b-11ea-ba77-8b81ecbc6885';

    async  getResource (url){
        const res = await fetch(`${this._apiBase}${url}${this._apiKEY}`);
        if (!(res.ok)){
            throw new Error(`Could not fetch to ${url}, received ${res.status}`)
        }
        return await res.json();
    };

    async getAllPeople(){
        const res = await this.getResource(`person`);
        return res.records;
    }
    getPerson = async (id) =>{
        // const res = await this.getResource(`person/${id}`);
        // return res.records;
        return this.getResource(`person/${id}`);
    };

    async getAllDrawings(){
        // const res = await this
        //     .getResource(
        //         `object/6772/publications`);
        // return res.records;
        return this.getResource(
                        `object?classification="Drawings"&`);

    }
    async allClassification(){
        return this.getResource('object?classification=Drawings&q=totalpageviews:100&');
    }
}

const swapi = new SwapiService();
swapi.allClassification().then(res=>{
    console.log(res);
});
