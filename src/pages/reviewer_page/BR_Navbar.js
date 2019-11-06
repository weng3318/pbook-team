import React from 'react'
import BR_PathNow from './BR_PathNow'
import BR_DateTime from './BR_DateTime'
import BR_TodoWith from './BR_TodoWith'
import {withRouter} from 'react-router-dom'

export class BR_Navbar extends React.Component {
    render() {
        return (
            <>
                <nav className="brNavbar">
                <BR_PathNow />
                <BR_DateTime />
                <button onClick={()=> this.props.history.push('/Reviewer')}>回到首頁</button>
                </nav>
                <BR_TodoWith />
            </>
        )
    }
}

export default withRouter(BR_Navbar)
