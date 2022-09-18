import { LinkingOptions } from '@react-navigation/native'

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [],
  config: {
    screens: {
      AuthProviders: 'auth',
      AuthCodeConfirm: 'auth/confirm',
      AuthPhone: 'auth/phone',
      MainProviders: 'main',
      MainChat: 'main/chat'
    }
  }
}

export default linking
