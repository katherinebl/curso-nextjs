import Link from 'next/link'
import { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import Title from '../../components/Title'

export default function Posts() {
  const [posts, setposts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      const posts = await res.json()
      // console.log('[POSTS]: ', posts)
      setposts(posts)
    }

    fetchPosts()
  }, [])

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
