import React, { Component } from 'react'

export default class SeachBar extends Component {

    state ={
        name:""
    }
    moussa(e){
        this.setState({name :e.target.value})
    }
    addChaca(){
        this.props.addUser({id : Date.now(),name:this.state.name})
    }
  render() {
    return (
        <div>
            <div className='Seach-bar'>
               <div className='form'>
               <input type="text" onChange={this.moussa.bind(this)} />
                <button onClick={this.addChaca.bind(this)}>+</button>
               </div>
            </div>
        </div>
    )
  }
}
