import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import ReviewerBooks from './ReviewerBooks'
import BR_ReviewerList from './reviewer_page/BR_ReviewerList'
import BR_TodoWith from './reviewer_page/BR_TodoWith'
import BR_DateTime from './reviewer_page/BR_DateTime'
import BR_Navbar from './reviewer_page/BR_Navbar'

import Data from '../pages/reviewer_page/data/reviewer_data'

// json-server todo
// import {data} from '../pages/reviewer_page/data/reviewer_books'

export class Reviewer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
}

render() {    
    
    return (
        <Router>
        <>
        <h1>書評家</h1>
        <BR_DateTime />
        <button onClick={()=>this.props.history.push('/Reviewer')}>回到首頁</button>
        <BR_TodoWith />
        <BR_Navbar />

        <Link to="/ReviewerBooks/">看看書櫃</Link>

        <section className="reviewerList borderLine">
        {Data.map(({level,type,name,book,id})=>{
        return (<BR_ReviewerList key={id} to={'/ReviewerBooks/'+id} id={id} name={name} type={type} level={level} book={book}></BR_ReviewerList>)
        })}
        </section>

        <Switch>
        <Router exact path="/ReviewerBooks" component={ReviewerBooks} />
        <Router exact path="/" component={Reviewer} />
        <Route  exact path="/reviewerBooks/:id?" component={ReviewerBooks}/>
        </Switch>
      </>
        </Router>
    )
}
}
export default Reviewer




        {/* {Data.filter(({name})=>("YO桑" === name))
        .map(({name,type,level,book})=>{
        return <BR_ReviewerList name={name} type={type} level={level} book={book}/>})} */}
        