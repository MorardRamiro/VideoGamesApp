export interface VideoGame {
  //id: number,
  //_id: string,
  name: string,
  description: string,
  release_date: Date,
  rating: number,
  platforms: Genre[],
  genres: Genre[]
};

export interface VideoGameWithID {
  _id: string,
  id: number,
  name: string,
  image: string,
};

export interface Genre {
  id: number,
  name: string,
};
