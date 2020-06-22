import Link from 'next/link'

export default function Page(post) {
  return (
    <div>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </div>
  )
}

// export async function getStaticProps() {
//   const res = await fetch('http://wp:80/wp-json/wp/v2/posts')
//   const json = await res.json()

//   return {
//     props: {
//       stars: json.stargazers_count,
//     },
//   }
// }
