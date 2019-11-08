import axios from 'axios'
import BR_ReviewerList from './reviewer_page/BR_ReviewerList'
import React from 'react'

export class Reviewer_axios_Arwen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      brDada: [],
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
    axios
      .get('http://localhost:5555/reviewer_Data?id=3')
      .then(res => {
        this.setState({
          brDada: res.data,
        })
        console.log(res.data)
      })
      .catch(function(error) {
        console.log(error)
      })

    // 可選，上方請求指令
    // axios
    //   .get('/reviewer_Data/', {
    //     params: {
    //       id: 3,
    //     },
    //   })
    //   .then(function(res) {
    //     console.log('資料連線成功' + res)
    //   })
    //   .catch(function(error) {
    //     console.log('404！資料連線失敗' + error)
    //   })
  }

  render() {
    return (
      <div>
        {this.state.brDada.map(data => (
          <h1>{data.name}</h1>
        ))}
        <img
          src={require('./reviewer_page/BR_images/03書_React全方位基礎入門實戰.png')}
        />
      </div>
    )
  }
}

export default Reviewer_axios_Arwen
