import { View, Text, TextInputProps, TextInput } from 'react-native'
import React from 'react'

const Input = ({ ...args }: TextInputProps) => {
  return (
    <View>
      <TextInput
        className="font-GothamBook border-[1px] p-[8px_18px] rounded-[8px] border-primary"
        {...args}
      />
    </View>
  )
}

export default Input
