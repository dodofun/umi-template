const proxy =  {
  dev: {
    '/api/': {
      target: 'http://api.test.com/',
      changeOrigin: true,
      pathRewrite: {
        '^': '',
      },
    },
  },
  pre: {
    '/api/': {
      target: 'http://api.test.com/',
      changeOrigin: true,
      pathRewrite: {
        '^': '',
      },
    },
  },
};

export default proxy
