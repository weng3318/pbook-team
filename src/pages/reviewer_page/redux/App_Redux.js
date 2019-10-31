import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import TodoApp from './pages/reviewer_page/redux/TodoApp'

import { combineReducers } from 'redux'

// action
// {type: 'ADD_TODO', payload: {id, text} }
// ADD_TODO
// DEL_TODO
// UPDATE_TODO
//

function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [action.payload, ...state]
    case 'DEL_TODO':
      return state.filter(item => item.id !== action.payload.id)
    default:
      return state
  }
}

const rootReducer = combineReducers({
  todos,
})

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <TodoApp />
      </Provider>
    )
  }
}

export default App