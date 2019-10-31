import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import '../reviewer_page/ReviewerList.css'

export class ReviewerList extends React.Component {
  render() {
    return (
      <>
        <section className="wrapper borderLine flex">
          <div className="Avatar borderLine">頭像</div>
          <div className="bookText borderLine">文字</div>
          <div className="bookInfo borderLine">書籍</div>
        </section>

          <img src={require('../reviewer_page/images/01_書評家.png')} className="testPic img-fluid header-img" alt=""/>
      </>
    )
  }
}

export default ReviewerList
