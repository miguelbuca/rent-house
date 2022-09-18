import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ChatType } from './types'
import { Link } from '@react-navigation/native'

const MainChat = () => {
  const chat: ChatType[] = [
    {
      own: 'from',
      from: {
        name: 'Miguel Buca',
        phone: '(+244)948600567'
      },
      to: {
        name: 'Santos Miguel',
        phone: '(+244)929247331'
      },
      readAll: false
    },
    {
      own: 'from',
      from: {
        name: 'Miguel Buca',
        phone: '(+244)948600567'
      },
      to: {
        name: 'Santos Miguel',
        phone: '(+244)929247331'
      },
      readAll: true
    }
  ]
  return (
    <View className="flex-1 flex-col">
      <SafeAreaView className="flex h-[65px] bg-white shadow">
        <View className="relative flex-1 flex items-center justify-center px-[8px]">
          <Text className="font-GothamBold text-[16px] text-primary">Chat</Text>
          <View className="absolute right-[8px]">
            <Image
              className="rounded-full h-[30px] w-[30px]"
              source={require('assets/icons/avatar.png')}
            />
          </View>
        </View>
      </SafeAreaView>
      <FlatList
        className="p-[8px] bg-[#f5f5f5]"
        data={chat}
        ItemSeparatorComponent={() => (
          <View className="ml-[50px] h-[1px] mb-[4px] bg-gray opacity-5" />
        )}
        ListFooterComponent={() => (
          <View className="flex items-center justify-center py-[18px]">
            <Text className="font-GothamBook text-gray text-[15px] opacity-25">
              Oppa!! Todas as foram carregadas
            </Text>
          </View>
        )}
        renderItem={({ item, index }) => {
          return (
            <View key={index}>
              <Link to={{ screen: 'MainChatMessage', params: item }}>
                <View className="py-[18px] flex flex-row">
                  <View className="flex items-center mr-[8px]">
                    <View
                      className={`flex items-center w-[55px] h-[55px] justify-center rounded-full border-dashed border ${
                        item.readAll ? 'border-semi-gray' : 'border-primary'
                      }`}
                    >
                      <Image
                        className="rounded-full h-[50px] w-[50px]"
                        source={require('assets/icons/avatar.png')}
                      />
                    </View>
                  </View>
                  <View className="flex-1 flex items-center flex-row">
                    <View className="flex flex-1 flex-col">
                      <Text className="font-GothamBold mb-[8px] text-gray">
                        {item.to.name}
                      </Text>
                      <Text className="font-GothamBook text-[12px] text-gray">
                        {item.to.phone}
                      </Text>
                    </View>
                  </View>
                </View>
              </Link>
            </View>
          )
        }}
      />
    </View>
  )
}

export default MainChat
