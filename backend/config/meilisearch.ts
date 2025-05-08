// export default {
//     indexes: {
//       movies: {
//         indexName: 'movies',
//         collection: 'api::movie.movie',
//         transformEntry({ entry }) {
//           return {
//             id: entry.id,
//             title: entry.title,
//             director: entry.director,
//             genre: entry.genre,
            
//           };
//         },
//       },
//     },
//   };
module.exports = {
    'meilisearch': {
      config: {
        host: 'https://meilisearch-production-cf2e.up.railway.app',
        apiKey: 'kirritharun05', // Optional if your Strapi reads from .env
        indexes: [
          {
            name: 'movies', // Meilisearch index name
            contentType: 'api::movie.movie', // Strapi content type
            settings: {
              searchableAttributes: ['title', 'director', 'genre'],
              displayedAttributes: ['title', 'director', 'genre'],
            },
          },
        ],
      },
    },
  };