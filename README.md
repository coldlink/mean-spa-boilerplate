# mean-spa-boilerplate
Boilerplate to quickly prototype mean stack single page applications

Quickstart:
```sh
$ git clone https://github.com/coldlink/mean-spa-boilerplate.git
$ cd mean-spa-boilerplate
$ npm install
$ bower install
$ node server
```

Structure:
```
    - app
      - models
        - data.js     //test model for crud
      - routes.js     //api routes for crud
    - config
      - db.js         //mongo database url 
    - node_modules
    - public          //frontend/angularjs
      - css
      - js
        - controllers            //angular controllers
          - MainCtrl.js             //Controller for homepage
          - DataCtrl.js             //Controller for data page
        - services               //angular services
          - DataService.js          //Service to handle $http routes on frontend for data
        - app.js                 //angular application config
      - img
      - bower_components
      - views 
        - home.html              //homepage
        - data.html              //data page
        - index.html
    - .bowerrc
    - bower.json
    - package.json
    - server.js
```
