/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

const tinacms = {
  resolve: "gatsby-plugin-tinacms",
  options: {
    // The CMS will be disabled on your production site
    enabled: process.env.NODE_ENV !== "production",
    sidebar: {
      position: "overlay",
    },
    // toolbar: true,
    plugins: [
      "gatsby-tinacms-mdx",
      {
        resolve: "gatsby-tinacms-git",
        options: {
          // pathToRepo: REPO_ABSOLUTE_PATH,
          // pathToContent: "/",
          defaultCommitMessage: "Edited with TinaCMS",
          defaultCommitName: "TinaCMS",
          sshKey: process.env.SSH_KEY,
          // defaultCommitEmail: "git@tinacms.org",
          pushOnCommit: true,
        },
      },
    ],
  },
}

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Site Name`,
    description: `Site Description`,
    author: `@liorcohen`,
    siteUrl: `https://www.SITE_URL.com`,
    image: "/image-name.jpg",
  },
  plugins: [
    ...(process.env.CI_APPLICATION_ENVIRONMENT === "development_local"
      ? [bundleAnalyzer]
      : []),
    ...(process.env.NODE_ENV === "development" ? [tinacms] : []),
    {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: "static",
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        plugins: [`gatsby-remark-images`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1920,
              withWebp: true,
            },
          },
        ],
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-advanced-sitemap`,
    // {
    //   resolve: `gatsby-plugin-canonical-urls`,
    //   options: {
    //     siteUrl: ``,
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-create-client-paths`,
    //   // options: { prefixes: [`/products/*`, `/account/*`] },
    // },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `mdx`,
        path: `${__dirname}/src/mdx`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `site-name`,
    //     short_name: `site`,
    //     start_url: `/`,
    //     background_color: `#FFFFFF`,
    //     theme_color: `#FFFFFF`,
    //     display: `minimal-ui`,
    //     // icon: ``, // This path is relative to the root of the site.
    //   },
    // },
  ],
}
