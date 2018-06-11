import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import AddNum from '../containers/addNum'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <AddNum />
  </div>
)

export default App