import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Components/Home'
import Search from './Components/Search'
class BooksApp extends React.Component {
  state = {
    
  }

  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Home}/>
        <Route   path="/search" component={Search}/>
      </BrowserRouter>
    )
  }
}

export default BooksApp
