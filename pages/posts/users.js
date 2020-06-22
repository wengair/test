import React, { Component, useEffect, useState } from 'react';
import Link from 'next/link'

export default function List() {
  const POSTS_SERVICE_URL = 'http://localhost:80/wp-json/wp/v2/users/3';

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
  const users = res.response
  console.log("from users.js")
  console.log(users)
  // const postList = users.map(post =>
  //     <div>
  //       <Link href="/posts/[id]" as={`/posts/${post.id}`}>
  //         <a key={post.id} postData={`${post}`}>
  //           <h2>Title: {post.title.rendered}</h2></a></Link>
  //       <p>Status: {post.status}</p>
  //       <p>Content: {post.content.rendered}</p>
  //     </div>)
  // console.log(postList);

  return <div>success</div>

}
