<template>
  <section>
    <div class="relative">
      <img src="@/assets/images/about/value/bg.png" alt="" srcset="" class="w-full">
      <div class="bg-[#072766] px-10 text-white absolute top-29 w-[503px] left-38 ">
        <div class="pt-30 h-77">
          <p class="text-7xl font-bold mb-8">{{ t('pages.about.banner.title') }}</p>
          <p class="text-4xl opacity-60">{{ t('pages.about.banner.title1') }}</p>
        </div>
        <div class="w-45 h-3 bg-[#9F8570] mb-15"></div>
        <template v-if="isEn">
          <p class="text-3xl font-bold mt-8 mb-25  leading-10">{{
            t('pages.about.banner.desc') }} <br />{{
              t('pages.about.banner.desc3') }} <br />{{
              t('pages.about.banner.desc2') }} <br />{{
              t('pages.about.banner.desc4') }}</p>
        </template>
        <template v-else>
          <p class="text-5xl font-bold mt-8 mb-25 leading-18">{{
            t('pages.about.banner.desc') }}<br />{{
              t('pages.about.banner.desc2') }}</p>
        </template>
      </div>
      <p class="text-[#0B2859] opacity-60 pl-180 text-xl pr-20 py-12">{{ t('pages.value.desc') }}<br />{{
        t('pages.value.desc2') }}</p>
    </div>
    <div class="flex items-center justify-center gap-10 mt-20 text-3xl text-white text-center"
      :class="{ '!text-2xl': isEn }">
      <p @click="router.push({ name: 'about' })"
        class="w-60 h-20 flex items-center justify-center opacity-40 text-white font-bold bg-[#334CA8] cursor-pointer">
        {{ t('pages.about.tab.tab1') }}
      </p>
      <p class="w-60 h-20  flex items-center justify-center  opacity-40 text-white bg-[#334CA8] cursor-pointer"
        @click="router.push({ name: 'team' })">
        {{ t('pages.about.tab.tab2') }}
      </p>
      <p class="w-60 h-20  flex items-center justify-center opacity-40  text-white bg-[#334CA8] cursor-pointer"
        @click="router.push({ name: 'proposition' })">
        {{ t('pages.about.tab.tab3') }}
      </p>
      <p class="w-60 h-20 flex items-center justify-center   text-white bg-[#334CA8] ">
        {{ t('pages.about.tab.tab4') }}
      </p>
      <p class="w-80 h-20 flex items-center justify-center opacity-40  bg-[#334CA8] cursor-pointer"
        @click="router.push({ name: 'licenses' })">
        {{ t('pages.about.tab.tab5') }}
      </p>
    </div>

    <div class="my-28 px-38 ">

      <div class="mt-10 p-4 h-200 relative" v-if="teamList1 && teamList1.length > 0">
        <img :src="teamList1?.[0].conver" alt="" srcset="" class="w-240">
        <div class="bg-white h-120 w-170 absolute bottom-0 right-8 z-20 p-15">
          <p class="text-[#072867] font-bold text-3xl line-clamp-2">{{ teamList1?.[0].title }}</p>
          <p class="text-[#072867] text-2xl mt-10 mb-15 line-clamp-5">
            {{ teamList1?.[0].abstract }}</p>
          <div class="flex items-center gap-4 mt-8 cursor-pointer"
            @click="router.push({ name: 'valueDetail', query: { code: teamList1?.[0].articleCode } })">
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
      <template v-for="item in teamList1?.slice(1)" :key="item.id">
        <div class="mt-28 bg-white pl-120 p-10 relative text-[text-[#072867]]">
          <img :src="item.conver" alt="" srcset="" class="absolute left-0 bottom-10 w-105 h-auto">
          <div>
            <div>
              <p class=" font-bold text-3xl line-clamp-1 mb-8">{{ item.title }}
              </p>
              <p class="opacity-60 text-2xl  h-16 line-clamp-2">{{ item.abstract }}</p>
            </div>
            <div class="flex justify-between items-center">
              <div class="flex items-center gap-4 mt-8 cursor-pointer"
                @click="router.push({ name: 'valueDetail', query: { code: item.articleCode } })">
                <div class="bg-[#334CA8] w-10 h-10 flex items-center justify-center rounded-full">
                  <svg class="w-6 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <div class="text-[#334CA8] text-xl border-b border-[#334CA8]">{{ t('pages.home.product.btn')
                }}</div>
              </div>
              <p class="text-2xl opacity-60">{{ dayjs.unix(item.publishDate).format('YYYY-MM-DD') }}</p>
            </div>
          </div>
        </div>
      </template>

    </div>
  </section>

</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n'
import { useCustomApiWithAutoRefresh } from '@/utils/useAutoRefreshApi'
import api from '@/utils/http'
import { useRouter } from 'vue-router';
const { t, locale } = useI18n()
import dayjs from 'dayjs'
const isEn = computed(() => locale.value === 'en')
interface TeamItem {
  id: number
  title: string
  abstract: string
  conver: string
  content: string,
  articleCode: string,
  publishDate: number
}
const router = useRouter()

const { data: teamList1 } = useCustomApiWithAutoRefresh<TeamItem[]>(() => api.get({
  url: '/article/list',
  params: {
    column: 'fundation',
    count: 5
  }
}))


</script>

<style scoped></style>