// import { useRouter } from 'next/router'
import Layout from '../../components/Layout'

export default function Post({ post }) {
  // const router = useRouter()

  return (
    <div>
      <Layout>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </Layout>
    </div>
  )
}

export async function getServerSideProps({ params }) {
  const res = await fetch(`https:jsonplaceholder.typicode.com/posts/${params.id}`)
  const post = await res.json()
  return {
    props: {
      post,
    },
  }
}
