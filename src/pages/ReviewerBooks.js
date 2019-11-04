import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import BR_ReviewerList from './reviewer_page/BR_ReviewerList'
import BR_TodoWith from './reviewer_page/BR_TodoWith'
import BR_DateTime from './reviewer_page/BR_DateTime'
import BR_Navbar from './reviewer_page/BR_Navbar'

import '../pages/reviewer_page/BR_Reviewer.css'
import Data from '../pages/reviewer_page/data/reviewer_data'

const ReviewerBooks = (props) => {

    let reviewerData = null

    // 比對id
    for(let i = 0; i<Data.length; i++){
        if (Data[i].id == props.match.params.id){
            reviewerData = Data[i]
        }
        
    }

    // if(!reviewerData){
    //     return
    //     <>
    //     找不到資料<br/>
    //     {/* <PathNow/> */}
    //     <button onClick={()=>props.history.push('/')}>回到首頁</button>
    //     </>
    // }
    
    return (
        <>
        <h1>看看書櫃</h1>
        
        <section className="reviewerBooks borderLine">
        {/* 書評列表組件，要裝上資料 */}
        {/* 錯誤待修 */}
        {/* <BR_ReviewerList name={reviewerData.name}/> */}
        </section>
        </>
    )
}

export default ReviewerBooks