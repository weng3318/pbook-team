import React from 'react'
import ReviewerList from './reviewer_page/ReviewerList'
import TodoWith from './reviewer_page/TodoWith'
import DateTime from './reviewer_page/DateTime'
import Navbar from './reviewer_page/Navbar'

function Reviewer (){
    return (
        <>
        <h1>書評家</h1>
        <DateTime />
        <TodoWith />
        <Navbar />
        <ReviewerList />
        </>
    )
}

export default Reviewer