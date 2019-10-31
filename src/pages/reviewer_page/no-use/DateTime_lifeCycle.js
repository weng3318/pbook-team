import React from 'react'

class DataTime extends React.Component {
  // 在建構子設定state的初始值
  constructor(props) {
    super(props)
    this.state = {
      currentTime: new Date().toLocaleString(),
    }
  }
  
  // 在Component render到真實DOM中，使用ComponentDidMount，
  // 並在裡面使用setInterVal，並將回傳的計時器id存放在timerId中

  // 在生命週期發生時 宣告時間進行函式,帶秒數
  componentDidMount() {
    this.timerId = setInterval(this.updateTime, 1000)
  }

  // 在component即將從真實DOM中移除之前，使用componentWillUnmount
  // 使用clearInterval把timerId移除掉

  // 在生命週期結束時 移除計時函式
  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  // 時間的方法
  updateTime = () => {
    this.setState({
      currentTime: new Date().toLocaleString(),
    })
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <div>{this.state.currentTime}</div>
      </div>
    )
  }
}

export default DataTime
