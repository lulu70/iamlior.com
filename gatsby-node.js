const path = require("path")
const { GraphQLString } = require("gatsby/graphql")
const slash = require("slash")
const matter = require("gray-matter")

// webpack config...

exports.onCreateWebpackConfig = ({ stage, loaders, actions, getConfig }) => {
  const config = getConfig()

  // add "IFDEBUG" flag in development
  const conditionalCompilerRule = [
    {
      test: /\.(js|jsx|ts|tsx)$/,
      include: [path.resolve(`${__dirname}/src`)],
      use: [
        "babel-loader?cacheDirectory",
        {
          loader: "js-conditional-compile-loader",
          options: {
            isDebug: process.env.NODE_ENV === "development",
          },
        },
      ],
    },
  ]

  config.module.rules = [...conditionalCompilerRule, ...config.module.rules]
  actions.replaceWebpackConfig(config)
}

// conditionally add tina cms GraphQL queries

exports.setFieldsOnGraphQLNodeType = ({ type }) => {
  if (process.env.NODE_ENV === "production") {
    const pathRoot = slash(process.cwd())

    const hasMdx = !!type.nodes.find(
      node => node.internal.owner === "gatsby-plugin-mdx"
    )

    if (hasMdx) {
      return {
        rawFrontmatter: {
          type: GraphQLString,
          resolve: source => {
            return JSON.stringify(source.frontmatter)
          },
        },
        rawMdxBody: {
          type: GraphQLString,
          resolve: source => {
            return matter(source.rawBody).content
          },
        },
        fileRelativePath: {
          type: GraphQLString,
          resolve: source => {
            return source.fileAbsolutePath.replace(pathRoot, "")
          },
        },
      }
    }
  }
  // by default return empty object
  return {}
}
