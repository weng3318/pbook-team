import React from 'react'
import Blogger from './reviewer_page/Blogger'
import TodoWith from './reviewer_page/TodoWith'
import DateTime from './reviewer_page/DateTime'

function Reviewer (){
    return (
        <>
        <h1>書評家</h1>
        <DateTime />
        <TodoWith />
        <Blogger />
        </>
    )
}

export default Reviewer