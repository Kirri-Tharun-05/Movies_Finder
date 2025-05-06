module.exports = {
  'meilisearch': {
    config: {
      host: 'https://meilisearch-service-zq9f.onrender.com/',
      apiKey: 'kirriTharun', // Optional if your Strapi reads from .env
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
