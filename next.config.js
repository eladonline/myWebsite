const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { ANALYZE } = process.env;
const withSass = require('@zeit/next-sass');

module.exports = withSass({
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/whyUs': { page: '/whyUs' },
      '/contact': { page: '/contact' }
    };
  },
  webpack: function(config) {
    if (ANALYZE) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: 8888,
          openAnalyzer: true
        })
      );
    }

    config.module.rules.push({ test: /\.(ttf|eot|png|gif|woff|svg)$/, loader: 'file-loader' });
    return config;
  }
});
