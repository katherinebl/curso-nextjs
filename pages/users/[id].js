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
        <div className="card">
          <h2>User Details</h2>
          <p>User ID: {user.id}</p>
          <p>{user.name}</p>
        </div>
      </Layout>

      <style jsx>
        {`
          .card {
            margin: 1rem;
            flex-basis: 45%;
            padding: 1.5rem;
            text-align: left;
            color: black;
            text-decoration: none;
            border: 2px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }
          .card:hover,
          .card:focus,
          .card:active {
            color: #0070f3;
            border-color: #0070f3;
          }
          .card h3 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
          }
          .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }
        `}
      </style>
    </div>
  )
}
