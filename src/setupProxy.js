const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    createProxyMiddleware("/issues.json", {
      target: "http://492bf0e5a0f16373cf6779deff49a3c6331751b1:@localhost:8099",
      secure: false,
      changeOrigin: true
    })
  );

  app.use(
    createProxyMiddleware("/api", {
      target: "http://localhost:5000",
      secure: false,
      changeOrigin: true
    })
  );
};