import React, { useState, useEffect } from 'react'
import axios from 'axios'
import BR_ReviewerList from './reviewer_page/BR_ReviewerList'

function Reviewer() {
  const [books, setBooks] = useState([])
  useEffect(() => {
    ReviewerData()
  })
  const ReviewerData = () => {
    axios
      .get('http://localhost:5555/books')
      .then(res => {
        setBooks(res.data)
        console.log(res.data)
      })
      .catch(error => {
        console.log(error)
      })
  }
  
  return (
    <>
      {books.map(data => (
        <h4>{data.level}</h4>
      ))}
      <BR_ReviewerList />
    </>
  )
}

export default Reviewer
