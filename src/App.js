import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

/*
  react-router => The core foundational library that the others ones use
  react-router-dom => The web based library to do dom manipulation. Web Apps
  react-router-native => The mobile based library for react native apps. Mobile Apps
*/

/*
  localhost:3000/
  localhost:3000/aboutus
*/

const Home = (props) => {
  return (
    <>
      <h1>Welcome to the home page</h1>
      <Link to='/aboutus'>About Us</Link>
      <a href='/aboutus'>About Us</a>
    </>
  )
}

const Aboutus = (props) => {
  return (
    <>
      <h1>About us page</h1>
      <Link to='/'>Home Page</Link>
      <a href='/'>Home Page</a>
    </>
  )
}

/*

  userTypedPath : '/aboutus'

  Without Exact:
    userTypedPath.contains(path)
  With Exact:
    userTypedPath === path 
*/

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Route path='/aboutus' component={Aboutus} />
          <Route path='/' exact component={Home} />
        </>
      </BrowserRouter>
    );
  }
}

export default App;