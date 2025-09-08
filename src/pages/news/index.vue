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
        <div class="h-170 flex justify-between gap-4 text-white" v-if="list1?.[0]">
          <div class="flex-1 gradient-to-navy2">
            <img :src="list1?.[0].conver" alt="" srcset="" class="w-full h-atuo object-cover">
            <div class="px-16">
              <p class="text-3xl font-bold line-clamp-1">{{ list1?.[0].title }}</p>
              <p class=" line-clamp-2 mt-4 mb-8">{{ list1?.[0].abstract }}</p>
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
                <p class="text-2xl opacity-60">{{ dayjs.unix(list1?.[0].publishDate).format('YYYY-MM-DD') }}</p>
              </div>
            </div>
          </div>
          <div class="flex-1 flex flex-col gap-4" v-if="list1?.[1]">
            <div class="flex-1 gradient-to-navy2">
              <img :src="list1?.[1].conver" alt="" srcset="" class="w-full h-atuo  object-cover"></img>
              <div class="px-16">
                <p class="text-3xl font-bold line-clamp-1">{{ list1?.[1].title }}</p>

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
                  <p class="text-2xl opacity-60">{{ dayjs.unix(list1?.[1].publishDate).format('YYYY-MM-DD') }}</p>
                </div>
              </div>
            </div>
            <div class="flex-1 gradient-to-navy2" v-if="list1?.[2]">
              <img :src="list1?.[2].conver" alt="" srcset="" class="w-full h-atuo  object-cover"></img>
              <div class="px-16">
                <p class="text-3xl font-bold line-clamp-1">{{ list1?.[2].title }}</p>

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
                  <p class="text-2xl opacity-60">{{ dayjs.unix(list1?.[2].publishDate).format('YYYY-MM-DD') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="my-30">
          <div class="flex items-center gap-4 border-b border-[#001949] pl-4 pb-4">
            <img src="@/assets/images/home/rightArr.png" alt="" srcset="" class="w-10">
            <span class="text-[#001949] text-4xl font-bold">{{ t('pages.news.title3') }}</span>
          </div>
          <div class="mt-40 bg-white pl-120 p-10 relative text-[text-[#001949]]" v-for="value in list2" :key="value.id">
            <img :src="value.conver" alt="" srcset="" class="absolute left-0 bottom-10 w-105 h-auto">
            <div>
              <div>
                <p class=" font-bold text-3xl line-clamp-1 mb-8">{{ value.title }}
                </p>
                <p class="opacity-60 text-2xl line-clamp-2">{{ value.abstract }}</p>
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
                <p class="text-2xl opacity-60">{{ dayjs.unix(value.publishDate).format('YYYY-MM-DD') }}</p>
              </div>
            </div>
          </div>

        </div>
        <div class="my-30">
          <div class="flex items-center gap-4 border-b border-[#001949] pl-4 pb-4">
            <img src="@/assets/images/home/rightArr.png" alt="" srcset="" class="w-10">
            <span class="text-[#001949] text-4xl font-bold">{{ t('pages.news.title5') }}</span>
          </div>
          <div class="mt-40 bg-white pl-120 p-10 relative text-[text-[#001949]]" v-for="value in list4" :key="value.id">
            <img :src="value.conver" alt="" srcset="" class="absolute left-0 bottom-10 w-105 h-auto">
            <div>
              <div>
                <p class=" font-bold text-3xl line-clamp-1 mb-8">{{ value.title }}
                </p>
                <p class="opacity-60 text-2xl line-clamp-2">{{ value.abstract }}</p>
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
                <p class="text-2xl opacity-60">{{ dayjs.unix(value.publishDate).format('YYYY-MM-DD') }}</p>
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