import React from 'react'
import ContactBanner from './components/ContactBanner'
import ContactSection from './components/ContactSection'
import Cta from '../home/components/Cta'

const ContactComponents = () => {
  return (
    <div>
      <ContactBanner/>
      <ContactSection/>
      <Cta/>
    </div>
  )
}

export default ContactComponents