import React from 'react'
import BR_ReviewerList from './reviewer_page/BR_ReviewerList'
import axios from 'axios'

// 書評家使用的CSS
import '../pages/reviewer_page/BR_Bookcase.css'
import '../pages/reviewer_page/BR_Reviewer.css'

// fetch api todo
import BR_fetch_api from './reviewer_page/BR_fetch_api'

// -------本地資料-------
// import Data from '../pages/reviewer_page/data/reviewer_data'
// -------本地資料-------

export class Reviewer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      brDada: []
    } 
  }
  componentDidMount() {
      axios.get('http://localhost:5555/reviewer_Data').then(res => {
          this.setState({brDada: res.data})
          console.log('第一次取資料'+res.data)
        })
        .catch(function(error) {
          console.log('取資料失敗'+error)
        })
  
      axios.get('/reviewer_Data/', {
          params: {
            id: 3,
          },
        })
        .then(function(res) {
          console.log('資料連線成功' + res)
        })
        .catch(function(error) {
          console.log('404！資料連線失敗' + error)
        })
    }
  render() {
    return (
      <>
        <h1>書評家</h1>

        {/* {Data.filter(({name})=>("YO桑" === name))
        .map(({id,name,type,level,info,tube})=>{
        return <BR_ReviewerList id={id} tube={tube} name={name} type={type} level={level} info={info}/>})} */}

        {this.state.brDada.map((data) => (
          <BR_ReviewerList key={data.id}
          to={'/ReviewerBooks/' + data.id}
          name={data.name} type={data.type} level={data.level}
          tube={data.tube} id={data.id}
          ></BR_ReviewerList>
        ))}
        {/* <img src={require('./reviewer_page/BR_images/03書_React全方位基礎入門實戰.png')} */}
      
        {/* {this.state.brData.map(({ level, type, name, info, id, tube }) => {
          return (
            <BR_ReviewerList key={id}
              to={'/ReviewerBooks/' + id}
              id={id} name={name} type={type} tube={tube}
              level={level} info={info}></BR_ReviewerList>
          )
        })} */}
      </>
    )
  }
}
export default Reviewer