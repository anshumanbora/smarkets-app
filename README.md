# smarkets-app
## About
Application to demonstrate some basic functionalities of smarkets.com's API.
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Application Interface Walkthrough
1. List of events: The first interface is a list of current popular events returned from smarkets' API.
2. Detailed View: On clikcing any event, this view will show relevant details for the event.
See Screenshots to get a better understanding.

## API
API Endpoint to get trending/popular events:
```
https://fe-api.smarkets.com/v0/events/popular/
```
API Endpoint to get details about an event:
```
https://fe-api.smarkets.com/v0/events/id/<event_id>

```
### Technology
React

Bootstrap

Enzyme

Cross-Origin-Resource-Sharing extension for Chrome.

## Folder Structure

```
smarkets-app/
  README.md
  node_modules/
  package.json
  public/
    main.css
    index.html
    favicon.ico
  src/
    components/
      Details.js
      Event.js
      EventView.js
      Event.test.js
      EventView.test.js
    App.css
    App.js
    App.test.js
    index.css
    index.js
    setupTests.js
```
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>

## Screenshots
1. Main view
![Main list](https://raw.githubusercontent.com/anshumanbora/smarkets-app/master/images/screenshot_1.PNG)


2. Details view
![Details](https://raw.githubusercontent.com/anshumanbora/smarkets-app/master/images/screenshot_2.PNG)

