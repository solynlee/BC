<template>
  <section>
    <div class="relative">
      <img src="@/assets/images/insights/bg.png" alt="" srcset="" class="w-full">
<<<<<<< HEAD
      <div class="bg-[#072766] px-14  pt-30 text-white absolute top-29 w-130 left-40 ">
=======
      <div class="bg-[#072766] px-14  pt-30 text-white absolute top-29  left-40 ">
>>>>>>> origin/main
        <p class="text-5xl font-bold mb-4">{{ t('pages.insights.banner.title') }}</p>
        <p class="text-3xl opacity-60">{{ t('pages.insights.banner.enTitle') }}</p>
        <div class="w-45 h-3 bg-[#9F8570] mb-10 mt-18"></div>

<<<<<<< HEAD
        <p class="text-5xl font-bold mt-8 mb-25 leading-18" :class="{ '!text-4xl  !leading-12 ': isEn }">{{
          t('pages.insights.banner.desc1') }}<br />{{
            t('pages.insights.banner.desc2') }}</p>
      </div>
    </div>
    <div class="text-[#f1f5fa] pl-38 pr-20 pt-10 pb-20">
      <div class="pl-160 pr-20 text-[#0B2859] text-xl opacity-70 leading-9">
=======
        <p class="text-5xl font-bold mt-8 mb-25 leading-18">{{ t('pages.insights.banner.desc1') }}<br />{{
          t('pages.insights.banner.desc2') }}</p>
      </div>
    </div>
    <div class="text-[#f1f5fa] px-38 pt-10 pb-20">
      <div class="pl-140 pr-20 text-[#0B2859] text-xl leading-9">
>>>>>>> origin/main
        {{ t('pages.insights.banner.desc3') }}
      </div>
      <div class="mt-28 ">
        <div class="flex items-center gap-4 border-b border-[#001949] pl-4 pb-4">
          <img src="@/assets/images/home/rightArr.png" alt="" srcset="" class="w-10">
<<<<<<< HEAD
          <span class="text-[#001949] text-4xl font-bold">{{ t('pages.insights.title1') }}</span>
        </div>
        <div class="mt-10 p-4 h-200 relative" v-if="teamList1 && teamList1.length > 0">
          <img :src="teamList1?.[0].conver" alt="" srcset="" class="w-240">
          <div class="bg-white h-120 w-170 absolute bottom-0 right-8 z-20 p-15">
            <p class="text-[#072867] font-bold text-3xl line-clamp-2">{{ teamList1?.[0].title }}</p>
            <p class="text-[#072867] text-2xl mt-10 mb-15 line-clamp-5">
              {{ teamList1?.[0].abstract }}</p>
=======
          <span class="text-[#001949] text-4xl font-bold">投资洞见</span>
        </div>
        <div class="mt-10 p-4 h-200 relative">
          <img src="@/assets/images/insights/image1.png" alt="" srcset="" class="w-240">
          <div class="bg-white h-120 w-170 absolute bottom-0 right-8 z-20 p-15">
            <p class="text-[#072867] font-bold text-3xl line-clamp-2">{{ t('pages.insights.insight.title1') }}</p>
            <p class="text-[#072867] text-2xl mt-10 mb-15 line-clamp-5">
              {{ t('pages.insights.insight.desc1') }}</p>
>>>>>>> origin/main
            <div class="flex items-center gap-4 mt-8 cursor-pointer">
              <div class="bg-[#334CA8] w-10 h-10 flex items-center justify-center rounded-full">
                <svg class="w-6 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div class="text-[#334CA8] text-xl border-b border-[#334CA8]">{{ t('pages.home.product.btn')
              }}</div>
            </div>
          </div>
          <div class="w-37 h-88 bg-[#C1A894] absolute bottom-40 right-0 z-1"></div>
        </div>
<<<<<<< HEAD
        <template v-for="item in teamList1?.slice(1)" :key="item.id">
          <div class="mt-10 bg-white pl-80  p-10 relative">
            <img :src="item.conver" alt="" srcset="" class="absolute left-10 -top-10 w-60 h-auto">
            <div class="flex justify-between  gap-10">
              <div>
                <p class="text-[#0B2859] font-bold text-3xl line-clamp-1 mb-8">{{ item.title }}
                </p>
                <p class="text-[#001949] opacity-60 text-2xl line-clamp-2">{{ item.abstract }}</p>
              </div>
              <div class="flex items-center gap-4 mt-8 cursor-pointer">
                <div class="bg-[#334CA8] w-10 h-10 flex items-center justify-center rounded-full">
                  <svg class="w-6 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>

              </div>
            </div>
          </div>
        </template>

=======
        <div class="mt-10 bg-white pl-80  p-10 relative">
          <img src="@/assets/images/insights/image2.png" alt="" srcset="" class="absolute left-10 -top-10 w-60 h-auto">
          <div class="flex justify-between  gap-10">
            <div>
              <p class="text-[#0B2859] font-bold text-3xl line-clamp-1 mb-8">{{ t('pages.insights.insight.title2') }}
              </p>
              <p class="text-[#001949] opacity-60 text-2xl line-clamp-2">{{ t('pages.insights.insight.desc2') }}</p>
            </div>
            <div class="flex items-center gap-4 mt-8 cursor-pointer">
              <div class="bg-[#334CA8] w-10 h-10 flex items-center justify-center rounded-full">
                <svg class="w-6 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>

            </div>
          </div>
        </div>
        <div class="mt-20 bg-white pl-80  p-10 relative">
          <img src="@/assets/images/insights/image3.png" alt="" srcset="" class="absolute left-10 -top-10 w-60 h-auto">
          <div class="flex justify-between  gap-10">
            <div>
              <p class="text-[#0B2859] font-bold text-3xl line-clamp-1 mb-8">{{ t('pages.insights.insight.title3') }}
              </p>
              <p class="text-[#001949] opacity-60 text-2xl line-clamp-2">{{ t('pages.insights.insight.desc3') }}</p>
            </div>
            <div class="flex items-center gap-4 mt-8 cursor-pointer">
              <div class="bg-[#334CA8] w-10 h-10 flex items-center justify-center rounded-full">
                <svg class="w-6 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>

            </div>
          </div>
        </div>
>>>>>>> origin/main
      </div>
      <div class="mt-28 ">
        <div class="flex items-center gap-4 border-b border-[#001949] pl-4 pb-4">
          <img src="@/assets/images/home/rightArr.png" alt="" srcset="" class="w-10">
<<<<<<< HEAD
          <span class="text-[#001949] text-4xl font-bold">{{ t('pages.insights.title2') }}</span>
        </div>
        <template v-if="teamList2 && teamList2.length > 0">


          <div class="mt-10 p-4 h-200 relative">
            <img :src="teamList2?.[0].conver" alt="" srcset="" class="w-240">
            <div class="bg-white h-120 w-170 absolute bottom-0 right-8 z-20 p-15">
              <p class="text-[#072867] font-bold text-3xl line-clamp-2">{{ teamList2?.[0].title }}</p>
              <p class="text-[#072867] text-2xl mt-10 mb-15 line-clamp-5">
                {{ teamList2?.[0].abstract }}</p>
              <div class="flex items-center gap-4 mt-8 cursor-pointer">
                <div class="bg-[#334CA8] w-10 h-10 flex items-center justify-center rounded-full">
                  <svg class="w-6 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <div class="text-[#334CA8] text-xl border-b border-[#334CA8]">{{ t('pages.home.product.btn')
                }}</div>
              </div>
            </div>
            <div class="w-37 h-88 bg-[#C1A894] absolute bottom-40 right-0 z-1"></div>
          </div>
          <div class="mt-10 bg-white pl-80  p-10 relative" v-for="item in teamList2?.slice(1)" :key="item.id">
            <img :src="item.conver" alt="" srcset="" class="absolute left-10 -top-10 w-60 h-auto">
            <div class="flex justify-between  gap-10">
              <div>
                <p class="text-[#0B2859] font-bold text-3xl line-clamp-1 mb-8">{{ item.title }}
                </p>
                <p class="text-[#001949] opacity-60 text-2xl line-clamp-2">{{ item.abstract }}</p>
              </div>
              <div class="flex items-center gap-4 mt-8 cursor-pointer">
                <div class="bg-[#334CA8] w-10 h-10 flex items-center justify-center rounded-full">
                  <svg class="w-6 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>

              </div>
            </div>
          </div>
        </template>

=======
          <span class="text-[#001949] text-4xl font-bold">市场热点</span>
        </div>
        <div class="mt-10 p-4 h-200 relative">
          <img src="@/assets/images/insights/image4.png" alt="" srcset="" class="w-240">
          <div class="bg-white h-120 w-170 absolute bottom-0 right-8 z-20 p-15">
            <p class="text-[#072867] font-bold text-3xl line-clamp-2">{{ t('pages.insights.insight.title1') }}</p>
            <p class="text-[#072867] text-2xl mt-10 mb-15 line-clamp-5">
              {{ t('pages.insights.insight.desc1') }}</p>
            <div class="flex items-center gap-4 mt-8 cursor-pointer">
              <div class="bg-[#334CA8] w-10 h-10 flex items-center justify-center rounded-full">
                <svg class="w-6 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div class="text-[#334CA8] text-xl border-b border-[#334CA8]">{{ t('pages.home.product.btn')
              }}</div>
            </div>
          </div>
          <div class="w-37 h-88 bg-[#C1A894] absolute bottom-40 right-0 z-1"></div>
        </div>
        <div class="mt-10 bg-white pl-80  p-10 relative">
          <img src="@/assets/images/insights/image5.png" alt="" srcset="" class="absolute left-10 -top-10 w-60 h-auto">
          <div class="flex justify-between  gap-10">
            <div>
              <p class="text-[#0B2859] font-bold text-3xl line-clamp-1 mb-8">{{ t('pages.insights.insight.title2') }}
              </p>
              <p class="text-[#001949] opacity-60 text-2xl line-clamp-2">{{ t('pages.insights.insight.desc2') }}</p>
            </div>
            <div class="flex items-center gap-4 mt-8 cursor-pointer">
              <div class="bg-[#334CA8] w-10 h-10 flex items-center justify-center rounded-full">
                <svg class="w-6 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>

            </div>
          </div>
        </div>
        <div class="mt-20 bg-white pl-80  p-10 relative">
          <img src="@/assets/images/insights/image6.png" alt="" srcset="" class="absolute left-10 -top-10 w-60 h-auto">
          <div class="flex justify-between  gap-10">
            <div>
              <p class="text-[#0B2859] font-bold text-3xl line-clamp-1 mb-8">{{ t('pages.insights.insight.title3') }}
              </p>
              <p class="text-[#001949] opacity-60 text-2xl line-clamp-2">{{ t('pages.insights.insight.desc3') }}</p>
            </div>
            <div class="flex items-center gap-4 mt-8 cursor-pointer">
              <div class="bg-[#334CA8] w-10 h-10 flex items-center justify-center rounded-full">
                <svg class="w-6 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>

            </div>
          </div>
        </div>
>>>>>>> origin/main
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

<<<<<<< HEAD
import { computed } from 'vue';
import { useI18n } from 'vue-i18n'
import { useCustomApiWithAutoRefresh } from '@/utils/useAutoRefreshApi'
import api from '@/utils/http'
const { t, locale } = useI18n()

const isEn = computed(() => locale.value === 'en')
interface TeamItem {
  id: number
  title: string
  abstract: string
  conver: string
  content: string
}


const { data: teamList1 } = useCustomApiWithAutoRefresh<TeamItem[]>(() => api.get({
  url: '/article/list',
  params: {
    column: 'insights.investment',
    count: 5
  }
}))
const { data: teamList2 } = useCustomApiWithAutoRefresh<TeamItem[]>(() => api.get({
  url: '/article/list',
  params: {
    column: 'insights.markethot',
    count: 5
  }
}))
=======
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
>>>>>>> origin/main


</script>

<style lang="scss" scoped></style>