import React, { useState, useEffect } from 'react'
import axios from 'axios'
import BR_ReviewerList from './reviewer_page/BR_ReviewerList'

import React, { Component } from 'react';

import { Get } from 'react-axios';

class Reviewer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Get url="https://httpbin.org/get" >
          {(error, response, isLoading, onReload) => {
            if(error) {
              return (<div>Something bad happened: {error.message} <button onClick={() => onReload({ params: { reload: true } })}>Retry</button></div>)
            }
            else if(isLoading) {
              return (<div>Loading...</div>)
            }
            else if(response !== null) {
              return (<div>{JSON.stringify(response)} <br/> <button onClick={() => onReload({ params: { refresh: true } })}>Refresh</button></div>)
            }
            return (<div>Default message before request is made.</div>)
          }}
        </Get>
      </div>
    )
  }
}

export default Reviewer;
