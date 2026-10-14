import React from 'react'
import HomeBanner from './components/HomeBanner'
import WhatWeOffer from './components/WhatWeOffer';
import Whychooseus from './components/Whychooseus'
import Made from './components/Made'
import Faq from '../faq/components/Faq'
import Cta from './components/Cta'
import OurStory from './components/OurStory'
import ProductBelles from './components/ProductBelles'

const HomeComponents = () => {
  return (
    <div>
      <HomeBanner/>
      <WhatWeOffer/>
      <OurStory/>
      <Whychooseus/>
      <ProductBelles/>
      <Made/>
      <Faq/>
      <Cta/>
      
    </div>
  )
}

export default HomeComponents