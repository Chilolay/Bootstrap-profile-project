const path = require("path");

export default {
  root: path.resolve(__dirname, "src"),
  build: {
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "src/index.html"),
        careGuides: path.resolve(
          __dirname,
          "src/pages/CareGuides/careGuides.html"
        ),
        articles: path.resolve(__dirname, "src/pages/Articles/articles.html"),
        toxicPlants: path.resolve(
          __dirname,
          "src/pages/Articles/toxicPlants.html"
        ),
        AirPlantCare: path.resolve(__dirname, "src/pages/CareGuides/AirPlantCare.html")
      },
    },
    outDir: "../dist",
  },
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
      "~bootswatch": path.resolve(__dirname, "node_modules/bootswatch"),
    },
  },
  server: {
    port: 8080,
    hot: true,
  },
};
