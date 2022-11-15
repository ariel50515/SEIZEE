export const appConfig = {
  debug: true,
  devUrl: 'http://localhost:3001',
  devServerUrl: 'http://localhost:5000',
  prodUrl: 'https://www.seizee.com',
}

export const imgUrl = appConfig.debug ? appConfig.devUrl : appConfig.prodUrl

export const imgServerUrl = appConfig.debug
  ? appConfig.devServerUrl
  : appConfig.prodUrl
