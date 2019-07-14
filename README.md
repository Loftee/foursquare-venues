This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Approach
There are a lot of possibilities of options to implement the API. I choose to narrow down these options and keep things simple.
This meant only doing a basic search functionality within a fixed position and without any additional options. I chose to base this around oxford circus.

The user can search for venues close to oxford circus. They are then presented with a list of venues and the distance from oxford circus.

Upon selecting a venue they are then presented with the full address of the venue enabling them to navigate to it.

This could be expanded with providing maps and directions via a second API such as google maps.