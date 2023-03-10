const { withEsbuildOverride } = require('remix-esbuild-override');
const styledComponentsPlugin = require('./sc-plugin');

withEsbuildOverride((option) => {
  option.plugins.unshift(styledComponentsPlugin());

  return option;
});

/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ['**/.*'],
  // When running locally in development mode, we use the built-in remix
  // server. This does not understand the vercel lambda module format,
  // so we default back to the standard build output.
  server: process.env.NODE_ENV === 'development' ? undefined : './server.js',
  serverBuildPath: 'api/index.js',
  future: {
    v2_routeConvention: true,
  },
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
};
