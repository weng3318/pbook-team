import { createStore } from 'redux'

const store = createStore(reducer)

console.log(store.getState())