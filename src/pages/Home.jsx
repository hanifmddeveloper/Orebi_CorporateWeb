import React from 'react'
import Newarival from '../components/Newarival'
import Banner from '../components/Banner'
import Information from '../components/Information'
import Ads from '../components/Ads'
import BestSellers from '../components/BestSellers'
import Ads2 from '../components/Ads2'
import SpecialOffers from '../components/SpecialOffers'




const Home = () => {
return (
  <>
   <Banner />
   <Information />
   <Ads />
   <Newarival />
   <BestSellers />
   <Ads2 />
   <SpecialOffers />
  </>
 
  )
}

export default Home