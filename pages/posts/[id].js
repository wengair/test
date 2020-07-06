import React,{useContext,useEffect,useState} from 'react'
import Link from 'next/link'
import Nav from 'client/components/Nav'
import {UserContext} from 'pages/_app'

export default function Show() {
  const userContext = useContext(UserContext)
  const postsUrl = process.env.getPostsUrl
  const [post, setPost] = useState()
  // console.log(post)

  useEffect(() => {
    const id = Number(window.location.pathname.split("/")[2])
    console.log(id)
    fetch(postsUrl+`/${id}`)
    .then(res => res.json())
    .then(post => {
      console.log(post)
      setPost(post)
    })
    .catch(err=>console.log(err))
    return () => {
      // cleanup
    }
  }, [])

    const va='test'
  return (
      <div>
        {post && <div className="text-container" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />}
        <Link href="/"><a>Return</a></Link>
        {post && post.author == userContext.loginState.id && <Link href="/posts/[id]/edit" as={`/posts/${post.id}/edit`}><a>Edit</a></Link>}
      </div>
  )
}

// return (
//   <div>
//     <div className="text-container" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
//     <Link href="/"><a>Return</a></Link>
//     {post.author == userContext.loginState.id && <Link href="[id]/edit" as={`${post.id}/edit`}><a>Edit</a></Link>}
//   </div>
// )


//      <h1>Title: {post.title.rendered}</h1>
//      <p>Post time: {post.date}</p>
//      <p>this is a show</p>
//      <p>this is the content {JSON.stringify(post)}</p>
// Show.getInitialProps = async (context) => {
//   const {id} = context.query
//   const res = await fetch(`http://wp:80/wp-json/wp/v2/posts/${id}`)
//   const json = await res.json()
//   return { post: json }
// }

// export async function getStaticPaths() {
//   // Call an external API endpoint to get posts
//   const res = await fetch('http://localhost:80/wp-json/wp/v2/posts')
//   console.log(res)
//   const posts = await res.json()
//   console.log(posts)

//   // Get the paths we want to pre-render based on posts
//   const paths = posts.map((post) => `/posts/${post.id}`)

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: false }
// }

// export async function getStaticProps({ params }) {
//   // params contains the post `id`.
//   // If the route is like /posts/1, then params.id is 1
//   const res = await fetch(`http://localhost/wp-json/wp/v2/posts/${params.id}`)
//   const post = await res.json()

//   // Pass post data to the page via props
//   return { props: { post } }
// }
