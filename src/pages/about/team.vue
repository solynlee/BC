<template>
  <section>
    <div class="relative">
      <img src="@/assets/images/about/team/bg1.png" alt="" srcset="" class="w-full">
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
      <p class="text-[#0B2859] opacity-60 pl-180 text-xl pr-20 py-12">{{ t('pages.team.desc') }}</p>
    </div>
    <div class="flex items-center justify-center gap-10 mt-20 text-3xl text-white text-center"
      :class="{ '!text-2xl': isEn }">
      <p class="w-60 h-20 flex items-center justify-center cursor-pointer  opacity-40   font-bold bg-[#334CA8] "
        @click="router.push({ name: 'about' })">
        {{ t('pages.about.tab.tab1') }}
      </p>
      <p class="w-60 h-20  flex items-center justify-center   bg-[#334CA8] ">
        {{ t('pages.about.tab.tab2') }}
      </p>
      <p class="w-60 h-20  flex items-center justify-center opacity-40 bg-[#334CA8] cursor-pointer"
        @click="router.push({ name: 'proposition' })">
        {{ t('pages.about.tab.tab3') }}
      </p>
      <p class="w-60 h-20 flex items-center justify-center opacity-40  bg-[#334CA8] cursor-pointer"
        @click="router.push({ name: 'value' })">
        {{ t('pages.about.tab.tab4') }}
      </p>
      <p class="w-80 h-20 flex items-center justify-center opacity-40  bg-[#334CA8] cursor-pointer"
        @click="router.push({ name: 'licenses' })">
        {{ t('pages.about.tab.tab5') }}
      </p>
    </div>
    <div class="px-38 my-20 relative">
      <div class="relative px-4 mb-36" v-if="teamList1 && teamList1.length > 0">
        <img :src="teamList1?.[0].conver" alt="" srcset="" class="w-160 h-auto relative z-10">
        <div class="w-210 h-full bg-white shadow absolute right-0 -bottom-16 pl-60 pr-20 ">
          <div class="bg-[#345CAC] h-4 w-40"></div>
          <p class="text-[#C1A894] font-bold text-5xl mt-20 mb-2">{{ teamList1?.[0].title }}</p>
          <p class="text-[#C1A894] text-3xl mb-10" v-html="teamList1?.[0].abstract"></p>
          <p class="rich-text-content prose max-w-none text-[#0E285C]" v-html="teamList1?.[0].content"></p>

        </div>
      </div>
      <div class="flex items-center gap-4 border-b border-[#072867] pl-4 pb-4">
        <img src="@/assets/images/home/rightArr.png" alt="" srcset="" class="w-10">
        <span class="text-[#072867] text-4xl font-bold">{{ t('pages.team.core') }}</span>
      </div>
      <div class="px-4 mt-10 grid grid-cols-2 gap-8" v-if="teamList2">
        <div class="pt-28 relative " v-for="item in teamList2" :key="item.id">
          <img :src="item.conver" alt="" srcset="" class="w-auto h-68 absolute top-0 left-0">
          <div class="bg-white shadow py-10 px-7 h-full flex flex-col ">
            <div class="text-[#C1A894] pl-72 mb-14 h-24">
              <p class="text-4xl font-bold">{{ item.title }}</p>
              <p class="text-2xl mt-2 " style="white-space: nowrap;" v-html="item.abstract"></p>
            </div>
            <div class="text-[#0E285C] text-xl pl-4 pr-4  flex-1 py-1 border-l-8 border-[#345CAC]">
              <p class="rich-text-content prose max-w-none text-[#0E285C]" v-html="item.content"></p>
            </div>
          </div>
        </div>


      </div>
      <div class="flex items-center gap-4 border-b border-[#072867] pl-4 pb-4 mt-20 mb-10">
        <img src="@/assets/images/home/rightArr.png" alt="" srcset="" class="w-10">
        <span class="text-[#072867] text-4xl font-bold">{{ t('pages.team.manag') }}</span>
      </div>
      <div class="px-4 mt-10 grid grid-cols-3 gap-8" v-if="teamList3">
        <div class="pt-28 relative" v-for="item in teamList3" :key="item.id">
          <img :src="item.conver" alt="" srcset="" class="w-auto h-68 absolute top-0 left-1/2 -translate-x-1/2">
          <div class="bg-white shadow pt-48 pb-10 px-7 h-full flex flex-col gap-6">
            <div class="text-[#C1A894] text-center h-20">
              <p class="text-3xl font-bold">{{ item.title }}</p>
              <p class="text-2xl mt-2 " v-html="item.abstract"></p>
            </div>
            <div class="text-[#0E285C] text-xl pl-4 pr-4 py-2  border-l-8 border-[#345CAC] flex-1">
              <p class="rich-text-content prose max-w-none text-[#0E285C]" v-html="item.content"></p>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router';
import { useCustomApiWithAutoRefresh } from '@/utils/useAutoRefreshApi'
import api from '@/utils/http'
const { t, locale } = useI18n()

const router = useRouter()

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
    column: 'team.home',
    count: 1
  }
}))

const { data: teamList2 } = useCustomApiWithAutoRefresh<TeamItem[]>(() => api.get({
  url: '/article/list',
  params: {
    column: 'team.centermanage',
    count: 10
  }
}))

const { data: teamList3 } = useCustomApiWithAutoRefresh<TeamItem[]>(() => api.get({
  url: '/article/list',
  params: {
    column: 'team.manage',
    count: 10
  }
}))

</script>

<style scoped></style>