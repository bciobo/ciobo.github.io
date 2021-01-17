import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadata = () => {
  const {site} = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            siteUrl
            headline
            description
            image
            logo
            name
            email
            twitter
            linkedin
            author
          }
        }
      }
    `
  )
  return site.siteMetadata
}
