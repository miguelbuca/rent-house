import { View, Text } from 'react-native'
import React from 'react'
import { LanchCardProps } from './types'

const LanchCard = ({}: LanchCardProps) => {
  return (
   <View className='my-[8px] mx-[8px]'>
      <View className='h-full shadow w-[300px] p-[8px] rounded-[20px] bg-white'>
      <Text>LanchCard</Text>
    </View>
   </View>
  )
}

export default LanchCard