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
            { level: '★ 書評家 ★', type: '小說家、導演、總編輯', name: '阿文', book: '哈利波特'},
            { level: '★ 書評家 ★', type: '小說家、編劇、工程師', name: '阿德', book: '素肚黑肉男'},
            { level: '★ 書評家 ★', type: '小說家、編劇、董事長', name: '享享', book: '大賢者'},
            { level: '★ 書評家 ★', type: '小說家、編劇、體育老師', name: 'YO桑', book: '老菌俠'},
            { level: '★ 書評家 ★', type: '小說家、編劇、音樂老師', name: '伊藤正樹', book: '滷蛋騎士'},
            { level: '★ 書評家 ★', type: '小說家、編劇、美術老師', name: 'Amy', book: '迷妹'},
        ];
        // return books.map(({level,type,name,book})=> <BR_ReviewerList level={level} type={type} name={name} book={book} />)
        return books.filter(({name}) => ('阿德' === name)).map(({level,type,name,book})=> <BR_ReviewerList level={level} type={type} name={name} book={book} />)
        // return books.filter(({ name }) => name === '阿德').map(({ level, name, book }) => <BR_ReviewerList level={level} name={name} book={book}/>);
    };
  
    return (
        <>
        <h1>書評家</h1>
        <BR_DateTime />
        <BR_TodoWith />
        <BR_Navbar />
        <section className="reviewerList borderLine">
        {getBooks()}
        {getBooks()}
        {getBooks()}
        {getBooks()}
        {getBooks()}
        </section>
        </>
    )
}


export default Reviewer