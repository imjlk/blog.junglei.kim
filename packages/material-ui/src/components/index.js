import "dayjs/locale/ko"

import Link from "@frontity/components/link"
import List from "./List";
import MaterialDemo from './material-demo'
import MaterialTabs from './material-tabs'
import Page from "./Page"
import Post from './Post'
import React from "react"
import Switch from "@frontity/components/switch"
import { connect } from "frontity"
import dayjs from "dayjs"

const Root = ({ state }) => {
  dayjs.locale('ko');
  const data = state.source.get(state.router.link)

  return (
    <>
      <h1>Blog</h1>
      <p>Current URL: {state.router.link}</p>
      <nav>
        <Link link="/">Home</Link>
        <br />
        <Link link="/about-us">About Us</Link>
      </nav>
      <hr />
      <main>
        <Switch>
          <List when={data.isArchive} />
          <Post when={data.isPost} />
          <Page when={data.isPage} />
        </Switch>
      </main>
    </>
  )
}

export default connect(Root)