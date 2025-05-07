module.exports = {
  meilisearch: {
    config: {
      host: process.env.MEILISEARCH_HOST,
      apiKey: process.env.MEILISEARCH_API_KEY,
      indexes: [
        {
          name: 'movies',
          contentType: 'api::movie.movie',
          transformEntry({ entry }) {
            return {
              id: entry.id,
              title: entry.title,
              director: entry.director,
              genre: entry.genre,
              releaseDate: entry.releaseDate,
              // Flatten poster media to URL (optional chaining in case it's null)
              poster: entry.poster?.url || null,
              // Optional: You can either exclude description or convert it to plain text if needed
              // Here we'll omit it for simplicity
            };
          },
          settings: {
            searchableAttributes: ['title', 'director', 'genre'],
            displayedAttributes: ['title', 'director', 'genre', 'poster', 'releaseDate'],
          },
        },
      ],
    },
  },
};
