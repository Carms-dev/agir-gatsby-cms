import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import AnnouncementBar from './AnnouncementBar'

export default function AnnouncementBars() {
  const { allWpAnnouncement: { nodes } } = useStaticQuery(graphql`
    query {
      allWpAnnouncement(filter: { announcementBar: { announcementActive: { eq: true } } }) {
        nodes {
          announcementBar {
            announcementLinkText
            announcementPopup
            announcementTitle
          }
          id
        }
      }
    }
  `)

  const announcements = nodes
  console.log(announcements)

  return (
    <>
      {announcements.map(a => <AnnouncementBar key={a.id} announcement={a.announcementBar} /> )}
    </>
  )
}
