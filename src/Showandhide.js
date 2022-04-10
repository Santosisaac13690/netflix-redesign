import React, { Component } from 'react'

export default class Showandhide extends Component {
    state = {
        divcontainer:false,

    }

  render() {

    var Handlechange = e =>{
        this.setState({divcontainer:!this.state.divcontainer});
    }

    const x=this.state.divcontainer;
    return (
        <>
            <button onClick={Handlechange}>{x?'Hide':"Show"}</button>
            {
                x && (
                <ul>
                    <li>This</li>
                    <li>is</li>
                    <li>isaacs</li>
                    <li>linked</li>
                    <li>list</li>
                </ul>
                )
             }
        </>
    )
  }
}
