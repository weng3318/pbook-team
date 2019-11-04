import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import ReviewerBooks from '../../pages/ReviewerBooks';

import '../reviewer_page/BR_Reviewer.css'

export class BR_ReviewerList extends React.Component {
  render(props) {
    return (
<Router>
      <>   
<section className="ReviewerListAllBox">
    <div className="d-flex">


          <div className="brAvatarAllBox borderLine">
              <h5>{this.props.level}</h5>
                  
              <img className="brAvatarImg" src={require('../reviewer_page/images/31桑.png')}/>
              <h5>{this.props.name}</h5>

              <div className="brIconBox">
                  <div className="AvatarInfo">{this.props.type}</div>
              </div>

              <Link to="/reviewerBooks" className="d-flex justify-content-center borderLineTop">
              <div className="brIconBox">
                <img src={require('../reviewer_page/images/P_logo.png')}/>
              </div>
              <div className="brReadBooks">看看書櫃</div>
              </Link>
              
              <Link>
              <div className="brIconBox borderLineTop">
                  <img className="brIconFollow" src={require('../reviewer_page/images/icon_follow.png')}/>
              </div>
              </Link>

              <Link>
              <div className="brIconBox borderLineTop">
                    <img className="brIconShare" src={require('../reviewer_page/images/icon_youtube.png')}/>
                    <img className="brIconShare" src={require('../reviewer_page/images/icon_facebook.png')}/>
                    <img className="brIconShare" src={require('../reviewer_page/images/icon_twitter.png')}/>
              </div>
              </Link>
          </div>

          <div className="brInfoBox borderLine"><h5>書評家簡介</h5>
              <div className="brInfoText borderLine">{this.props.info}
                  自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 
                  自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 
                  自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 >
                  自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 >
                  自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 >
                  自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 >
                  自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 > 自我介紹 >
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
          </div>
    </div>
        <iframe className="brYouTubeRWD borderLine" width="50%" height="auto" src="https://www.youtube.com/embed/uVIpHQMzvR8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</section>
        <div style={{height:'30px'}}></div>

         {/* <Switch>
          <Route exact path="/reviewerBooks/:id?" component={ReviewerBooks} />     
         </Switch> */}
      </>
        </Router>
    )
  }
}

export default BR_ReviewerList
