import React, { useState, useEffect } from 'react'
import axios from 'axios'
import BR_ReviewerList from './reviewer_page/BR_ReviewerList'

function Reviewer() {

  const [brData, setData] = useState([])

  useEffect(() => {
    ReviewerData()
  },[])

  const ReviewerData = () => {
    axios
      .get('http://localhost:5555/reviewer_Data')
      .then(res => {
        setData(res.data)
        // console.log(res.data)
      })
      .catch(error => {
        // console.log(error)
      })
  }
  
  return (
    <>
      {brData.map(data => (
        <h4>{data.level}{data.name}</h4>
      ))}
      {/* <BR_ReviewerList /> */}
    </>
  )
}

export default Reviewer
