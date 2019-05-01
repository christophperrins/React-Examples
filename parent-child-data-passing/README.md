In the project directory, you can run the project with:

### `npm start`

This server will run on port 3002

The Parent class in this project sends a setHeader function into the child, so that the child can run a function in the parent which will change the parents state.

The Child class displays the footer value sent to it from the Parent class. It also runs the setHeader function everytime a change is detected in its textbox.