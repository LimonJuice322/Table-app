import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
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
    current_page: 0
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

  page_change_handler = (elem) => {
    this.setState({
      current_page: elem.selected,
    })
  }

  render() {
    const page_size = 50;

    if (!this.state.type_selected) {
      return (
        <div className="App">
          <TypeSelector select={this.type_selector_handler} type={this.urls} />
        </div>
      )
    }

    let clone_data = this.state.data.slice(0);
    let current_page = this.state.current_page;
    let display_data = clone_data.splice(current_page*page_size, page_size);
    return (
      <div className="App">
        { this.state.request_status ? <Loading /> :
          <Table data={display_data}
                 sort={this.Sort}
                 sort_dir={this.state.sort}
                 field={this.state.field}
                 get_info={this.get_info}
          />
        }
        {
          this.state.data.length > page_size ?
          <ReactPaginate previousLabel={'<'}
                         nextLabel={'>'}
                         breakLabel={'...'}
                         breakClassName={'break-me'}
                         pageCount={20}
                         marginPagesDisplayed={2}
                         pageRangeDisplayed={5}
                         onPageChange={this.page_change_handler}
                         containerClassName={'pagination'}
                         activeClassName={'active'}
                         pageClassName="page-item"
                         pageLinkClassName="page-link"
                         previousClassName="page-item"
                         nextClassName="page-item"
                         previousLinkClassName="page-link"
                         nextLinkClassName="page-link"
                         forcePage={this.state.current_page}
          /> : null
        }
        {
          this.state.person ? <PersonInfo person={this.state.person} /> : null
        }
      </div>
    )
  }
}

export default App;
