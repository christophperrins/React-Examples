In the project directory, you can run the project with:

### `npm start`

The application will run on port 3001

Here the componentDidMount method was called. 

This is a method which is run when the component is rendered successfully.

The order it will go through is:

### While Mounting
- constructor()
- render ()
- componentDidMount()

### While Updating
- render ()
- componentDidUpdate()

### While Unmounting
- componentWillUnmount()