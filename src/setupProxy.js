const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/ajax',
    createProxyMiddleware({
      target: 'https://m.maoyan.com',
      changeOrigin: true,
    })
  );

//   app.use(
//     '/aaaa',
//     createProxyMiddleware({
//       target: 'https://aaaa.maoyan.com',
//       changeOrigin: true,
//     })
//   );

};
