import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import BR_ReviewerList from '../BR_ReviewerList'
import BR_TodoWith from '../BR_TodoWith'
import BR_DateTime from '../BR_DateTime'
import BR_Navbar from '../BR_Navbar'

import ReviewerBooks from '../../ReviewerBooks'
import Data from '../data/reviewer_data'

// json-server todo
// import {data} from '../pages/reviewer_page/data/reviewer_books'

export class Reviewer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
}

render() {
    const br_date = Data.map(({name}) => <>{name}</>);
    return (
        <Router>
        <>
        
        <h1>書評家</h1>
        <BR_DateTime />
        <BR_TodoWith />
        <BR_Navbar />

        <section className="reviewerList borderLine">
        <BR_ReviewerList name={br_date[3]}/>

        {Data.map((value)=>{
            return (<BR_ReviewerList name={value.name}/>)})}

        {Data.map(({level,type,name,book})=>{
        return<BR_ReviewerList level={level} type={type} name={name} book={book}/>})}


        </section>

        <Switch>
        <Route  exact path="/reviewerBooks/:id?" component={()=><BR_ReviewerList/>}/>  
        </Switch>
      </>
        </Router>
    )
  }
}
export default Reviewer

// <Router>
// <>

// <section className="reviewerList borderLine">
// {getBooks()}
// </section>

// </>
// </Router>
