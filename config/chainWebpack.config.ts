
const CompressionPlugin = require("compression-webpack-plugin");
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;

// @ts-ignore
const chainWebpack = (config, { webpack }) => {
  config.merge({
    optimization: {
      minimize: true,
      splitChunks: {
        chunks: 'all',
        automaticNameDelimiter: '.',
        minSize: 30000,
        minChunks: 1,
        maxAsyncRequests: 10,
        maxInitialRequests: 5,
        cacheGroups: {
          vendors: {
            name: 'vendors',
            chunks: 'all',
            test: /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom|lodash|lodash-decorators|dva|moment)[\\/]/,
            priority: -10,
          },
          antd: {
            name: 'antd',
            chunks: 'all',
            test: /[\\/]node_modules[\\/](@ant-design|antd|antd-mobile)[\\/]/,
            priority: -11,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
          },
        },
      },
    }
  });

  // gzip压缩
  config.plugin('CompressionPlugin').use(new CompressionPlugin({
    filename: "[path].gz[query]",
    algorithm: "gzip",
    test: productionGzipExtensions,
    // 只处理大于xx字节 的文件，默认：0
    threshold: 10240,
    // 示例：一个1024b大小的文件，压缩后大小为768b，minRatio : 0.75
    minRatio: 0.75, // 默认: 0.8
    // 是否删除源文件，默认: false
    deleteOriginalAssets: false
  }));

};

export default chainWebpack;
