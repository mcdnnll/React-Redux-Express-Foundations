# React-Redux-Express-Foundations

Opinionated project scaffolding for full-stack JS web applications.

Frontend:
* React
* Redux
* Redux-router
* React-router
* Webpack

Backend:
* Node + Express

---

### Getting Started

1. Run `npm install`
2. Run `gulp` to build static resources and start development server
3. Navigate browser to `http://localhost:9000`

### Further Configuration
* Node-config is used to manage paths, endpoints and other common project details. Update `development.json` and `production.json` in `/config` to suit individual environment.
* `gulpfile.js` contains a range of ancillary build tasks:
  * __Development:__
    * `gulp dev` - run webpack-dev-server with hot reloading
    * `gulp serve` - run express development server
  * __Production:__
    * `gulp prod` - build production bundles and run production server

---

### License
MIT
