"use client"

import FlashSale from '@/components/FlashSale'
import FirstLook from '@/components/FirstLook'
import Hero from '@/components/Hero'
import BendatApp from '@/components/BendatApp'
import React from 'react'
import Featured from '@/components/Featured'
import GearUp from '@/components/Gearup'
import DontMiss from '@/components/DontMiss'
import Essential from '@/components/Essential'
import CategoryList from '@/components/CategoryList'


const page = () => {
  return (
    <div>
      <BendatApp />
      <Hero />
      <FirstLook />
      <FlashSale />
      <Featured />
      <GearUp />
      <DontMiss />
      <Essential />
      <CategoryList />
    </div >
  )
}

export default page
