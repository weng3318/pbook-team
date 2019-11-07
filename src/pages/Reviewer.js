import React from 'react'
import BR_ReviewerList from './reviewer_page/BR_ReviewerList'
import Data from '../pages/reviewer_page/data/reviewer_data'

// 書評家，使用的CSS
import '../pages/reviewer_page/BR_Edit_Books.css'
import '../pages/reviewer_page/BR_Reviewer.css'

// json-server todo
import Reviewer_axios from './Reviewer_axios'
// import {data} from '../pages/reviewer_page/data/reviewer_books'

export class Reviewer extends React.Component {
  render() {
    return (
      <>
        <h1>書評家</h1>
        {/* <Reviewer_axios /> */}

        {/* {Data.filter(({name})=>("YO桑" === name))
        .map(({id,name,type,level,info,tube})=>{
        return <BR_ReviewerList id={id} tube={tube} name={name} type={type} level={level} info={info}/>})} */}

        {Data.map(({ level, type, name, info, id, tube }) => {
          return (
            <BR_ReviewerList key={id}
              to={'/ReviewerBooks/' + id}
              id={id} name={name} type={type} tube={tube}
              level={level} info={info}></BR_ReviewerList>
          )
        })}
      </>
    )
  }
}
export default Reviewer

