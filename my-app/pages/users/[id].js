import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import Layout from '../../components/Layout'

export default function User() {
  const router = useRouter()

  const [user, setUser] = useState({})

  useEffect(async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${router.query.id}`)
    const user = await res.json()

    setUser(user)
  }, [])

  return (
    <div>
      <Layout>
        <h2>User Details</h2>
        <p>User ID: {user.id}</p>
        <p>{user.name}</p>
      </Layout>
    </div>
  )
}
