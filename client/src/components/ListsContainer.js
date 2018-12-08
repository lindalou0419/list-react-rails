import React, { Component } from 'react';
import axios from 'axios';

class ListsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lists: []
    }
  }

  componentDidMount() {
    axios.get('api/v1/lists.json')
      .then(response => {
        console.log(response)
        this.setState({
          lists: response.data
        })
      })
      .catch(error => console.log(error))
  }

  render() {
    let list = this.state.lists.map((item, index) => {
      return (
        <div className="single-list" key={index}>
          <h4>{item.title}</h4>
          <p>{item.excerpt}</p>
        </div>
      )
    })

    return (
      <div className="lists-container">
        {list}
      </div>
    )
  }
}

export default ListsContainer;