import React, { Component } from 'react';
import { Table } from '../../components/Table';
const columns = [
  {
    id: 'id',
    title: 'Id',
  },
  {
    id: 'useId',
    title: 'UserID',
  },
  {
    id: 'title',
    title: 'Title',
  },
  {
    id: 'body',
    title: 'Body',
  },
];
export default class PostsPage extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => this.setState({ data: json }));
  }
  render() {
    return (
      <div>
        <Table columns={columns} data={this.state.data} />
      </div>
    );
  }
}
