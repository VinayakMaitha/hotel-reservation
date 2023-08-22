const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:8800",
      changeOrigin: true,
    })
  );
  console.log("You are using proxy middleware!");
};

/**
 * for removing from package.json
 * ,
  "proxy": "http://localhost:8800/api"
 */
