import './App.css';
import SeachBar from './component/SeachBar'
import UserList from './component/UserList'
import User from './component/User'
import React, { Component } from 'react'

 class App extends Component {
   state=
   {
    users:[
      {id: 1, name:"Adjoua konan"}, 
      {id: 2, name:"Yolande Yao"},
      {id: 3, name:"Marilyne Kofi"}
    ]
   }
   addUser = (user) =>
   {
     let newUsers = [...this.state.users];
      newUsers.push(user);
     this.setState({users : newUsers});
   }
   deleteUser = (id) => {
     let newUsers = [...this.state.users];
     let index =newUsers.findIndex((user)=> user.id===id);
     newUsers.splice(index,1);
     this.setState({users : newUsers});




   }

  render() {
    return (
  <div>
     <div className="App">
          <div className="container">
            <SeachBar addUser= {this.addUser} />
           <UserList users={this.state.users} deleteUser={this.deleteUser} />
           
        </div>
    </div>
  </div>
    )
  }
}
export default App;

