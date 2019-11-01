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

          <div className=".brAvatarBox borderLine">頭像
              <img className="brAvatarImg" src={require('../reviewer_page/images/31桑.png')}/>
              <h5>書評家<p>小說家、編劇、總編輯</p></h5>
          </div>

          <div className=".brAvatarBox borderLine">頭像
              <h5>書評家簡介
               <p>自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 
                  自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 
                  自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 >
                  自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 >
                  自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 >
                  自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 >
                  自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 >
                  自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 >
                  自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 >
                </p>
              </h5>
            </div>
          {/* <div className="brInfoBox borderLine">自我介紹
              <div className="brInfoText borderLine">
                自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 
                自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 
                自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 >
                自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 >
                自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 >
                自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 >
                自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 >
                自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 >
                自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 >
              </div>
          </div> */}
    </div>

          <div className="brMediaBox borderLine">我的書櫃

          <div className="d-flex">
          {/* 超連結 → 我的書櫃 */}
            <div className="brMyBooks borderLine">
              <Link to="/reviewerBooks">
                <img className="brDeskBook borderLine" src={require('../reviewer_page/images/01書_說話之道.png')}/>
                <p className="textReadBook">看看書櫃</p>
              </Link>
            </div>
          
            <div className="brMyVideo borderLine">
                <iframe className="brYouTube" width="245" height="140" src="https://www.youtube.com/embed/uVIpHQMzvR8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p className="textReadVideo">書評影片</p>
            </div>
          </div>

            <section className="brIconBox d-flex borderLine">
            <div className="brIconCommunity d-flex borderLine">
                <img className="brIcon" src={require('../reviewer_page/images/icon_youtube.png')}/>
                <img className="brIcon" src={require('../reviewer_page/images/icon_facebook.png')}/>
                <img className="brIcon" src={require('../reviewer_page/images/icon_twitter.png')}/>
            </div>

            <div className="brIconFollow d-flex borderLine">
                <img className="brIcon" src={require('../reviewer_page/images/icon_follow.png')}/>
            </div>
            </section>

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
