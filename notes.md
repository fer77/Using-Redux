##   Reducer
A reducer function is _a function that returns a piece of the allocation state_  You can think of it as a javascript object:
`{
  books: [{title: 'Some Book'}, {title:'Some Other Book'}],
  activeBook: {title: 'Some Boring Book'}
  }`
  Reducers produce the value of the state(key) have a one to one pairing with the value of a key.

##   React/Redux
- Redux _Data contained in the application_.  Redux serves to construct the application state.

- React _Views contained in the application_.  React provides the view to display the states constructed by Redux.

- React/Redux _is a library that connects (bridges) React with Redux.  To do this we need to change (promote) one of our_ components _to a_ container.


##  Glossary
- Action and Action Creators _is a function that returns an action_.  These functions are use to change our state, they return an object (action) that is sent to our _reducers_.  Reducers can "choose" to return a different "piece" of state, causing our components to re-render.  Actions have two values a type and a payload (it describes the action).

- Container(smart component) _A container is a React component that has a direct connection to the state managed by Redux_.  It is aware of the state that is contained by Redux.
