import Link from 'next/link'
import Layout from '../../components/Layout'
import Title from '../../components/Title'

export default function Posts({ posts }) {
  return (
    <div>
      <Layout>
        <Title>Posts Page</Title>
        <div>
          {posts.map((post) => {
            return (
              <Link href={`/posts/[id]`} as={`/posts/${post.id}`} key={post.id}>
                <a>
                  <p>{post.title}</p>
                </a>
              </Link>
            )
          })}
        </div>
      </Layout>
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
