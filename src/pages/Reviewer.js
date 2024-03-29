import React from 'react'
import BR_ReviewerList from './reviewer_page/BR_ReviewerList'
import axios from 'axios'

// 書評家使用的CSS
import '../pages/reviewer_page/BR_Bookcase.css'
import '../pages/reviewer_page/BR_Reviewer.css'

// fetch api todo
// import BR_fetch_api from './reviewer_page/BR_fetch_api'

export class Reviewer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      brData: [],
    }
  }
  componentDidMount() {
    axios
      .get('http://localhost:5555/reviewer_Data')
      .then(res => {
        this.setState({ brData: res.data })
        console.log('取資料' + res.data)
      })
      .catch(function(error) {
        console.log('取資料失敗' + error)
      })

    axios
      .get('/reviewer_Data/', {
        params: {
          id: 3,
        },
      })
      .then(function(res) {
        console.log('資料連線成功' + res)
      })
      .catch(function(error) {
        console.log('沒有取得資料請執行 json-server --watch --port 5555 reviewer_Data.json ' + error)
      })
  }
  render() {
      // let as = this.state.brData.filter(({name}) => {
      // return  ( name === 'YO桑')
      // })
      // console.log(as)
    return (
      <>
        <h1>書評家</h1>

        {/* <img src={require('./reviewer_page/images_books/03書_React全方位基礎入門實戰.png')}/> */}

        {this.state.brData.filter(({name})=>("阿德" == name))
        .map(({ level, type, name, info, id, tube, bookcase }) => (
          <BR_ReviewerList key={id}
          to={'/ReviewerBooks/' + id}
          name={name} type={type} level={level}
          tube={tube} id={id} info={info} bookcase={bookcase}
          ></BR_ReviewerList>
        ))}
              
        {this.state.brData.map(({ level, type, name, info, id, tube, bookcase }) => (
          <BR_ReviewerList key={id}
          to={'/ReviewerBooks/' + id}
          name={name} type={type} level={level}
          tube={tube} id={id} info={info} bookcase={bookcase}
          ></BR_ReviewerList>
        ))}
      </>
    )
  }
}
export default Reviewer
