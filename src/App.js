import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table/Table';
import Loading from './Loading/Loading';

class App extends Component {
  state = {
    data: [],
    request_status: true
  }

  async componentDidMount() {
    let res = await fetch('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}');
    let data = await res.json();
    this.setState({
      request_status: false,
      data: data
    })
  }

  render() {
    console.log(this.state.data)
    return (
      <div className="App">
        {
          this.state.request_status
           ? <Loading />
           : <Table
           data={this.state.data}
           />
         }
      </div>
    )
  }
}

export default App;
