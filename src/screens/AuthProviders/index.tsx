import { View, Text } from 'react-native'
import React from 'react'
import { Link } from '@react-navigation/native'

const AuthProviders = () => {
  return (
    <View className='flex items-center justify-center flex-1 bg-primary'>
      <Link to={{ screen: 'AuthPhone' }}>
        <Text>AuthProviders</Text>
      </Link>
    </View>
  )
}

export default AuthProviders