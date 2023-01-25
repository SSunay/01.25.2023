import React from 'react'
import ServicePart from '../services-part'

import StaticPart1 from '../static-part1'
import TopPart from '../top-part'
import TopPartcards from '../top-part-cards'
import UsersPart from '../users-part'

const HomePage = () => {
  return (
    <div>
        <TopPart/>
        <TopPartcards/>
        <UsersPart/>
        <StaticPart1/>
        <ServicePart/>
        
    </div>
  )
}

export default HomePage