import Link from 'next/link'
import Layout from '../../components/Layout'
import Title from '../../components/Title'
import styles from '../../styles/Home.module.css'

export default function Posts({ posts }) {
  return (
    <div>
      <Layout>
        <Title>Posts Page</Title>
        <div className={styles.grid}>
          {posts.map((post) => {
            return (
              <Link href={`/posts/[id]`} as={`/posts/${post.id}`} key={post.id}>
                <a className={styles.card}>
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
