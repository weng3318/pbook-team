import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import BR_ReviewerList from './reviewer_page/BR_ReviewerList'
import BR_TodoWith from './reviewer_page/BR_TodoWith'
import BR_DateTime from './reviewer_page/BR_DateTime'
import BR_Navbar from './reviewer_page/BR_Navbar'

import '../pages/reviewer_page/BR_ReviewerList.css'

function Reviewer (){
    return (
        <>
        <h1>書評家</h1>
        <BR_DateTime />
        <BR_TodoWith />
        <BR_Navbar />
        <section className="reviewerList borderLine">
        <BR_ReviewerList />
        <BR_ReviewerList />
        <BR_ReviewerList />
        <BR_ReviewerList />
        <BR_ReviewerList />
        <BR_ReviewerList />
        </section>
        </>
    )
}

export default Reviewer