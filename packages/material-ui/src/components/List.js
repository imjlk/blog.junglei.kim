import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { connect, styled } from "frontity"

import Link from "@frontity/components/link"
import React from "react"

const List = ({ state, actions }) => {
  const data = state.source.get(state.router.link)

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {data.items.map((item) => {
        const post = state.source[item.type][item.id];

        return (
          <Grid item xs={6}>
            <BasicCard key={item.id} title={post.title.rendered} excerpt={post.excerpt.rendered} link={post.link} setLink={actions.router.set} />
            {/* // <Link key={item.id} link={post.link}>
          //   {post.title.rendered}
          //   <br />
          // </Link> */}
          </Grid>
        )
      })}
    </Grid>
  )
}

export default connect(List)

const Items = styled.div`
  & > a {
    display: block;
    margin: 6px 0;
    font-size: 1.2em;
    color: steelblue;
    text-decoration: none;
  }
`
function BasicCard({ title, excerpt, link, setLink }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          for taxonomies
        </Typography>
        <Typography variant="body2">
          {excerpt}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => { setLink(link) }}>더 보기</Button>
      </CardActions>
    </Card>
  );
}
