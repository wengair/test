import React, { Component } from 'react';
import axios from 'axios'

const POSTS_SERVICE_URL = 'http://wp:80/wp-json/wp/v2/posts';

export class ListLists extends Component {
  state = {
    // Initial state.
    isFetching: false,
    posts: []
  };


  componentDidMount() {
    this.fetchPosts();
  }

  async fetchPostsAsync() {
    try {
      this.setState({ ...this.state, isFetching: true }); // Sets loading state.
      const response = await axios.get(POSTS_SERVICE_URL);
      this.setState({
        ...this.state,
        isFetching: false,
        posts: response.data
      });
    } catch (e) {
      console.log(e);
      this.setState({ ...this.state, isFetching: false });
    }
  }

  fetchPosts = this.fetchPostsAsync;

  render() {
    const postList = this.state.posts.map(post =>
      <div>
        <Link href="/posts/[id]" as={`/posts/${post.id}`}>
          <a key={post.id} postData={`${post}`}>
            <h2>Title: {post.title.rendered}</h2></a></Link>
        <p>Status: {post.status}</p>
        <p>Content: {post.content.rendered}</p>
      </div>)
    return <div>{postList}</div>
  }
}

export default ListLists
