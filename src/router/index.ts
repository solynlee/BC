import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import i18n from '@/i18n'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    // 如果有保存的位置（浏览器前进/后退），则恢复位置
    if (savedPosition) {
      return savedPosition
    }

    // 如果有hash，等待DOM更新后滚动到对应元素
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const element = document.getElementById(to.hash.slice(1))
          if (element) {
            resolve({
              el: element,
              behavior: 'smooth',
              top: 0
            })
          } else {
            // 如果找不到元素，滚动到页面顶部header
            const headerElement = document.getElementById('page-top')
            if (headerElement) {
              resolve({
                el: headerElement,
                behavior: 'smooth',
                top: 0
              })
            } else {
              resolve({ top: 0, behavior: 'smooth' })
            }
          }
        }, 50) // 进一步减少延迟，50ms更快速响应
      })
    }

    // 默认滚动到页面顶部header - 快速响应
    return new Promise((resolve) => {
      setTimeout(() => {
        const headerElement = document.getElementById('page-top')
        if (headerElement) {
          // 立即滚动到header位置
          headerElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          })
          resolve({ top: 0 })
        } else {
          // 如果找不到header，快速滚动到顶部
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          })
          resolve({ top: 0 })
        }
      }, 50) // 减少延迟到50ms，更快响应
    })
  },
})

// 路由守卫：更新页面标题
router.afterEach((to) => {
  // 更新页面标题
  try {
    const key = to.meta?.titleKey as string | undefined
    const t = (i18n.global as any).t

    if (typeof t === 'function') {
      const site = t('app.title') || 'DC Enterprise'
      document.title = key ? `${t(key) || '页面'} - ${site}` : site
    } else {
      document.title = 'DC Enterprise'
    }
  } catch (error) {
    console.warn('更新页面标题失败:', error)
    document.title = 'DC Enterprise'
  }

  // 快速滚动到顶部header - 无感体验
  setTimeout(() => {
    const headerElement = document.getElementById('page-top')
    if (headerElement) {
      // 检测当前滚动位置，如果距离顶部太远才滚动
      const currentScroll = window.scrollY || document.documentElement.scrollTop
      if (currentScroll > 50) { // 只有当滚动超过50px时才滚动
        headerElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        })
      }
    }
  }, 80) // 80ms快速响应

  // 轻微修正检查（只在必要时）
  setTimeout(() => {
    const headerElement = document.getElementById('page-top')
    if (headerElement) {
      const rect = headerElement.getBoundingClientRect()
      // 如果header距离顶部超过20px，进行轻微修正
      if (rect.top > 20 || rect.top < -10) {
        headerElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
  }, 250) // 250ms进行最终检查
})

// 路由错误处理
router.onError((error) => {
  console.error('路由错误:', error)
})

export default router