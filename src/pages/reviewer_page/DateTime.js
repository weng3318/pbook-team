import React, { Component } from 'react'

export class DateTime extends Component {
    constructor(){
        super()
        this.state = {
            currentTime:new Date().toLocaleString()
        }
    }
    
    render() {
        
        const {currentTime}=this.state
        return (
            <>
                <h3 style={{ textAlign:'center'}}>
                    {currentTime}
                <button style={{margin:'0 20px'}} type="button" onClick={this.updateTime}>update</button>
                </h3>
            </>
        )
    }
    
    
    updateTime=()=>{
        this.setState({
            currentTime:new Date().toLocaleString()
        })
    }
}

export default DateTime
