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

  getWork = async (id) => {
    const res = await this.getResource(
      `object/${id}?classification=Drawings&q=totalpageviews:150&fields=images,people,title,objectid,dated,culture,centure&`
    );
    return this._transformWork(res);
  };
  getAllDrawings = async () => {
    const res = await this.getResource(
      `object?classification=Drawings&q=totalpageviews:150&fields=images,people,title,objectid,dated,culture,century&hasimage=1&`
    );
    return res.records
      .filter((el) => el.imagepermissionlevel === 0)
      .map(this._transformWork);
  };
  getAllPaintings = async () => {
    const res = await this.getResource(
      `object?classification=Paintings&q=totalpageviews:150&fields=images,people,title,objectid,dated,culture,century&hasimage=1&`
    );
    return res.records
      .filter((el) => el.imagepermissionlevel === 0)
      .map(this._transformWork);
  };
  // allPeople = async () => {
  //   const res = await this.getResource(
  //     "object?classification=Drawings|Paintings|Photographs&q=totalpageviews:200&"
  //   );
  //   const resArr2 = res.records.map((item) => {
  //     return item["people"];
  //   });
  //   const resArr3 = resArr2.map((item) => {
  //     for (let i = 0; i < item.length; i++) {
  //       if (item[i].role === "Artist") {
  //         return item[i];
  //       }
  //     }
  //   });
  //   return resArr3.map(this._transformPerson);
  // };

  _transformPerson = (person) => {
    return {
      id: person.personid,
      name: person.name,
      gender: person.gender,
      culture: person.culture,
      displayDate: person.displaydate,
      birthPlace: person.birthplace,
      deathPlace: person.deathplace,
    };
  };

  _transformWork = (work) => {
    return {
      id: work.objectid,
      title: work.title,
      date: work.dated,
      name: work.people ? work.people[0]["name"] : null,
      // imageUrl: work.images[0].baseimageurl + `?width=280`,
      imageUrl: work.images.map((el) => el.baseimageurl + `?width=280`),
      culture: work.culture,
      dimensions: work.dimensions,
      division: work.division,
      publicationsHistory: work.publications
        ? work.publications.map((el) => el.citation)
        : null,
      exhibitionHistory: work.exhibitions
        ? work.exhibitions.map((el) => el.citation)
        : null,
      text: work.contextualtext ? work.contextualtext : null,
    };
  };
}

// const swapi = new SwapiService();
// swapi.allDrawings().then((res) => {
//   console.log(res);
// });
