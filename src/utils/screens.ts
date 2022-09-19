function asStrings<T extends { [key: string]: keyof RootStackParamList }>(
  arg: T
): T {
  return arg
}

export default asStrings({
  Auth: 'Auth',
  AuthCodeConfirm: 'AuthCodeConfirm',
  AuthPhone: 'AuthPhone',
  AuthProviders: 'AuthProviders',
  AuthRegister: 'AuthRegister',
  Main: 'Main',
  MainProviders: 'MainProviders',
  MainChat: 'MainChat'
})
