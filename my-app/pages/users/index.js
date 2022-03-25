import { useEffect, useState } from 'react'
import Link from 'next/link'

import Layout from '../../components/Layout'
import Title from '../../components/Title'
import styles from '../../styles/Home.module.css'

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
        <div className={styles.grid}>
          {users.map((user) => {
            return (
              <Link href={`/users/[id]`} as={`/users/${user.id}`} key={user.id}>
                <a className={styles.card}>{user.name}</a>
              </Link>
            )
          })}
        </div>
      </Layout>
    </div>
  )
}
