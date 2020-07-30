import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Table/Table';
import Loading from './Loading/Loading';
import PersonInfo from './PersonInfo/PersonInfo';

class App extends Component {
  state = {
    data: [],
    request_status: true,
    field: 'id',
    sort: 'up',
    person: null
  }

  async componentDidMount() {
    let res = await fetch('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}');
    let data = await res.json();
    this.setState({
      request_status: false,
      data: data.sort((person_1, person_2) => person_1.id - person_2.id)
    })
  }

  Sort = field => {
    console.log(this.state.data);
    let copied_data = this.state.data.slice(0);
    let sort_dir = this.state.sort == 'up' ? 'down' : 'up';
    let ordered_data = copied_data.sort(function (person_1, person_2) {
      if (sort_dir == 'up') {
        return person_1[`${field}`] > person_2[`${field}`] ? 1 : -1
      } else {
        return person_1[`${field}`] < person_2[`${field}`] ? 1 : -1
      }
    })

    this.setState({
      data: ordered_data,
      field: field,
      sort: sort_dir
    })
  }

  get_info = (person) => {
    this.setState({
      person: person
    })
  }

  render() {
    return (
      <div className="App">
        { this.state.request_status ? <Loading /> :
          <Table data={this.state.data}
                 sort={this.Sort}
                 sort_dir={this.state.sort}
                 field={this.state.field}
                 get_info={this.get_info}
          />
        }
        {
          this.state.person ? <PersonInfo person={this.state.person} /> : null
        }
      </div>
    )
  }
}

export default App;
