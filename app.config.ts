import { ExpoConfig, ConfigContext } from '@expo/config'

import { version } from './package.json'

export default ({ config }: ConfigContext): Partial<ExpoConfig> => ({
  ...config,
  version,
})
