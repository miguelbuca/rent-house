import { View, Image, Text } from 'react-native'
import React from 'react'
import { LanchCardProps } from './types'

const LanchCard = ({ model, price, kind, image }: LanchCardProps) => {
  return (
    <View className="my-[8px] mx-[8px]">
      <View className="flex flex-col h-full shadow w-[300px] rounded-[20px] bg-white">
        <Image className="w-full rounded-t-[20px] h-[150px]" source={image} />
        <View className="flex flex-row justify-center flex-1 p-[8px]">
          <View className="flex flex-col flex-1">
            <Text className="font-GothamBold text-[17px]">{kind}</Text>
            <Text className="font-GothamBook mt-[8px] uppercase text-gray text-[11px]">
              {model}
            </Text>
          </View>
          <View className='flex items-center justify-center'>
            <Text className="font-GothamBold text-[17px] text-primary">
              {new Intl.NumberFormat('pt-PT', {
                currency: 'AOA',
                maximumFractionDigits: 2,
                notation: 'compact'
              }).format(price)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default LanchCard
