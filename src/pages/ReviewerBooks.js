import React from 'react'
import '../pages/reviewer_page/BR_Reviewer.css'
import Data from '../pages/reviewer_page/data/reviewer_data'
import {withRouter} from 'react-router-dom'
import BR_ReviewerList from './reviewer_page/BR_ReviewerList'

class ReviewerBooks extends React.Component {
      render() {

    let reviewerData = null

    for (let i = 0; i < Data.length; i++) {
      if (Data[i].id == this.props.match.params.id) {
        reviewerData = Data[i]
      }
    }

    if(!reviewerData){
        return(
        <>
        <h1>找不到資料<br/></h1>
        <button onClick={()=>this.props.history.push('/reviewer')}>回到首頁</button>
        </>
        )}

    return (
        <>
        <h1>看看書櫃</h1>
        {/* <h4><button onClick={()=> this.props.history.push('/Reviewer')}>回到首頁</button></h4> */}
        <section className="reviewerBooks borderLine">
        <BR_ReviewerList key={reviewerData.id} id={reviewerData.id} name={reviewerData.name} type={reviewerData.type} level={reviewerData.level} info={reviewerData.info} tube={reviewerData.tube}></BR_ReviewerList>
        </section>
        </>
    )
  }
}

export default withRouter(ReviewerBooks)
