



module.exports = {
  siteMetadata: {
    lang: "ru__Ru",
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`, options: {
        url: 'https://admin.solarland.com.ua/graphql',
      }
    },
    "gatsby-plugin-react-helmet",

    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `src`,
        path: `${__dirname}/src`,
        name: `images`,
        path: `${__dirname}/src/images`,

      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-199808557-2"}
    },

  ],
};
