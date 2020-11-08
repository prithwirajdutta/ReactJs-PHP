import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
  state = {name:"",email:""};
  handleChange = (e) => {
   this.setState({name:e.target.value})
  }
  handleEmailChange = (e) => {
    this.setState({email:e.target.value})
  }
  handleSubmit = (e) => {
    e.preventDefault();
    var us = this.state.name;
    var a = {
      "username": us
    };
    // console.log(a);
    fetch(`http://localhost/reactphp/server/function.php`,
    {
      mode:'cors',
      method: 'POST', 
      headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     },
     body:JSON.stringify(a)
}).then(res=>res.json()).then(data=>this.setState({email:data.email}));
  }
  render(){
  return (
    <div className="App">
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="username" value={this.state.name} onChange={this.handleChange}/>
        <input type="text" name="email" value={this.state.email} onChange={this.handleEmailChange}/>
        <input type="submit"/>
      </form>
      <h1>{this.state.full}</h1>
    </div>
  )
}
}

export default App;
