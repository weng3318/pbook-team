import React from 'react'
import Data from '../pages/reviewer_page/data/reviewer_data'
import {withRouter} from 'react-router-dom'
import BR_ReviewerList from './reviewer_page/BR_ReviewerList'
import BR_Bookcase from './reviewer_page/BR_BookcaseList'
import BR_BookcaseHot from './reviewer_page/BR_BookcaseHot'
import axios from 'axios';

class ReviewerBooks extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      brData: [],
    }
  }
  componentDidMount() {
    axios
      .get('http://localhost:5555/reviewer_Data')
      .then(res => {
        this.setState({ brData: res.data })
        console.log('第一次取資料' + res.data)
      })
      .catch(function(error) {
        console.log('取資料失敗' + error)
      })

    axios
      .get('/reviewer_Data/', {
        params: {
          id: 3,
        },
      })
      .then(function(res) {
        console.log('資料連線成功' + res)
      })
      .catch(function(error) {
        console.log('404！資料連線失敗' + error)
      })
    }
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

        {this.state.brData.map(({ bookcase })=>(
          console.log('書評家的書籍列'+bookcase)
          ))}
    return (
        <>
        <h1>看看書櫃</h1>
        <section className="reviewerBooks borderLine">
      
        {/* 接應id的書評家個人介紹 */}
        <BR_ReviewerList key={reviewerData.id} 
        id={reviewerData.id} name={reviewerData.name} 
        type={reviewerData.type} level={reviewerData.level} 
        info={reviewerData.info} tube={reviewerData.tube}
        >
        </BR_ReviewerList>
        
        {/* 熱門書評列表 */}
        <BR_BookcaseHot />

        {/* 接應id的書評家個人書櫃 */}
        <BR_Bookcase key={reviewerData.id} 
        id={reviewerData.id} 
        >
        </BR_Bookcase>

        {/* {this.state.brData.map(({ id, bookcase })=>(
          <BR_Bookcase key={id}
          id={id}
        bookcase={bookcase}
        ></BR_Bookcase>
        ))} */}

        </section>
        </>
    )
  }
}

export default withRouter(ReviewerBooks)
