import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';

export default function AnnouncementBar() {
  const [open, setOpen] = useState(true)

  return (
    <AnnouncementBarStyles style={ { display: open ? `block` : `none` } }>
      {/* TODO: Content to be fetched thru GraphQL */}
      <Link to="/">Covid-19 Service Update</Link>
      <IconButton
        edge="false"
        aria-label="close"
        onClick={() => setOpen(false)}
      >
        <CloseIcon fontSize='small'  />
      </IconButton>
    </AnnouncementBarStyles>
  )
}

const AnnouncementBarStyles = styled.div`
  background: var(--primary-light);
  position: relative;
  text-align: center;
  padding: 12px;
  button {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }

`
