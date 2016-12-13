import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import VisibleTextField from '../containers/VisibleTextField'
import AddMessage from '../containers/AddMessage'


const App = () => (
  <div>
    <AddTodo />   
    <VisibleTodoList />
    <Footer />

    <AddMessage/>    
    <VisibleTextField />
    
  </div>
)


export default App