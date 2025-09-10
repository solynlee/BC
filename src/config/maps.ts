/**
 * 地图配置文件
 * 支持百度地图、腾讯地图和Google Maps
 */

export interface MapConfig {
  // 百度地图配置
  baidu: {
    apiKey: string
    region: string
  }

  // Google Maps配置
  google: {
    apiKey: string
    region: string
    language: string
  }

  // 腾讯地图配置
  tencent: {
    apiKey: string
    region: string
  }
}

export const mapConfig: MapConfig = {
  baidu: {
    apiKey: 'aRVvjOUyolTRKLu5f9cHzshCvTRKQNT2', // 百度地图密钥
    region: 'CN' // 中国地区
  },

  google: {
    // 注意：这里需要替换为真实的Google Maps API密钥
    // 获取方式：https://developers.google.com/maps/documentation/javascript/get-api-key
    apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || 'AIzaSyDummy_REPLACE_WITH_REAL_KEY',
    region: 'SG', // 新加坡地区
    language: 'zh-CN' // 中文
  },

  tencent: {
    apiKey: 'OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77', // 现有的腾讯地图密钥
    region: 'CN' // 中国地区
  }
}

/**
 * 地区推荐说明（仅供参考）
 * - 中国大陆地区：推荐使用百度地图
 * - 新加坡、马来西亚、东南亚地区：推荐使用 Google Maps
 * - 中国大陆地区（备选）：推荐使用腾讯地图
 * - 香港、澳门、台湾：推荐使用 Google Maps
 *
 * 实际使用时请通过 preferredProvider 参数手动指定地图提供商
 */

/**
 * 生成外部地图链接
 */
export function generateExternalMapUrl(
  provider: 'baidu' | 'google' | 'tencent',
  latitude: number,
  longitude: number,
  title?: string,
  address?: string
): string {
  if (provider === 'google') {
    const params = new URLSearchParams()
    params.set('q', `${latitude},${longitude}`)
    if (title) params.set('query', title)
    return `https://www.google.com/maps?${params.toString()}`
  } else if (provider === 'baidu') {
    // 百度地图
    const params = new URLSearchParams()
    params.set('location', `${latitude},${longitude}`)
    if (title) params.set('title', title)
    if (address) params.set('content', address)
    params.set('output', 'html')
    params.set('src', 'webapp.baidu.openAPIdemo')
    return `https://api.map.baidu.com/marker?${params.toString()}`
  } else {
    // 腾讯地图
    const marker = `coord:${latitude},${longitude}`
    const titleParam = title ? `;title:${encodeURIComponent(title)}` : ''
    const addrParam = address ? `;addr:${encodeURIComponent(address)}` : ''
    return `https://apis.map.qq.com/uri/v1/marker?marker=${marker}${titleParam}${addrParam}&referer=myapp`
  }
}
