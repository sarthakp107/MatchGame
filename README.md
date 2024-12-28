# Match Game 

This project is a Match Game where users are given a set of cards that are initially faced backwards. The goal is to match pairs of cards by flipping them over. Players take turns to flip two cards at a time. If the cards match, they remain face up. If they don't match, the cards are flipped back to their initial state. The game continues until all pairs are matched. 

## Technologies Used 

Frontend: 
- React: JavaScript library for building user interfaces. 
- React Hooks: Utilized for managing state (useState), side effects (useEffect), and handling the game logic.

## Features 

1. Card Matching Logic 

- Initially, all cards are displayed faced down. 
- Players can click to flip the cards and attempt to find matching pairs. 
- Cards that are matched remain face up, while unmatched cards flip back over. 
- A score counter keeps track of the player's progress. 

2. Game State Management 

- The game state is managed using React's useState and useEffect hooks to track: 
- The current set of cards (face down or face up). 
- The currently flipped cards (to check for a match). 
- The number of turns taken by the player. 

3. Dynamic Card Generation 

- Cards are dynamically shuffled and displayed for each new game session. 

4. Turn Logic 

- After every two card flips, the game checks if the cards match. 
- If the cards match, they stay face up; if not, they flip back after a short delay. 

5. Win Condition 

- The game ends when all pairs of cards have been matched. 

 

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
