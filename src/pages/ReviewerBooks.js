import React from 'react'
import BR_ReviewerList2 from './reviewer_page/BR_ReviewerList2'
import BR_TodoWith from './reviewer_page/BR_TodoWith'
import BR_DateTime from './reviewer_page/BR_DateTime'
import BR_Navbar from './reviewer_page/BR_Navbar'

import '../pages/reviewer_page/BR_Reviewer.css'
import Data from '../pages/reviewer_page/data/reviewer_data'

class ReviewerBooks extends React.Component {
      render(props) {

    let reviewerData = null

    for (let i = 0; i < Data.length; i++) {
      if (Data[i].id == this.props.match.params.id) {
        reviewerData = Data[i]
      }
    }

    // if(!reviewerData){
    //     return
    //     <>
    //     找不到資料<br/>
    //     <button onClick={()=>this.props.history.push('/')}>回到首頁</button>
    //     </>
    // }
console.log()
    return (
        <>
        <h1>看看書櫃</h1>
        {/* <BR_DateTime />
        <BR_TodoWith />
        <BR_Navbar /> */}
        <section className="reviewerBooks borderLine">
        <BR_ReviewerList2 id={reviewerData.id} name={reviewerData.name} type={reviewerData.type} level={reviewerData.level} book={reviewerData.book}/>
        </section>
        </>
    )
  }
}

export default ReviewerBooks
