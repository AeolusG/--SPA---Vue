module.exports = {
  transpileDependencies: ["vuetify"],
  publicPath: process.env.NODE_ENV === "production" ? "/SPA-on-Vue/" : "/",
  outputDir: "dist",
  assetsDir: "static",
};
