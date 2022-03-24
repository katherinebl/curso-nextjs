import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/posts">
            <a>Posts</a>
          </Link>
        </li>
        <li>
          <Link href="/users">
            <a>Users</a>
          </Link>
        </li>
      </ul>
      <style jsx>{`
        .navbar {
          background: #eaeaea;
          padding: 15px;
        }
        ul {
          list-style-type: none;
          width: 100%;
          margin: 0 auto;
          display: flex;
          justify-content: space-evenly;
        }
      `}</style>
    </nav>
  )
}
