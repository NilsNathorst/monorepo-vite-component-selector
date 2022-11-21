const path = require("path");

const { getLoader, loaderByName } = require("@craco/craco");
const CracoAlias = require("craco-alias");
const emotionBabelPlugin = require("@emotion/babel-plugin").default

const packages = ["ui-lib"];
const absolutePaths = packages.map((item) =>
  path.join(__dirname, `../../packages/${item}`),
);

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        // baseUrl SHOULD be specified
        // plugin does not take it from tsconfig
        baseUrl: "../../",
        // tsConfigPath should point to the file where "baseUrl" and "paths" are specified
        tsConfigPath: "./tsconfig.appBase.json",
      },
    },
  ],
  babel: {
    plugins: [
      emotionBabelPlugin
    ]
  },
  webpack: {
    configure: (webpackConfig) => {
      const { isFound, match } = getLoader(
        webpackConfig,
        loaderByName("babel-loader"),
      );

      if (isFound) {
        const include = Array.isArray(match.loader.include)
          ? match.loader.include
          : [match.loader.include];

        match.loader.include = include.concat(absolutePaths);
      }

      return webpackConfig;
    },
  },
};
