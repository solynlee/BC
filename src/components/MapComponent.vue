<template>
  <div class="border-2 border-[#D0E0ED] rounded-sm overflow-hidden relative bg-gray-100">

    <!-- 地图iframe容器 -->
    <iframe ref="mapIframe" :src="mapLoaderUrl" :style="{ width: '100%', height: '100%', border: 'none' }"
      class="map-iframe" @load="onIframeLoad">
    </iframe>

    <!-- 地图提供商指示器 -->
    <!-- <div v-if="!loading && !error"
      class="absolute top-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded z-30">
      {{ mapProvider === 'google' ? 'Google Maps' : mapProvider === 'baidu' ? '百度地图' : '腾讯地图' }}
    </div> -->

    <!-- 加载状态 -->
    <div v-if="loading" class="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75 z-40">
      <div class="text-gray-500 text-sm">
        {{ mapProvider === 'google' ? 'Google地图加载中...' : mapProvider === 'baidu' ? '百度地图加载中...' : '腾讯地图加载中...' }}
      </div>
    </div>

    <!-- 错误状态 -->
    <div v-if="error" class="absolute inset-0 flex items-center justify-center bg-gray-50 z-40">
      <div class="text-center text-gray-500">
        <div class="text-sm mb-2">
          {{ mapProvider === 'google' ? 'Google地图' : mapProvider === 'baidu' ? '百度地图' : '腾讯地图' }}加载失败
        </div>
        <!-- <div class="text-xs mb-1">{{ location.address }}</div>
        <div class="text-xs mb-2">坐标: {{ location.latitude }}, {{ location.longitude }}</div> -->
        <div class="flex gap-2 justify-center">
          <div class="text-xs text-blue-500 cursor-pointer" @click="retryMap">重试</div>
          <div v-if="mapProvider === 'baidu'" class="text-xs text-purple-500 cursor-pointer" @click="switchToGoogle">
            切换到Google地图</div>
          <div v-if="mapProvider === 'baidu'" class="text-xs text-orange-500 cursor-pointer" @click="switchToTencent">
            切换到腾讯地图</div>
          <div v-if="mapProvider === 'google'" class="text-xs text-green-500 cursor-pointer" @click="switchToBaidu">
            切换到百度地图</div>
          <div v-if="mapProvider === 'tencent'" class="text-xs text-green-500 cursor-pointer" @click="switchToBaidu">
            切换到百度地图</div>
          <div class="text-xs text-green-500 cursor-pointer" @click="openInExternal">外部地图</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import type { MapProps } from '../../types/tencent-map'
import { mapConfig, generateExternalMapUrl } from '../config/maps'

interface Props extends MapProps { }

const props = withDefaults(defineProps<Props>(), {
  zoom: 16,
  height: '300px',
  width: '100%',
  preferredProvider: 'baidu'
})

const mapIframe = ref<HTMLIFrameElement>()
const loading = ref(true)
const error = ref(false)
const mapProvider = ref<'baidu' | 'google' | 'tencent'>('baidu')

// 添加超时处理，避免一直显示加载中
const initTimeout = ref<number>()

// 直接使用传入的地图提供商
const selectMapProvider = (): 'baidu' | 'google' | 'tencent' => {
  return props.preferredProvider
}

// 计算地图加载器URL
const mapLoaderUrl = computed(() => {
  if (mapProvider.value === 'google') {
    return '/google-map-loader.html'
  } else if (mapProvider.value === 'baidu') {
    return '/map-loader.html' // 百度地图使用已更新的map-loader.html
  } else {
    return '/map-loader.html' // 腾讯地图也使用map-loader.html（如果需要腾讯地图可以创建单独的文件）
  }
})

// iframe加载完成处理
const onIframeLoad = () => {
  console.log('iframe加载完成:', mapIframe.value?.src)
  // iframe加载完成后，等待API准备就绪的消息
}

// 处理来自iframe的消息
const handleIframeMessage = (event: MessageEvent) => {
  // 安全检查：确保消息来自我们的iframe
  if (!mapIframe.value?.contentWindow || event.source !== mapIframe.value.contentWindow) {
    return
  }

  console.log('收到来自iframe的消息:', event.data)

  switch (event.data.type) {
    case 'apiReady':
      console.log('API准备就绪，开始发送地图配置')
      sendMapConfig()
      break

    case 'mapReady':
      console.log('地图加载结果:', event.data.success ? '成功' : '失败')
      if (event.data.success) {
        loading.value = false
        error.value = false
        // 清除超时
        if (initTimeout.value) {
          clearTimeout(initTimeout.value)
          initTimeout.value = undefined
        }
      } else {
        console.error('地图加载失败:', event.data.error)
        error.value = true
        loading.value = false
        // 清除超时
        if (initTimeout.value) {
          clearTimeout(initTimeout.value)
          initTimeout.value = undefined
        }
      }
      break
  }
}

// 发送地图配置到iframe
const sendMapConfig = () => {
  if (mapIframe.value?.contentWindow) {
    const baseConfig = {
      latitude: props.location.latitude,
      longitude: props.location.longitude,
      zoom: props.zoom,
      title: props.location.title,
      address: props.location.address
    }

    // 根据地图提供商添加特定配置
    let providerConfig
    if (mapProvider.value === 'google') {
      providerConfig = { ...baseConfig, ...mapConfig.google }
    } else if (mapProvider.value === 'baidu') {
      providerConfig = { ...baseConfig, ...mapConfig.baidu }
    } else {
      providerConfig = { ...baseConfig, ...mapConfig.tencent }
    }

    const config = {
      type: 'initMap',
      config: providerConfig
    }

    console.log(`发送${mapProvider.value}地图配置:`, config)
    console.log('发送配置到iframe:', mapIframe.value.src)
    mapIframe.value.contentWindow.postMessage(config, '*')
  } else {
    console.error('iframe contentWindow不可用')
  }
}

// 切换到百度地图
const switchToBaidu = () => {
  mapProvider.value = 'baidu'
  retryMap()
}

// 切换到Google地图
const switchToGoogle = () => {
  mapProvider.value = 'google'
  retryMap()
}

// 切换到腾讯地图
const switchToTencent = () => {
  mapProvider.value = 'tencent'
  retryMap()
}

// 重试地图加载
const retryMap = () => {
  loading.value = true
  error.value = false

  // 重新加载iframe
  if (mapIframe.value) {
    mapIframe.value.src = mapLoaderUrl.value
  }
}

// 打开外部地图
const openInExternal = () => {
  const { latitude, longitude, title, address } = props.location
  const url = generateExternalMapUrl(mapProvider.value, latitude, longitude, title, address)
  window.open(url, '_blank')
}

// 初始化地图提供商
const initMapProvider = () => {
  mapProvider.value = selectMapProvider()
  console.log(`使用指定的地图提供商: ${mapProvider.value}`)
  console.log(`地图加载器URL: ${mapLoaderUrl.value}`)
  console.log(`默认preferredProvider: ${props.preferredProvider}`)

  // 设置30秒超时，如果地图一直没有加载完成就显示错误
  initTimeout.value = setTimeout(() => {
    if (loading.value) {
      console.error('地图加载超时')
      loading.value = false
      error.value = true
    }
  }, 30000)
}

onMounted(() => {
  // 初始化地图提供商选择
  initMapProvider()

  window.addEventListener('message', handleIframeMessage)
})

onUnmounted(() => {
  window.removeEventListener('message', handleIframeMessage)
  // 清除超时
  if (initTimeout.value) {
    clearTimeout(initTimeout.value)
    initTimeout.value = undefined
  }
})

// 声明全局变量类型
declare global {
  interface Window {
    qq: {
      maps: any
    }
    BMap: any
  }
}
</script>

<style scoped>
.map-iframe {
  position: relative;
  width: 100% !important;
  height: 100% !important;
}

/* 地图提供商指示器样式 */
.map-provider-indicator {
  transition: opacity 0.3s ease;
}

/* 错误状态按钮样式 */
.error-buttons {
  display: flex;
  gap: 8px;
  justify-content: center;
  flex-wrap: wrap;
}

.error-buttons>div {
  transition: all 0.2s ease;
  padding: 2px 4px;
  border-radius: 2px;
}

.error-buttons>div:hover {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>
