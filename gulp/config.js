export default {
  deploy: {
    ghPages: {
      remoteUrl: 'https://github.com/Hypercubed/pca-chi.git',
      branch: 'gh-pages'
    }
  },
  builder: {
    config: {
      buildCSS: true,
      buildHTML: true
    },
    bundle: {
      sourceMaps: true,
      minify: false,
      mangle: true,
      runtime: false,
      esOptimize: true
    }
  },
  template: {
    webcomponents: false
  }
};
