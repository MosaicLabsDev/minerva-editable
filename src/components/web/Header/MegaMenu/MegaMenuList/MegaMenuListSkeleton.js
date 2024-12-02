import { Skeleton } from '@mantine/core'
import React from 'react'
import { getRandomFromArray } from '../../../../utils/randomValue'

export default function MegaMenuListSkeleton({numberOfSkeletons = 20}) {
   const widthOptions = ['20%', '30%', '15%', '25%', '10%', '40%']
   const arr = Array.from({ length: numberOfSkeletons}).fill('skeleton')
   return (
      <>
         {arr.map(item => {
            const width = getRandomFromArray(widthOptions)
            return(
               < Skeleton height={20} width={width} animate />
            )
         })}
         
      </>
   )
}