import Navbar from './navbar'

export default function Layout(props) {
  return (
    <div>
      <Navbar />
      <main>{props.children}</main>
    </div>
  )
}
