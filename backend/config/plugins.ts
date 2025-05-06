module.exports = {
  'meilisearch': {
    config: {
      host: 'http://localhost:7700/',
      // apiKey: 'kirriTharun', // Optional if your Strapi reads from .env
      indexes: [
        {
          name: 'movies', // Meilisearch index name
          contentType: 'api::movie.movie', // Strapi content type
          settings: {
            searchableAttributes: ['title', 'director', 'genre'],
            displayedAttributes: ['title', 'director', 'genre', 'description', 'poster', 'releaseDate'],
          },
        },
      ],
    },
  },
};
