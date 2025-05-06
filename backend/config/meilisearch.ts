
export default {
  entries: [
    {
      index: 'movies',
      collection: 'api::movie.movie',
      transformEntry({ entry }) {
        return {
          id: entry.id,
          title: entry.title,
          director: entry.director,
          genre: entry.genre,
          releaseDate: entry.releaseDate,
          description: entry.description,
        };
      },
    },
  ],
};
