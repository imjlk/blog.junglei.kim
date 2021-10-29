import Link from "@frontity/components/link"
import MaterialDemo from './material-demo'
import MaterialTabs from './material-tabs'
import React from "react"
import Switch from "@frontity/components/switch"
import { connect } from "frontity"

const Root = ({ state }) => {
  const data = state.source.get(state.router.link)
  return (
    <>
      <h1>Hello Frontity</h1>
      <p>Current URL: {state.router.link}</p>
      <nav>
        <Link link="/">Home</Link>
        <br />
        <Link link="/page/2">More posts</Link>
        <br />
        <Link link="/about-us">About Us</Link>
        <br />
        <Link link="/material-demo">Material Demo</Link>
        <br />
        <Link link="/material-tabs">Material Demo</Link>
      </nav>
      <hr />
      <main>
        <Switch>
          <div when={data.isArchive}>This is a list</div>
          <div when={data.isPost}>This is a post</div>
          <div when={data.isPage}>This is a page</div>
          <div when={data.isMaterialDemo}><MaterialDemo /></div>
          <div when={data.isMaterialTabs}><MaterialTabs /></div>
        </Switch>
      </main>
    </>
  )
}

export default connect(Root)