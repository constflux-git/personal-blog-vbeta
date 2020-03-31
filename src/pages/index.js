import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

// we give styling to link components from Gatsby
const BlogLink = styled(Link)`
  text-decoration: none;
`

const BlogTitle = styled.h3`
  margin-bottom: 7px;
  color: black;
`

const BlogSubTitle = styled.h5`
  margin-bottom: 10px;
  color: black;
`

const BlogExcerpt = styled.p`
  margin-bottom: 30px;
`

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>{data.allMarkdownRemark.totalCount}</h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <BlogLink to={node.fields.slug}>
            <BlogTitle>{node.frontmatter.title}</BlogTitle>
            <BlogSubTitle>
              {node.frontmatter.date} • {node.timeToRead} minute read
            </BlogSubTitle>
            <BlogExcerpt>{node.excerpt}</BlogExcerpt>
          </BlogLink>
        </div>
      ))}
      <Link to="/page-2/">next</Link>
    </Layout>
  )
}

// export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          id
          html
          timeToRead
          frontmatter {
            date
            title
          }
          excerpt
        }
      }
    }
  }
`
