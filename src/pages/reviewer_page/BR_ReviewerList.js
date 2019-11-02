import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import ReviewerBooks from '../../pages/ReviewerBooks';

import '../reviewer_page/BR_Reviewer.css'

export class BR_ReviewerList extends React.Component {
  render() {
    return (
      <>   
<section className="ReviewerListAllBox">
    <div className="d-flex">

          <div className="brAvatarBox borderLine">
              <img className="brAvatarImg" src={require('../reviewer_page/images/31桑.png')}/>
              <h5>書評家<p>{this.props.type}</p></h5>
          </div>

          <div className="brInfoBox borderLine"><h5>書評家簡介</h5>
              <div className="brInfoText borderLine">
              <p>
                  自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 
                  自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 
                  自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 >
                  自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 >
                  自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 >
                  自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 >
                  自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 >
                  自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 >
                  自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 >
                </p>
              </div>
          </div>
    </div>


    <div className="brMyBooksBox borderLine">
          {/* <img className="brBookSize borderLine" src={require('../reviewer_page/images/01書_說話之道.png')}/> */}
          <p className="textMedia">我的書櫃</p>
      <Link to="/reviewerBooks">
          <img className="brMyBooks borderLine"/>
      </Link>
      </div>
      
        <div className="brMyVideoBox borderLine">
            <p className="textMedia">書評影片</p>
            <Link to="/reviewerBooks">
            <iframe width="100%" height="auto" src="https://www.youtube.com/embed/uVIpHQMzvR8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Link>
        <div className="brIconBox d-flex borderLine">
              {/* <img className="brIcon" src={require('../reviewer_page/images/icon_youtube.png')}/>
              <img className="brIcon" src={require('../reviewer_page/images/icon_facebook.png')}/>
              <img className="brIcon" src={require('../reviewer_page/images/icon_twitter.png')}/> */}
              <img className="brIcon" src={require('../reviewer_page/images/icon_follow.png')}/>
        </div>
        </div>

</section>
        {/* <Router>
         <Switch>
          <Route exact path="/reviewerBooks" component={ReviewerBooks} />     
         </Switch>
        </Router> */}
      </>
    )
  }
}

export default BR_ReviewerList
