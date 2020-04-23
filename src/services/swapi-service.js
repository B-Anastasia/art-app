export default class SwapiService {
  _apiBase = "https://api.harvardartmuseums.org/";
  _apiKEY = "apikey=65582c50-731b-11ea-ba77-8b81ecbc6885";

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}${this._apiKEY}`);
    if (!res.ok) {
      throw new Error(`Could not fetch to ${url}, received ${res.status}`);
    }
    return await res.json();
  }

  getItem = async (id) => {
    const res = await this.getResource(
      `object/${id}?&fields=images,people,title,objectid,dated,culture,centure&`
    );
    return this._transformItem(res);
  };

  getAllItems = async (classification) => {
    const res = await this.getResource(
      `object?classification=${classification}&q=totalpageviews:100&hasimage=1&fields=images,title,objectid,dated,people&`
    );
    return res.records
      .filter((el) => el.imagepermissionlevel === 0)
      .map(this._transformItem);
  };

  getPersonItems = async (personId) => {
    const res = await this.getResource(
      `object?person=${personId}&fields=images,objectid,title&hasimage=1&`
    );
    return res.records.map(this._transformPersonItem);
  };

  getAllPeople = async () => {
    const res = await this.getResource(
      "object?classification=Drawings|Paintings|Photographs&q=totalpageviews:150&"
    );
    const resArr2 = res.records.map((item) => {
      return item["people"];
    });

    const resArr3 = resArr2.map((item) => {
      for (let i = 0; i < item.length; i++) {
        if (item[i].role === "Artist") {
          return item[i];
        }
      }
    });
    return resArr3.map(this._transformPerson);
  };

  getPerson = async (personId) => {
    const res = await this.getResource(`person?q=personid:${personId}&`);
    return this._transformPerson(res.records[0]);
  };

  _transformPerson = (person) => {
    return {
      id: person.personid,
      name: person.displayname,
      gender: person.gender,
      culture: person.culture,
      birthPlace: person.birthplace,
      displayDate: person.displaydate,
      deathPlace: person.deathplace,
    };
  };

  _transformPersonItem = (item) => {
    return {
      id: item.objectid,
      title: item.title,
      imageUrl: item.images[0].baseimageurl,
    };
  };

  _transformItem = (item) => {
    return {
      id: item.objectid,
      title: item.title,
      date: item.dated,
      name: item.people ? item.people[0]["name"] : null,
      imageUrl: item.images.map((el) => el.baseimageurl),
      culture: item.culture,
      dimensions: item.dimensions,
      classification: item.classification,
      division: item.division,
      publications: item.publications
        ? item.publications.map((el) => el.citation)
        : null,
      exhibitions: item.exhibitions
        ? item.exhibitions.map((el) => el.citation)
        : null,
      text: item.contextualtext
        ? item.contextualtext.map((el) => el.text)
        : null,
    };
  };
}

// const swapi = new SwapiService();
// swapi.allDrawings().then((res) => {
//   console.log(res);
// });
