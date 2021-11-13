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
          @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;400;700&display=fallback');
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          html {
            font-family: 'Noto Sans KR', sans-serif;
          }
        `}
      />
      <Header isPostType={data.isPostType} isPage={data.isPage}>
        <HeaderContent>
          <h1>Blog</h1>
          <p>Current URL: {state.router.link}</p>
          <Menu>
            <Link link="/">Home</Link>
            <br />
            <Link link="/about-us">About Us</Link>
          </Menu>
        </HeaderContent>
      </Header>
      <Main>
        <Switch>
          <List when={data.isArchive} />
          <Post when={data.isPost} />
          <Page when={data.isPage} />
        </Switch>
      </Main>
    </>
  )
}

export default connect(Root)

const Header = styled.header`
  background-color: #e5edee;
  border-width: 0 0 8px 0;
  border-style: solid;
  border-color: ${props => props.isPostType ? (props.isPage ? 'lightsteelblue' : 'lightseagreen') : 'maroon'};

  h1 {
    color: #4a4a4a;
  }
`
const HeaderContent = styled.div`
  max-width: 800px;
  padding: 2em 1em;
  margin: auto;
`
const Main = styled.main`
  max-width: 800px;
  padding: 1em;
  margin: auto;

  img {
    max-width: 100%;
    height: auto;
  }
  h2 {
    margin: 0.5em 0;
  }
  p {
    line-height: 1.25em;
    margin-bottom: 0.75em;
  }
  figure {
    margin: 0;
  }
  figcaption {
    color: #828282;
    font-size: 0.8em;
    margin-bottom: 1em;
  }
`
const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  margin-top: 1em;
  & > a {
    margin-right: 1em;
    color: steelblue;
    text-decoration: none;
  }
`