import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import '../reviewer_page/BR_ReviewerList.css'

export class BR_ReviewerList extends React.Component {
  render() {
    return (
      <>
        <section className="d-flex">
          <div className="brAvatar borderLine">頭像
          <img className="brAvatarImg" src={require('../reviewer_page/images/31桑.png')}/>
          <h5>書評家<p>小說家、編劇、總編輯</p></h5>
          
          </div>

          <div className="brInfo borderLine">自我介紹
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
          </div>

          <div className="brDesk borderLine">我的書櫃
            <img className="brDeskBook" src={require('../reviewer_page/images/01書_說話之道.png')}/>
            {/* <iframe className="brYouTube" width="245" height="140" src="https://www.youtube.com/embed/1Thg-O_RPe4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            <iframe className="brYouTube" width="245" height="140" src="https://www.youtube.com/embed/uVIpHQMzvR8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div className="toFB">
            123
            </div>
            {/* <Link to="https://youtu.be/6_fzj0-VRHM">link</Link> */}
            </div>
        </section>
      </>
    )
  }
}

export default BR_ReviewerList
