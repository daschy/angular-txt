# angular-txt

## Usage

- follow instructions here https://teletext.io/help/get-started
- `bower install 'git@github.com:redbabel/angular-txt.git' --save`
- include 
    ```html
    <!doctype html>
    <html ng-app="myApp">
    <head>

    </head>
    <body>
        <div ng-data-txt="example.title">Text to be replaced</div>
        ...
        <script src="bower_components/angular-load/src/angular-load.min.js"></script>
        <script src="bower_components/angular-txt/src/angular-txt.js"></script>
        ...
        <script>
            var myApp = angular.module('myApp', ['angular.txt']);
        </script>
        ...
    </body>
    </html>
    ```

## Configuration
```javascript
angular.module('myApp', ['angular-txt'])
    .config(['dataTxtProvider', function(dataTxtProvider) {
        dataTxtProvider.setOptions({
            id: '695c6c04-10d6-4c2e-b05d-72f5fcaaea6b', // Compulsory 
            locale: 'nl-NL', // Compulsory
            defaultLocale: 'en-EN', // Optional
            defaultFile: null,// Optional
            editButtonPostion: null, // Optional
            editOnlyMode: null,// Optional
            scriptUrl: 'https://teletext.io/js/1.5.2/txt-min.js', // Optional
            debug: false, // Optional: default false
            load: true, // Optional default true. If false does not load on start
        });
    }])
```


## Development

1. `npm install`

1. `npm start` 

1. open browser `http://localhost:8081?locale=nl-NL`

## Tests

1. `npm test`
