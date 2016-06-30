System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: false,
  paths: {
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "ml-pca": "npm:ml-pca@1.1.1",
    "npm:ml-pca@1.1.1": {
      "ml-matrix": "npm:ml-matrix@1.1.5",
      "ml-stat": "npm:ml-stat@1.2.0"
    }
  }
});
