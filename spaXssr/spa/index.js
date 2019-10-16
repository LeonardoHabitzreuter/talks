import React, { memo } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Menu = () => {
  console.log('render')
  return (
    <>
      <Link to={'/'}>
        Home
      </Link>
      <Link to={'/page'}>
        Page
      </Link>
    </>
  )
}

const Home = () => (
  <>
    <Menu />
    <h1>Home</h1>
  </>
)

const Page = () => (
  <>
    <Menu />
    <h1>Page</h1>
  </>
)

const App = () => (
  <>
    <Router>
      <Route exact path="/" component={Home} />
      <Route path='/page' component={Page} />
    </Router>
  </>
)

render(<App />, document.getElementById('app'))