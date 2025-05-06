module.exports = {
  'meilisearch': {
    config: {
      host: 'https://meilisearch-production-afd7.up.railway.app/',
      apiKey: 'oGLp7icnUX_ZvXrSW_RvtNVCbskFSihSRWUy1M3vWfg', // Optional if your Strapi reads from .env
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
