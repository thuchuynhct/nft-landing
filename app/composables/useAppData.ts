import type { AppData } from '~/types'
import appData from '~/data/index.json'

export const useAppData = () => {
  const { getAssetUrl } = useAssets()
  const processedData = JSON.parse(JSON.stringify(appData))
  
  const processImagePaths = (obj: any) => {
    if (typeof obj === 'string' && obj.startsWith('/images/')) {
      return getAssetUrl(obj)
    }
    
    if (typeof obj === 'object' && obj !== null) {
      Object.keys(obj).forEach(key => {
        obj[key] = processImagePaths(obj[key])
      })
    }
    
    return obj
  }
  
  return {
    data: processImagePaths(processedData) as AppData,
  }
}