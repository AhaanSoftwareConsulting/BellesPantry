import React from 'react'
import ServiceBanner from './components/ServiceBanner'
import WhatWeOffer from '../home/components/WhatWeOffer'
import Whychooseus from '../home/components/Whychooseus'
import Faq from '../faq/components/Faq'
import Cta from '../home/components/Cta'
import ProductBelles from '../home/components/ProductBelles'

const ServiceComponents = () => {
  return (
    <div>
      <ServiceBanner/>
      <WhatWeOffer/>
      <Whychooseus/>
      <ProductBelles/>
      <Faq/>
      <Cta/>
    </div>
  )
}

export default ServiceComponents