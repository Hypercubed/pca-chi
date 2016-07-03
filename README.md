# Project X example by Thor Wahlestedt

## About Project χ

This website was built using the [Project χ platform](https://github.com/Hypercubed/Project-chi). Project χ (pronounced project kai or /<abbr title="/ˈ/ primary stress follows">ˈ</abbr><abbr title="'k' in 'kind'">k</abbr><abbr title="/iː/ long 'e' in 'bead'">iː</abbr>/) is an modular open source visualization gallery framework built by Jayson Harshbarger at the [RIKEN Institute in Yokohama Japan](http://www.yokohama.riken.jp/english/).  It offers a framework and toolset for building self-hosted data-centric visualization websites. Geared towards sharing of supplemental materials associated with scientific publications; Project χ allows visitors to interact with visualizations, download associated data and images, and even try the visualization with their own uploaded or publicly available datasets.  For developers the framework comes packaged with tools necessary for quickly integrating interactive visualizations using [d3.js](http://d3js.org/), [AngularJS](https://angularjs.org/), and [BioJS](http://biojs.io/). More information can be found [here](https://github.com/Hypercubed/Project-chi#readme).

## Installing this test

This project relies on the [Project χ platform](https://github.com/Hypercubed/Project-chi).  If you are not familiar with Project-χ please read the [readme](https://github.com/Hypercubed/Project-Chi/blob/master/README.md).  Note that you should be familiar with [JSPM](http://jspm.io/), [SystemJS](https://github.com/systemjs/systemjs), and [Gulp](http://gulpjs.com/).

## Quick Start

### Install and setup Project χ

```sh
git clone https://github.com/Hypercubed/Project-Chi.git
cd Project-Chi
git checkout tags/v1.0.0-beta-3  # ensure you are using the same version of Project χ
npm install # jspm install is run post-install by npm
```

### Install this Project

```sh
git clone https://github.com/thorWahlestedt/thor-chi dataset/thor-chi/
gulp dev --dataset=./dataset/thor-chi/  # navigate to http://localhost:9000
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

Copyright (c) Thor Wahlestedt

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
