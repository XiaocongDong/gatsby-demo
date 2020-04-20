import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  return <Layout>
    <SEO title="Home" />
    <h1>Sean's blogs</h1>
    <h2>{data.allMarkdownRemark.totalCount} Posts</h2>
    {
      data.allMarkdownRemark.edges.map(({ node }) => (
        <Link
          to={node.fields.slug}
          id={node.id}
        >
          <h3>{node.frontmatter.title}</h3>
          <span style={{ color: "#bbb" }}>{node.frontmatter.date}</span>
          <p>{node.excerpt}</p>
        </Link>
      ))
    }
  </Layout>
}

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`