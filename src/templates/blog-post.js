import React from "react"
import Layout from "../components/layout"
import Comments from '../components/comments'

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{__html: post.html}} />
      <Comments
        blogId={post.id}
      />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug }}) {
      html
      id
      frontmatter {
        title
      }
    }
  }
`
