import request from 'request-promise';

import React, { Component } from 'react';
import './App.css';

const url = 'https://thewirecutter.com/wp-json/wp/v2/posts';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getPosts = this.getPosts.bind(this);
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts() {
    request(url).then((rawData) => {
      const data = JSON.parse(rawData);
      console.log(data);
      this.setState({ posts: data.posts });
    }).catch((err) => { throw err; });
  }

  render() {
    return (<div />);
  }
}

export default App;
