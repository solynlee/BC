<template>
  <div class="relative h-full">
    <img src="@/assets/images/news/bg.png" alt="" srcset="" class="absolute top-0 left-0 w-full h-auto">
    <div class="z-10 relative">
      <p class="w-150 flex items-center justify-between mx-auto pt-36 ">
        <img src="@/assets/images/home/leftArr.png" alt="" srcset="" class="w-14 ">
        <span class="text-[#0E285C] text-5xl font-bold">{{ t('pages.news.title') }}</span>
        <img src="@/assets/images/home/rightArr.png" alt="" srcset="" class="w-14">
      </p>
      <p class="text-[#0E285C]  text-3xl text-center mb-20 opacity-60 mt-4">{{ t('pages.news.title2') }}</p>
      <div class="px-38 ">
<<<<<<< HEAD
        <div class="h-170 flex justify-between gap-4 text-white" v-if="list1?.[0]">
          <div class="flex-1 gradient-to-navy2">
            <img :src="list1?.[0].conver" alt="" srcset="" class="w-full h-atuo object-cover">
            <div class="px-16">
              <p class="text-3xl font-bold line-clamp-1">{{ list1?.[0].title }}</p>
              <p class=" line-clamp-2 mt-4 mb-8">{{ list1?.[0].abstract }}</p>
=======
        <div class="h-170 flex justify-between gap-4 text-white">
          <div class="flex-1 gradient-to-navy2">
            <img src="@/assets/images/news/image1.png" alt="" srcset="" class="w-full h-atuo object-cover">
            <div class="px-16">
              <p class="text-3xl font-bold line-clamp-1">【大公报】派息率稳定 银行股受追捧</p>
              <p class=" line-clamp-2 mt-4 mb-8">本周港股市场延续稳中有进的格局，交易热度集中在银行红利股与科技股，周内分别上涨1.79%和0.43%。</p>
>>>>>>> origin/main
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-4  cursor-pointer">
                  <div class="bg-[#A48871] w-10 h-10 flex items-center justify-center rounded-full">
                    <svg class="w-6 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <div class="text-[#A48871] text-xl border-b border-[#A48871]">{{ t('pages.home.product.btn')
                  }}</div>
                </div>
<<<<<<< HEAD
                <p class="text-2xl opacity-60">{{ dayjs.unix(list1?.[0].publishDate).format('YYYY-MM-DD') }}</p>
              </div>
            </div>
          </div>
          <div class="flex-1 flex flex-col gap-4" v-if="list1?.[1]">
            <div class="flex-1 gradient-to-navy2">
              <img :src="list1?.[1].conver" alt="" srcset="" class="w-full h-atuo  object-cover"></img>
              <div class="px-16">
                <p class="text-3xl font-bold line-clamp-1">{{ list1?.[1].title }}</p>
=======
                <p class="text-2xl opacity-60">2025-07-13</p>
              </div>
            </div>
          </div>
          <div class="flex-1 flex flex-col gap-4">
            <div class="flex-1 gradient-to-navy2">
              <img src="@/assets/images/news/image2.png" alt="" srcset="" class="w-full h-atuo  object-cover"></img>
              <div class="px-16">
                <p class="text-3xl font-bold line-clamp-1">【港股一周见】红利股表现出色，政策加持港股流动性</p>
>>>>>>> origin/main

                <div class="flex items-center justify-between mt-10">
                  <div class="flex items-center gap-4  cursor-pointer">
                    <div class="bg-[#A48871] w-10 h-10 flex items-center justify-center rounded-full">
                      <svg class="w-6 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div class="text-[#A48871] text-xl border-b border-[#A48871]">{{ t('pages.home.product.btn')
                    }}</div>
                  </div>
<<<<<<< HEAD
                  <p class="text-2xl opacity-60">{{ dayjs.unix(list1?.[1].publishDate).format('YYYY-MM-DD') }}</p>
                </div>
              </div>
            </div>
            <div class="flex-1 gradient-to-navy2" v-if="list1?.[2]">
              <img :src="list1?.[2].conver" alt="" srcset="" class="w-full h-atuo  object-cover"></img>
              <div class="px-16">
                <p class="text-3xl font-bold line-clamp-1">{{ list1?.[2].title }}</p>
=======
                  <p class="text-2xl opacity-60">2025-07-13</p>
                </div>
              </div>
            </div>
            <div class="flex-1 gradient-to-navy2">
              <img src="@/assets/images/news/image3.png" alt="" srcset="" class="w-full h-atuo  object-cover"></img>
              <div class="px-16">
                <p class="text-3xl font-bold line-clamp-1">【第一财经】今日亚太股市及港股格局解读</p>
>>>>>>> origin/main

                <div class="flex items-center justify-between mt-10">
                  <div class="flex items-center gap-4  cursor-pointer">
                    <div class="bg-[#A48871] w-10 h-10 flex items-center justify-center rounded-full">
                      <svg class="w-6 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div class="text-[#A48871] text-xl border-b border-[#A48871]">{{ t('pages.home.product.btn')
                    }}</div>
                  </div>
<<<<<<< HEAD
                  <p class="text-2xl opacity-60">{{ dayjs.unix(list1?.[2].publishDate).format('YYYY-MM-DD') }}</p>
=======
                  <p class="text-2xl opacity-60">2025-07-13</p>
>>>>>>> origin/main
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="my-30">
          <div class="flex items-center gap-4 border-b border-[#001949] pl-4 pb-4">
            <img src="@/assets/images/home/rightArr.png" alt="" srcset="" class="w-10">
<<<<<<< HEAD
            <span class="text-[#001949] text-4xl font-bold">{{ t('pages.news.title3') }}</span>
          </div>
          <div class="mt-40 bg-white pl-120 p-10 relative text-[text-[#001949]]" v-for="value in list2" :key="value.id">
            <img :src="value.conver" alt="" srcset="" class="absolute left-0 bottom-10 w-105 h-auto">
            <div>
              <div>
                <p class=" font-bold text-3xl line-clamp-1 mb-8">{{ value.title }}
                </p>
                <p class="opacity-60 text-2xl line-clamp-2">{{ value.abstract }}</p>
=======
            <span class="text-[#001949] text-4xl font-bold">港股一周见</span>
          </div>
          <div class="mt-40 bg-white pl-120 p-10 relative text-[text-[#001949]]">
            <img src="@/assets/images/news/image4.png" alt="" srcset="" class="absolute left-0 bottom-10 w-105 h-auto">
            <div>
              <div>
                <p class=" font-bold text-3xl line-clamp-1 mb-8">{{ t('pages.insights.insight.title3') }}
                </p>
                <p class="opacity-60 text-2xl line-clamp-2">{{ t('pages.insights.insight.desc3') }}</p>
>>>>>>> origin/main
              </div>
              <div class="flex justify-between items-center">
                <div class="flex items-center gap-4 mt-8 cursor-pointer">
                  <div class="bg-[#334CA8] w-10 h-10 flex items-center justify-center rounded-full">
                    <svg class="w-6 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <div class="text-[#334CA8] text-xl border-b border-[#334CA8]">{{ t('pages.home.product.btn')
                  }}</div>
                </div>
<<<<<<< HEAD
                <p class="text-2xl opacity-60">{{ dayjs.unix(value.publishDate).format('YYYY-MM-DD') }}</p>
              </div>
            </div>
          </div>

        </div>
        <div class="my-30">
          <div class="flex items-center gap-4 border-b border-[#001949] pl-4 pb-4">
            <img src="@/assets/images/home/rightArr.png" alt="" srcset="" class="w-10">
            <span class="text-[#001949] text-4xl font-bold">{{ t('pages.news.title4') }}</span>
          </div>
          <div class="mt-40 bg-white pl-120 p-10 relative text-[text-[#001949]]" v-for="value in list3" :key="value.id">
            <img :src="value.conver" alt="" srcset="" class="absolute left-0 bottom-10 w-105 h-auto">
            <div>
              <div>
                <p class=" font-bold text-3xl line-clamp-1 mb-8">{{ value.title }}
                </p>
                <p class="opacity-60 text-2xl line-clamp-2">{{ value.abstract }}</p>
=======
                <p class="text-2xl opacity-60">2025-07-13</p>
              </div>
            </div>
          </div>
          <div class="mt-40 bg-white pl-120 p-10 relative text-[text-[#001949]]">
            <img src="@/assets/images/news/image5.png" alt="" srcset="" class="absolute left-0 bottom-10 w-105 h-auto">
            <div>
              <div>
                <p class=" font-bold text-3xl line-clamp-1 mb-8">{{ t('pages.insights.insight.title3') }}
                </p>
                <p class="opacity-60 text-2xl line-clamp-2">{{ t('pages.insights.insight.desc3') }}</p>
>>>>>>> origin/main
              </div>
              <div class="flex justify-between items-center">
                <div class="flex items-center gap-4 mt-8 cursor-pointer">
                  <div class="bg-[#334CA8] w-10 h-10 flex items-center justify-center rounded-full">
                    <svg class="w-6 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <div class="text-[#334CA8] text-xl border-b border-[#334CA8]">{{ t('pages.home.product.btn')
                  }}</div>
                </div>
<<<<<<< HEAD
                <p class="text-2xl opacity-60">{{ dayjs.unix(value.publishDate).format('YYYY-MM-DD') }}</p>
              </div>
            </div>
          </div>

=======
                <p class="text-2xl opacity-60">2025-07-13</p>
              </div>
            </div>
          </div>
>>>>>>> origin/main
        </div>
        <div class="my-30">
          <div class="flex items-center gap-4 border-b border-[#001949] pl-4 pb-4">
            <img src="@/assets/images/home/rightArr.png" alt="" srcset="" class="w-10">
<<<<<<< HEAD
            <span class="text-[#001949] text-4xl font-bold">{{ t('pages.news.title5') }}</span>
          </div>
          <div class="mt-40 bg-white pl-120 p-10 relative text-[text-[#001949]]" v-for="value in list4" :key="value.id">
            <img :src="value.conver" alt="" srcset="" class="absolute left-0 bottom-10 w-105 h-auto">
            <div>
              <div>
                <p class=" font-bold text-3xl line-clamp-1 mb-8">{{ value.title }}
                </p>
                <p class="opacity-60 text-2xl line-clamp-2">{{ value.abstract }}</p>
=======
            <span class="text-[#001949] text-4xl font-bold">大公报</span>
          </div>
          <div class="mt-40 bg-white pl-120 p-10 relative text-[text-[#001949]]">
            <img src="@/assets/images/news/image4.png" alt="" srcset="" class="absolute left-0 bottom-10 w-105 h-auto">
            <div>
              <div>
                <p class=" font-bold text-3xl line-clamp-1 mb-8">{{ t('pages.insights.insight.title3') }}
                </p>
                <p class="opacity-60 text-2xl line-clamp-2">{{ t('pages.insights.insight.desc3') }}</p>
>>>>>>> origin/main
              </div>
              <div class="flex justify-between items-center">
                <div class="flex items-center gap-4 mt-8 cursor-pointer">
                  <div class="bg-[#334CA8] w-10 h-10 flex items-center justify-center rounded-full">
                    <svg class="w-6 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <div class="text-[#334CA8] text-xl border-b border-[#334CA8]">{{ t('pages.home.product.btn')
                  }}</div>
                </div>
<<<<<<< HEAD
                <p class="text-2xl opacity-60">{{ dayjs.unix(value.publishDate).format('YYYY-MM-DD') }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="my-30">
          <div class="flex items-center gap-4 border-b border-[#001949] pl-4 pb-4">
            <img src="@/assets/images/home/rightArr.png" alt="" srcset="" class="w-10">
            <span class="text-[#001949] text-4xl font-bold">{{ t('pages.news.title6') }}</span>
          </div>
          <div class="mt-40 bg-white pl-120 p-10 relative text-[text-[#001949]]" v-for="value in list5" :key="value.id">
            <img :src="value.conver" alt="" srcset="" class="absolute left-0 bottom-10 w-105 h-auto">
            <div>
              <div>
                <p class=" font-bold text-3xl line-clamp-1 mb-8">{{ value.title }}
                </p>
                <p class="opacity-60 text-2xl line-clamp-2">{{ value.abstract }}</p>
=======
                <p class="text-2xl opacity-60">2025-07-13</p>
              </div>
            </div>
          </div>
          <div class="mt-40 bg-white pl-120 p-10 relative text-[text-[#001949]]">
            <img src="@/assets/images/news/image5.png" alt="" srcset="" class="absolute left-0 bottom-10 w-105 h-auto">
            <div>
              <div>
                <p class=" font-bold text-3xl line-clamp-1 mb-8">{{ t('pages.insights.insight.title3') }}
                </p>
                <p class="opacity-60 text-2xl line-clamp-2">{{ t('pages.insights.insight.desc3') }}</p>
>>>>>>> origin/main
              </div>
              <div class="flex justify-between items-center">
                <div class="flex items-center gap-4 mt-8 cursor-pointer">
                  <div class="bg-[#334CA8] w-10 h-10 flex items-center justify-center rounded-full">
                    <svg class="w-6 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <div class="text-[#334CA8] text-xl border-b border-[#334CA8]">{{ t('pages.home.product.btn')
                  }}</div>
                </div>
<<<<<<< HEAD
                <p class="text-2xl opacity-60">{{ dayjs.unix(value.publishDate).format('YYYY-MM-DD') }}</p>
=======
                <p class="text-2xl opacity-60">2025-07-13</p>
              </div>
            </div>
          </div>
        </div>
        <div class="my-30">
          <div class="flex items-center gap-4 border-b border-[#001949] pl-4 pb-4">
            <img src="@/assets/images/home/rightArr.png" alt="" srcset="" class="w-10">
            <span class="text-[#001949] text-4xl font-bold">被投企业新闻</span>
          </div>
          <div class="mt-40 bg-white pl-120 p-10 relative text-[text-[#001949]]">
            <img src="@/assets/images/news/image4.png" alt="" srcset="" class="absolute left-0 bottom-10 w-105 h-auto">
            <div>
              <div>
                <p class=" font-bold text-3xl line-clamp-1 mb-8">{{ t('pages.insights.insight.title3') }}
                </p>
                <p class="opacity-60 text-2xl line-clamp-2">{{ t('pages.insights.insight.desc3') }}</p>
              </div>
              <div class="flex justify-between items-center">
                <div class="flex items-center gap-4 mt-8 cursor-pointer">
                  <div class="bg-[#334CA8] w-10 h-10 flex items-center justify-center rounded-full">
                    <svg class="w-6 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <div class="text-[#334CA8] text-xl border-b border-[#334CA8]">{{ t('pages.home.product.btn')
                  }}</div>
                </div>
                <p class="text-2xl opacity-60">2025-07-13</p>
              </div>
            </div>
          </div>
          <div class="mt-40 bg-white pl-120 p-10 relative text-[text-[#001949]]">
            <img src="@/assets/images/news/image5.png" alt="" srcset="" class="absolute left-0 bottom-10 w-105 h-auto">
            <div>
              <div>
                <p class=" font-bold text-3xl line-clamp-1 mb-8">{{ t('pages.insights.insight.title3') }}
                </p>
                <p class="opacity-60 text-2xl line-clamp-2">{{ t('pages.insights.insight.desc3') }}</p>
              </div>
              <div class="flex justify-between items-center">
                <div class="flex items-center gap-4 mt-8 cursor-pointer">
                  <div class="bg-[#334CA8] w-10 h-10 flex items-center justify-center rounded-full">
                    <svg class="w-6 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <div class="text-[#334CA8] text-xl border-b border-[#334CA8]">{{ t('pages.home.product.btn')
                  }}</div>
                </div>
                <p class="text-2xl opacity-60">2025-07-13</p>
              </div>
            </div>
          </div>
        </div>
        <div class="my-30">
          <div class="flex items-center gap-4 border-b border-[#001949] pl-4 pb-4">
            <img src="@/assets/images/home/rightArr.png" alt="" srcset="" class="w-10">
            <span class="text-[#001949] text-4xl font-bold">拔萃要闻</span>
          </div>
          <div class="mt-40 bg-white pl-120 p-10 relative text-[text-[#001949]]">
            <img src="@/assets/images/news/image4.png" alt="" srcset="" class="absolute left-0 bottom-10 w-105 h-auto">
            <div>
              <div>
                <p class=" font-bold text-3xl line-clamp-1 mb-8">{{ t('pages.insights.insight.title3') }}
                </p>
                <p class="opacity-60 text-2xl line-clamp-2">{{ t('pages.insights.insight.desc3') }}</p>
              </div>
              <div class="flex justify-between items-center">
                <div class="flex items-center gap-4 mt-8 cursor-pointer">
                  <div class="bg-[#334CA8] w-10 h-10 flex items-center justify-center rounded-full">
                    <svg class="w-6 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <div class="text-[#334CA8] text-xl border-b border-[#334CA8]">{{ t('pages.home.product.btn')
                  }}</div>
                </div>
                <p class="text-2xl opacity-60">2025-07-13</p>
>>>>>>> origin/main
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { useI18n } from 'vue-i18n'
const { t } = useI18n()
<<<<<<< HEAD
import { useCustomApiWithAutoRefresh } from '@/utils/useAutoRefreshApi'
import api from '@/utils/http'
import dayjs from 'dayjs'
interface List {
  id: number
  title: string
  abstract: string
  conver: string
  content: string
  publishDate: number
}

const { data: list1 } = useCustomApiWithAutoRefresh<List[]>(() => api.get({
  url: '/article/list',
  params: {
    column: 'news.home',
    count: 3
  }
}))

const { data: list2 } = useCustomApiWithAutoRefresh<List[]>(() => api.get({
  url: '/article/list',
  params: {
    column: 'news.hkweek',
    count: 3
  }
}))
const { data: list3 } = useCustomApiWithAutoRefresh<List[]>(() => api.get({
  url: '/article/list',
  params: {
    column: 'news.dgdaily',
    count: 3
  }
}))
const { data: list4 } = useCustomApiWithAutoRefresh<List[]>(() => api.get({
  url: '/article/list',
  params: {
    column: 'news.enternews',
    count: 3
  }
}))
const { data: list5 } = useCustomApiWithAutoRefresh<List[]>(() => api.get({
  url: '/article/list',
  params: {
    column: 'news.bcnews',
    count: 3
  }
}))
=======



>>>>>>> origin/main
</script>

<style scoped></style>
<style type="text/tailwindcss">
@layer utilities {

  .gradient-to-navy2 {
    background: -webkit-linear-gradient(top,
        #fff 0%,
        #052958 55%);
    /* 标准语法（补充角度值增强兼容性） */
    background: linear-gradient(180deg,
        #fff 0%,
        #052958 55%);
  }

}
</style>