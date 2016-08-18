# angular-txt

## Usage

- follow instructions here https://teletext.io/help/get-started

- include 

```
<!doctype html>
<html ng-app="myApp">
<head>

</head>
<body>
    ...
    <script src="bower_components/angular-txt/src/angular-txt.js"></script>
    ...
    <script>
        var myApp = angular.module('myApp', ['angular.txt']);
    </script>
    ...
</body>
</html>
```
- Ex: `<div ng-data-txt="example.key">Text to be replaced</div>`

## Development

1. `npm install`

1. `npm start` 

1. open browser `http://localhost:8081`

## Tests

1. `npm test`
