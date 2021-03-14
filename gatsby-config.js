module.exports = {
  siteMetadata: {
    title: `Dr. Diana Burlacu`,
    headline: `Dr. Diana Burlacu`,
    description: `Landing site for my Internet presence. This is where I showcase my work. Find all the ways you can reach out`,
    name: `Diana Burlacu`,
    siteUrl: `https://dianaburlacu.com`,
    email: `diana.burlacu@newcastle.ac.uk`,
    twitter: `https://twitter.com/dianaeburlacu`,
    linkedin: `https://www.linkedin.com/in/diana-burlacu-648bb462/`,
    image: ``,  // TODO: add image
    logo: ``,  // TODO: add image
    author: `@bciobo`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-fontawesome-css`
  ],
};
