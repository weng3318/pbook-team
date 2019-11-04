import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import BR_ReviewerList from '../BR_ReviewerList'
import BR_TodoWith from '../BR_TodoWith'
import BR_DateTime from '../BR_DateTime'
import BR_Navbar from '../BR_Navbar'

import '../pages/reviewer_page/BR_Reviewer.css'

function ReviewerBooks () {
        
    return (
        <>
        <h1>看看書櫃</h1>
        <BR_DateTime />
        <BR_TodoWith />
        <BR_Navbar />
        <section className="reviewerBooks borderLine">

        </section>
        </>
    )
}

export default ReviewerBooks