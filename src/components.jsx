import React from 'react';

const PostList = props =>
  props.posts.map(post => (
    <div key={post.id}>
      <div>
        <a href="" >{post.title.rendered}</a>
      </div>
      <hr />
    </div>
  ));

const AppView = (props) => {
  const { posts, showPost } = props;

  console.log(props);
  
  const postsView = props.posts
              ? (<PostList posts={posts} onClick={showPost} />)
              : (<h4>Loading posts...</h4>);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">News Feed</h1>
      </header>
      {postsView}
    </div>
  );
};

export default AppView;
