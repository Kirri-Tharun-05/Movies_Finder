module.exports = {
    meilisearch: {
      config: {
        host: 'https://meilisearch-production-cf2e.up.railway.app',
        apiKey: 'kirritharun05',
        indexes: {
          movie: {
            indexName: 'movies',
            contentType: 'api::movie.movie',
            settings: {
              searchableAttributes: ['title', 'director', 'genre'],
              displayedAttributes: ['title', 'director', 'genre'],
            },
          },
        },
      },
    },
  };