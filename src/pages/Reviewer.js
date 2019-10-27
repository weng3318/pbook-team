import React from 'react'
import Blogger from './reviewer_page/Blogger'
import DateTime from './reviewer_page/DateTime'
import TestAdd_01 from './reviewer_page/TestAdd_01'
import TestAdd_02 from './reviewer_page/TestAdd_02'

function Reviewer (){
    return (
        <>
        <h1>書評家</h1>
        <TestAdd_02 />
        <TestAdd_01 />
        {/* <DateTime /> */}
        <Blogger />
        </>
    )
}

export default Reviewer