import request from 'request-promise';

import React, { Component } from 'react';
import './App.css';
import AppView from './components';

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
      this.setState({ posts: data });
    }).catch((err) => { throw err; });
  }
  
  render() {
    return (<AppView posts={this.state.posts}  />);
  }
}

export default App;
