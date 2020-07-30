import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Components/Table/Table';
import Loading from './Components/Loading/Loading';
import PersonInfo from './Components/PersonInfo/PersonInfo';
import TypeSelector from './Components/TypeSelector/TypeSelector';

class App extends Component {
  state = {
    type_selected: false,
    data: [],
    request_status: false,
    field: 'id',
    sort: 'up',
    person: null,
  }

  urls = {
    small: 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}',
    large: 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'
  }

  async componentDidMount(url) {
    let res = await fetch(url);
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

  type_selector_handler = (url) => {
    this.setState({
      type_selected: true,
      request_status: true
    })
    this.componentDidMount(url)
  }

  render() {
    if (!this.state.type_selected) {
      return (
        <div className="App">
          <TypeSelector select={this.type_selector_handler} type={this.urls} />
        </div>
      )
    }
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
