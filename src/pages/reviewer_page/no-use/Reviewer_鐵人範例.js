import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router-dom'
// import './index.css';

class Reviewer extends React.Component {
  render () {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/users/1">Users 1</Link></li>
          <li><Link to="/users/2">Users 2</Link></li>
        </ul>
        {this.props.children} 
      </div>
    );
  }
}

class About extends React.Component {
  render () {
    return (<h1>About</h1>);
  }
}

class Users extends React.Component {
  render () {
    const id = this.props.params.userId;
    return (
      <div>
        user id: {id}
      </div>
    )
  }
}


export default Reviewer