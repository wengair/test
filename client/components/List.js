import React, { Component, useEffect, useState, useLayoutEffect } from 'react'
import Link from 'next/link'
import styles from '../styles/List.module.css'


export default function List() {
  const postsUrl = process.env.getPostsUrl

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
          console.log(error)
        }
      };
      fetchData();
  }, []);
  return { response, error };
  };

  const res = useFetch(postsUrl, {});
  if (!res.response) {
    return <div>Loading...</div>
  }

  const data = res.response
  // console.log("from list.js")
  // console.log(data)
  const postList = data.map((post, index) =>
      <div className={styles.postContainer} key={post.id}>
        <Link href="/posts/[id]" as={`/posts/${post.id}`}>
          <a>
            <h2>Title: {post.title.rendered}</h2></a></Link>
        <p>Status: {post.status}</p>
        <div className={`text-container ${styles.contentStyle}`} dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </div>)
  // console.log(postList);

  return (<div style={{display: 'flex',
                       justifyContent: 'center',
                       alignItems: 'center'}}>
            <div style={{width:'80vw'}}>
              {postList}
            </div>
          </div>
  )
}


