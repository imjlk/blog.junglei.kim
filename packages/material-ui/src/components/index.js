import "dayjs/locale/ko"

import { Global, connect, css, styled, useConnect } from "frontity"

import Link from "@frontity/components/link"
import List from "./List";
import Page from "./Page"
import Post from './Post'
import React from "react"
import Switch from "@frontity/components/switch"
import dayjs from "dayjs"

const Root = ({ state }) => {
  dayjs.locale('ko');
  // const { state } = useConnect(Packages);
  const data = state.source.get(state.router.link)


  return (
    <>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;400;700&display=swap');

          html {
            font-family: 'Noto Sans KR', sans-serif;
          }
        `}
      />
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

const Header = styled.header`  background-color: #e5edee;`