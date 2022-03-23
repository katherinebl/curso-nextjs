import Link from 'next/link'
import { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import Title from '../../components/Title'

export default function Posts({ posts }) {
  //CLIENT SIDE RENDERING
  // const [posts, setposts] = useState([])

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  //     const posts = await res.json()
  //     setposts(posts)
  //   }

  //   fetchPosts()
  // }, [])

  return (
    <div>
      <Layout></Layout>
      <Title>Posts Page</Title>
      <div>
        {posts.map((post) => {
          return (
            <Link href={`/posts/[id]`} as={`posts/${post.id}`}>
              <a>
                <span>✨</span>
                <p>{post.title}</p>
              </a>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
  }
}
