import React from 'react'

class BR_fetch_api extends React.Component {
  constructor() {
    super()
    this.state = {
      name: 0,
      loading: false,
    }
  }

  // 元件 "已經" 呈現在網頁上
  async componentDidMount() {
    try {
      await this.setState({ loading: true })

      const response = await fetch('http://localhost:5555/reviewer_Data', {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })

      if (!response.ok) throw new Error(response.statusText)

      const jsonObject = await response.json()

      await this.setState({ name: jsonObject.name })
    } catch (e) {
      console.log(e)
    } finally {
      await setTimeout(() => this.setState({ loading: false }), 3 * 1000)
    }
  }

  // 元件 "即將" 卸載出網頁
  componentWillUnmount() {}

  handleClick = value => async () => {
    try {
      const data = { name: this.state.name }

      const response = await fetch('http://localhost:5555/reviewer_Data', {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })

      const jsonObject = await response.json()

      console.log(jsonObject)

      await this.setState(data)
    } catch (e) {
      console.log(e)
    } finally {
    }
  }

  render() {
    return (
      <>
        {this.state.loading ? (
          <div className="fa-2x">
            <i className="fas fa-spinner fa-spin" />
            資料載入中
          </div>
        ) : (
          <>
            <h1>{this.state.name}</h1>
            <button onClick={this.handleClick(1)}>+1</button>
            <button onClick={this.handleClick(-1)}>-1</button>
          </>
        )}
      </>
    )
  }
}

export default BR_fetch_api
