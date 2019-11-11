import axios from 'axios'
import BR_ReviewerList from './reviewer_page/BR_ReviewerList'
import React from 'react'

export class Reviewer_axios_Class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      brDada: []
    }
  }

  // componentDidMount = async () => {
  //   const dataCase = await fetch('https://demojson.herokuapp.com/cart').then(
  //     response => response.json()
  //   )
  //   this.setState({
  //     brDada: response.dataCase
  //   })
  //   console.log('資料連線測試' + response.dataCase)
  // }

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
        {this.state.brDada.map((data) => (
          <h1>{data.name}</h1>
        ))}
        {/* <img src={require('./reviewer_page/BR_images/03書_React全方位基礎入門實戰.png')} */}
      </>
    )
  }
}

export default Reviewer_axios_Class
