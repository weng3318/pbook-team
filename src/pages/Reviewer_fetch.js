import React, { useState, useEffect } from 'react'
import axios from 'axios'
import BR_ReviewerList from './reviewer_page/BR_ReviewerList'

import React, { Component } from 'react';

class Reviewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rsobj: {},
      isLoaded: false,
      error: null
    };
  }

  componentDidMount() {
    fetch("http://localhost:5555/reviewer_Data")
      .then(res => res.json())
      .then((result) => {
          this.setState({
            isLoaded: true,
            rsobj: result
          });
        },(error) => {
          this.setState({
            isLoaded: true,
            error: error
          });
        }
      )
  }

  render() {
    const { isLoaded, error, rsobj } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <p>{JSON.stringify(rsobj)}</p>
      );
    }
  }
}

export default Reviewer;
