import React, { Component } from 'react'

class TestAdd_02 extends React.Component {
  // 在建構子設定state的初始值
  constructor(props) {
    super(props)
    this.state = {
      currentTime: new Date().toLocaleString(),
    }
  }

  // 在Component render到真實DOM中，使用ComponentDidMount，
  // 並在裡面使用setInterVal，並將回傳的計時器id存放在timerId中

  // 在生命週期安裝時 宣告一個變數 塞入 time方法並呼叫函式 帶值(秒數)
  componentDidMount() {
    this.timerId = setInterval(this.updateTime, 1000)
  }

  // 在component即將從真實DOM中移除之前，使用componentWillUnmount
  // 使用clearInterval把timerId移除掉

  // 在生命週期凋謝前 移除載入時的 計時函式
  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  // 宣告update時間的方法
  updateTime = () => {
    this.setState({
      currentTime: new Date().toLocaleString(),
    })
  }

  render() {
    const { currentTime } = this.state
    return (
      <div style={{ textAlign: 'center' }}>
        <div>{currentTime}</div>
      </div>
    )
  }
}

export default TestAdd_02
