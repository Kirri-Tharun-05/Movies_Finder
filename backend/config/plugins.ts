module.exports = {
  'meilisearch': {
    config: {
      host: process.env.MEILISEARCH_HOST,
      apiKey: process.env.MEILISEARCH_API_KEY, // Optional if your Strapi reads from .env
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
