import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import BR_ReviewerList from './reviewer_page/BR_ReviewerList'
import BR_TodoWith from './reviewer_page/BR_TodoWith'
import BR_DateTime from './reviewer_page/BR_DateTime'
import BR_Navbar from './reviewer_page/BR_Navbar'

import Home from './Home'
import ReviewerBooks from './ReviewerBooks'

// function Reviewer (){
    // const getBooks = () => {
    //     const books = [
    //         { id:'1', level: '★ 書評家 ★', type: '小說家、導演、總編輯', name: '阿文', book: '哈利波特'},
    //         { id:'2', level: '★ 書評家 ★', type: '小說家、編劇、工程師', name: '阿德', book: '素肚黑肉男'},
    //         { id:'3', level: '★ 書評家 ★', type: '小說家、編劇、董事長', name: '享享', book: '大賢者'},
    //         { id:'4', level: '★ 書評家 ★', type: '小說家、編劇、體育老師', name: 'YO桑', book: '老菌俠'},
    //         { id:'5', level: '★ 書評家 ★', type: '小說家、編劇、音樂老師', name: '伊藤正樹', book: '滷蛋騎士'},
    //         { id:'6', level: '★ 書評家 ★', type: '小說家、編劇、美術老師', name: 'Amy', book: '迷妹'},
    //     ];
    //     return books.map(({level,type,name,book})=> <BR_ReviewerList level={level} type={type} name={name} book={book} />)
        // return books.filter(({name}) => ('阿德' === name)).map(({level,type,name,book})=> <BR_ReviewerList level={level} type={type} name={name} book={book} />)
    // };
    function Reviewer() {
        const [books, setBooks] = useState([])
        useEffect(() => {
          ReviewerData()
        },[])
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
            <section className="reviewerList borderLine">
            {books.map(data => (<BR_ReviewerList>{data.level}</BR_ReviewerList>))}
            </section>    
            </>
          )

    //     <Router>
    //     <>
    //     <h1>書評家</h1>
    //     <BR_DateTime />
    //     <BR_TodoWith />
    //     <BR_Navbar />
        
    //     <ul>
    //     <li><Link to='/'>書評家</Link></li>
    //     <li><Link to='/ReviewerBooks'>書評家列表</Link></li>
    //     </ul>

    //     <section className="reviewerList borderLine">
        
    //     {getBooks()}
    //     </section>
        
    //     <Switch>
    //      {/* <Route  exact path="/" component={()=><BR_ReviewerList/>}/>   */}
    //      <Route  exact path="/" component={Home}/>  
    //      <Route  exact path="ReviewerBooks/:id?" component={ReviewerBooks}/>       
    //     </Switch>
    //     </>
    //     </Router>
    // )
}


export default Reviewer