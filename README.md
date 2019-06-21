# Lab-16
## Event Driven Applications

### Author: Chloie Parsons 

## Links and Resources
* [Submission PR](https://github.com/chloieparsons-401-advanced-javascript/lab-16/pull/1)
* [Travis](https://www.travis-ci.com/chloieparsons-401-advanced-javascript/lab-16)


## Modules
* ```app.js``` 
    - Opens the text file and saves it to uppercase; emits a log message if saved or if error occured.

* ```logger.js```
    - If data is saved, a save message is emitted; if an error occurs, then an error message is emitted.

* ```toUpper.js```
    - Takes data and converts it to an uppercase string.

* ```promisify.js```
    - Uses ```util.promisify``` to read and write files.

* ```src/events/event.js```
    - Emits events.

* ```src/events/logger.js```
    - Saves data as it comes in and sends a saved message; also notifies when an error occurs.


## Running the app
* ```npm i``` (to install dependencies)

* ```npm run start``` (fires up node app.js)

## Tests
* ```npm run test```
* ```npm run test-watch```
* ```npm run lint```

## UML
![TCP](assets/event.JPG)