export const useAssets = () => {
  const config = useRuntimeConfig()
  
  const getAssetUrl = (path: string) => {
    if (path.startsWith(config.app.baseURL || '')) {
      return path
    }
    
    if (path.startsWith('/')) {
      return `${config.app.baseURL || ''}${path.substring(1)}`
    }
    
    return `${config.app.baseURL || ''}${path}`
  }
  
  return {
    getAssetUrl
  }
}
