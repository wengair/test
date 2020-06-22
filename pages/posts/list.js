import React, { Component, useEffect, useState } from 'react';
import Link from 'next/link'
// import ListLists from './listlists'


export default function List() {
  const POSTS_SERVICE_URL = 'http://localhost:80/wp-json/wp/v2/posts';
  // const [state, setState] = useState(null)
  //   useEffect(() => {
  //       fetch(POSTS_SERVICE_URL).then(
  //           res => setState(res.data)
  //       )
  //   })
  //   console.log(state);
  //   return (
  //       <div>
  //           {state}
  //       </div>
  //   )
  const useFetch = (url, options) => {
    const [response, setResponse] = React.useState(null);
    const [error, setError] = React.useState(null);
    React.useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch(url, options);
          const json = await res.json();
          setResponse(json);
        } catch (error) {
          setError(error);
        }
      };
      fetchData();
  }, []);
  return { response, error };
  };

  const res = useFetch(POSTS_SERVICE_URL, {});
  if (!res.response) {
    return <div>Loading...</div>
  }
  const data = res.response
  console.log("from list.js")
  console.log(data)
  const postList = data.map(post =>
      <div>
        <Link href="/posts/[id]" as={`/posts/${post.id}`}>
          <a key={post.id} postData={`${post}`}>
            <h2>Title: {post.title.rendered}</h2></a></Link>
        <p>Status: {post.status}</p>
        <p>Content: {post.content.rendered}</p>
      </div>)
  console.log(postList);

  return <div>{postList}</div>

  // useEffect(() => {
  //   // console.log("in useEffect");
  //   const fetchUsers = async () => {
  //     // console.log(POSTS_SERVICE_URL);
  //     const response = await axios.get(POSTS_SERVICE_URL);
  //     setData(response.data);
  //     // console.log(response);
  //   };
  //   // console.log("finish function setup");
  //   fetchUsers();
  //   // console.log("run the function");
  // }, []); // Runs once

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       console.log(POSTS_SERVICE_URL);
  //       setData({ ...data, isFetching: true });
  //       const response = await axios.get(POSTS_SERVICE_URL);
  //       setData({
  //         ...data,
  //         posts: response.data,
  //         isFetching: false
  //       });
  //     } catch (e) {
  //       console.log(e);
  //       setData({ ...data, isFetching: false });
  //     }
  //   };
  //   fetchUsers();
  // }, []); // Runs once

  // constructor(props) => {
  //   super(props)

  //   this.state = {
  //     isFetching: false,
  //     posts: []
  //   }
  // }

  // componentDidMount = () => {
  //   this.fetchPosts()
  // }

  // let fetchPostsAsync = async() => {
  //   try {
  //     this.setState({ ...this.state, isFetching: true }); // Sets loading state.
  //     const response = await axios.get(POSTS_SERVICE_URL);
  //     this.setState({
  //       ...this.state,
  //       isFetching: false,
  //       posts: response.data
  //     });
  //   } catch (e) {
  //     console.log(e);
  //     this.setState({ ...this.state, isFetching: false });
  //   }
  // }

  // fetchPosts = this.fetchPostsAsync

  // console.log(data);
  // console.log(data.posts);
  // const postList = data.posts.map(post =>
  //     <div>
  //       <Link href="/posts/[id]" as={`/posts/${post.id}`}>
  //         <a key={post.id} postData={`${post}`}>
  //           <h2>Title: {post.title.rendered}</h2></a></Link>
  //       <p>Status: {post.status}</p>
  //       <p>Content: {post.content.rendered}</p>
  //     </div>)
  // console.log(postList);

  // return <div>{postList}</div>
}
// Next.js
// const List = ({ posts }) => {
//   const postList = posts.map(post =>
//     <div>
//       <Link href="/posts/[id]" as={`/posts/${post.id}`}>
//         <a key={post.id} postData={`${post}`}>
//           <h2>Title: {post.title.rendered}</h2></a></Link>
//       <p>Status: {post.status}</p>
//       <p>Content: {post.content.rendered}</p>
//     </div>)
//   return <div>{postList}</div>
// }
// Next.js server side
// List.getInitialProps = async ({ req }) => {
//   const res = await fetch('http://wp:80/wp-json/wp/v2/posts')
//   const json = await res.json()
//   return { posts: json }
// }
// ----------------------
// Next.js static
// export async function getStaticProps() {
//   // Call an external API endpoint to get posts
//   const res = await fetch('http://wp:80/wp-json/wp/v2/posts')
//   const posts = await res.json()

//   // By returning { props: posts }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       posts,
//     },
//   }
// }

