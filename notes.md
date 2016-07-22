##   Reducer
A reducer is _a function that returns a piece of the allocation state_  You can think of it as a javascript object:
`{
  books: [{title: 'Some Book'}, {title:'Some Other Book'}],
  activeBook: {title: 'Some Boring Book'}
  }`
  Reducers produce the value of the state(key) have a one to one pairing with the value of a key.

##   React/Redux
- Redux _Data contained in the application_.
- React _Views contained in the application_.

- React/Redux _is a library that connects (bridges) React with Redux.  To do this we need to change (promote) one of our_ components _to a_ container.

- Container(smart component) _A container is a React component that has a direct connection to the state managed by Redux_.  It is aware of the state that is contained by Redux.
