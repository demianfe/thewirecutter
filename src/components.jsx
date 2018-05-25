import React from 'react';

const PostList = props =>
  props.posts.map(post => (
    <div key={post.id}>
      <div>
        <a href="" onClick={e => props.onClick(post.id, e)}>{post.title.rendered}</a>
      </div>
      <hr />
    </div>
  ));

const PostView = (props) => {
  console.log(props);
  const post  = props.post[0];

  return (
    <div>
      <h2>{post.title.rendered}</h2>
      {/* <div>{date}</div>
          <img src={featured_media.url} height="340" width="480" /> */}
      <p dangerouslySetInnerHTML={{ __html: post.content.rendered }} key={post.id} align="justify" />
    </div>
  );
};

const AppView = (props) => {
  const { post, posts, showPost } = props;
  
  const postsView = props.posts
              ? (<PostList posts={posts} onClick={showPost} />)
              : (<h4>Loading posts...</h4>);
  const details = props.post
                ? (<PostView post={post} />)
                : postsView;
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">News Feed</h1>
      </header>
      {details}
    </div>
  );
};

export default AppView;
