export default {
  paths: {
    dataLink: ''
  },
  deploy: {
    ghPages: {
      remoteUrl: 'https://github.com/thorWahlestedt/thor-chi.git',
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
  }
};
