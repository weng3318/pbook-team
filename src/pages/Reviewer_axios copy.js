import React, { useState, useEffect } from 'react'
import axios from 'axios'
import BR_ReviewerList from './reviewer_page/BR_ReviewerList'

function Reviewer() {
  const [brData, setData] = useState([])
  useEffect(() => {
    reviewerData()
  }, [])

  const reviewerData = () => {
    axios
      .get('get', 'http://localhost:5555/reviewer_Data')
      .then(res => {
        setData(res.data)
      })
      .catch(error => {})
  }

  return (
    <>
      {brData.map(data => (
        <h5>{data.name}</h5>
      ))}
    </>
  )
}

export default Reviewer
