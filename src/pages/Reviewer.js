import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import BR_ReviewerList from './reviewer_page/BR_ReviewerList'
import BR_TodoWith from './reviewer_page/BR_TodoWith'
import BR_DateTime from './reviewer_page/BR_DateTime'
import BR_Navbar from './reviewer_page/BR_Navbar'

import ReviewerBooks from '../pages/ReviewerBooks'



function Reviewer (){

    const getBooks = () => {
        const books = [
            { type: '小說家、編劇、總編輯', name: '阿文', book: '哈利波特'},
            { type: 'A', name: '阿德0', book: '速度'},
            { type: 'B', name: '想想', book: '老婆'},
            { type: 'C', name: 'YO', book: 'AA'},
            { type: 'D', name: 'joe', book: 'BB'},
            { type: 'E', name: '小姚', book: '哈利波CC特'},
        ];
        // return books.map(({ type, name, book }) => <BR_ReviewerList type={type} name={name} book={book}/>);
        return books.filter(({ name }) => name === '阿德0').map(({ type, name, book }) => <BR_ReviewerList type={type} name={name} book={book}/>);
    };
  
    return (
        <>
        <h1>書評家</h1>
        <BR_DateTime />
        <BR_TodoWith />
        <BR_Navbar />
        <section className="reviewerList borderLine">
        {getBooks()}
        </section>
        </>
    )
}


export default Reviewer