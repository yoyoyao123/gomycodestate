import React, { Component } from 'react'

export default class User extends Component {
    deleteUser = (id) => {
        this.props.deleteUser(id)
    }
  render() {
    return (
        <div className='user'>
            <div className='image' >
                <div>
                    <img src={"OIF.jpg"} alt="" />
                 </div>
                <div>
                <h2 className='name'>{this.props.user.name}</h2>
                <button onClick={()=>this.deleteUser(this.props.user.id)}>supprimer</button>

                </div>
            </div>
        </div>
    )
  }
}
