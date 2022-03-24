import { useEffect, useState } from 'react'
import Link from 'next/link'

import Layout from '../../components/Layout'
import Title from '../../components/Title'

export default function Users() {
  const [users, setUsers] = useState([])

  useEffect(async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()

    setUsers(users)
  }, [])

  return (
    <div>
      <Layout>
        <Title>Users Page</Title>
        <div>
          {users.map((user) => {
            return (
              <Link href={`/users/[id]`} as={`/users/${user.id}`} key={user.id}>
                <a>{user.name}</a>
              </Link>
            )
          })}
        </div>
      </Layout>
    </div>
  )
}
