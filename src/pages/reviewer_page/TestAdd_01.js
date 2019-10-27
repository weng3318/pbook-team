import React, { Component } from 'react'

class TestAdd_01 extends React.Component {
    constructor(props) { // 在建構函式設定state的初始值
      super(props);
      this.state = {
        arr: [],
      };
      this.inputRef = React.createRef(); // 在建構函式創建refs屬性
    }
    render() {
      const { arr } = this.state;//上方陣列
      return (　
        <>                                 {/* ref抓取 */}
          <input style={{position:'relative',left:'50%',transform:'translate(-50%,0%)'}} type="text" name="qq" ref={this.inputRef}/>                    
          {/* 觸發函式 */}
          <button style={{position:'relative',left:'50%',transform:'translate(-230%,0%)'}} type="button" onClick={this.addItem}>ADD</button>

          <ul>{/* 動態虛擬生成 */}
            {arr.map((v)=>
            <li style={{textAlign:'center'}} key={`item_${v}`}>{v}</li>
            )}
          </ul>
        </>
      );
    }
    addItem = () => { // 利用arrow function additem function

        // 利用ES6 Object.assign()拷貝itemList
        const copyArr = this.state.arr

        // 抓取input的值，在ref的current屬性
        if (this.inputRef.current.value !== '') {

          // array.push新值，這會回傳一個陣列長度
          copyArr.push(this.inputRef.current.value);

          // 利用setState更新state的值
          this.setState({
            arr: copyArr,
          });
          // 把input的value變回空字串
          this.inputRef.current.value = '';
        }
      }

  }

export default TestAdd_01
