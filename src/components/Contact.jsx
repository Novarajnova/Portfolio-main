import React from 'react'
import { Element } from 'react-scroll'
import { IconButton } from '@mui/material'
import { GitHub } from '@mui/icons-material'
import { LinkedIn } from '@mui/icons-material'
import { Instagram } from '@mui/icons-material'
import { Email } from '@mui/icons-material'
import { Phone } from '@mui/icons-material'
import './Contact.css'
export default function Contact() {
  return (
    <Element className='contact' classID='contact'>
      <h1>Contact</h1>
      <div className='contact_container'>
     <IconButton>
      <a href="https://github.com/Novarajnova" target='_blank'>
      <GitHub /></a>
     </IconButton>
     <IconButton>
      <a href="https://www.linkedin.com/in/novaraj-s-b58986285/" target='_'>
      <LinkedIn /></a>
     </IconButton>
     <IconButton>
      <a href="https://www.instagram.com/mr.noah_007/" target='_blank'>
      <Instagram /></a>
     </IconButton>
     <IconButton>
      <a>
      <Email /></a>
     </IconButton>
     <strong>novanbr07@gmail.com</strong>
     <IconButton>
      <a>
      <Phone /></a>
     </IconButton>
     <strong>+919791307399</strong>
     </div>
    </Element>
  )
  
}

