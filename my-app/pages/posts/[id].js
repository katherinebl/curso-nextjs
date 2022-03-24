import { useRouter } from 'next/router'
import Layout from '../../components/Layout'

export default function Post1() {
  const router = useRouter()

  return (
    <div>
      <Layout>
        <h2>Post Details</h2>
        <p>Post ID: {router.query.id}</p>
      </Layout>
    </div>
  )
}
