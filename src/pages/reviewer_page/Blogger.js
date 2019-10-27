import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"

import '../reviewer_page/blogger.css'

function Blogger() {
    return (
        <>
         <h1 className="titleText">
         The day today is {new Date().toLocaleDateString()}</h1>
         <section className="wrapper"></section>
        </>
    )
}

export default Blogger