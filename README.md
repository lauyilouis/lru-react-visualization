# LRU (Least Recently Used) Cache Visualization Playground
Codesandbox (Live IDE): https://codesandbox.io/s/lru-react-visualization-g4s9n
 
This is a React.js and Redux.js project for visualizing the LRU Cache implementation. Using `@testing-library/react` for unit testing.

Data structure used: Hashtable + Doubly Linked List  
Time Complexitiy for add operation: O(1)  
Time Complexitiy for print operation: O(n)  
Space Complexitiy: O(n)

Instead of using normal `ListNode` class, to support redux serialization nature, a serizlized version of doubly linked list is implemented at redux store.

Example:
```
{
  store: {
    "Chocolate": {
      next: "Apple",
      prev: null,
    },
    "Apple": {
      next: "null",
      prev: "Chocolate",
    },
  },
  head: "Chocolate",
  tail: "Apple"
}
```

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
### `yarn test-ci`

Launches the test runner in the non-interactive mode.<br />

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
