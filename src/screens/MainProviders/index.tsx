import { View, Text, Image, Button, TextInput } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from '@react-navigation/native'
import { FlatList } from 'react-native'
import LanchCard from 'components/organisms/lanchCard'
import { LanchCardProps } from 'components/organisms/lanchCard/types'

const MainProviders = () => {
  const lanch: LanchCardProps[] = [
    {
      kind: 'T1',
      ower: {
        name: 'Miguel Buca',
        phone: '(+244)948600567'
      },
      price: '80000',
      model: 'per-month',
      description: {
        energy: true,
        water: false,
        "air-conditioning": true,
        others: 'Quintal compartilhado'
      }
    },
    {
      kind: 'T1',
      ower: {
        name: 'Miguel Buca',
        phone: '(+244)948600567'
      },
      price: '80000',
      model: 'per-month',
      description: {
        energy: true,
        water: false,
        "air-conditioning": true,
        others: 'Quintal compartilhado'
      }
    }
  ]

  return (
    <View className="flex-1 flex flex-col">
      <View className="relative flex flex-1 h-[50%]">
        <MapView className="flex-1" />
        <SafeAreaView className="flex flex-row items-center absolute p-[8px]">
          <View className="flex-1">
            <TextInput
              placeholderTextColor={'#ff585d'}
              placeholder="Em qual região?"
              style={{
                backgroundColor: '#ff585e29'
              }}
              className="max-w-[95%] h-[40px] text-[15px] p-[8px_18px] rounded-full"
            />
          </View>
          <View className="flex items-center justify-center">
            <Link
              to={{
                screen: 'MainChat'
              }}
            >
              <View className="mt-[8px">
                <View className="flex p-[8px] min-h-[40px] min-w-[40px]  items-center justify-center rounded-full bg-primary">
                  <Image source={require('assets/icons/chat.png')} />
                </View>
              </View>
            </Link>
          </View>
        </SafeAreaView>
      </View>
      <View className="flex flex-col bg-white p-[18px_0px] h-[50%]">
        <View className="flex items-center flex-row px-[8px] mb-[8px]">
          <View className="flex flex-col flex-1">
            <Text className="capitalize font-GothamBold text-[22px] text-primary">
              Destaque
            </Text>
            <Text className="capitalize font-GothamBook text-[11px] mt-[4px]">
              últimos lançamentos
            </Text>
          </View>
        </View>
        <View className="flex-1 mt-[18px]">
          <FlatList
            data={lanch}
            renderItem={({ item, index }) => {
              return <LanchCard {...item} key={index} />
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  )
}

export default MainProviders
