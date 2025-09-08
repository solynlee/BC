<template>
  <div>
    <div class="relative">
      <img src="@/assets/images/contact/bg.png" alt="" srcset="" class="w-full">
      <div class="bg-[#072766] pl-14 pr-10 pt-30 text-white absolute top-30 w-120 left-38">
        <p class="text-6xl font-bold mb-4">{{ t('pages.contact.banner.title') }}</p>
        <p class="text-4xl opacity-60">{{ t('pages.contact.banner.title1') }}</p>
        <div class="w-45 h-3 bg-[#9F8570] mb-10 mt-24"></div>
        <p class="text-4xl font-bold leading-14 mt-8 mb-30">{{ t('pages.contact.banner.desc') }} <br />{{
          t('pages.contact.banner.desc2') }}</p>
      </div>
      <p class="text-[#0B2859] opacity-60 pl-170 text-2xl pr-39 py-12">{{ t('pages.contact.desc') }}</p>
    </div>
    <div class="px-38 ">
      <div class="flex items-center gap-4 border-b border-[#001949] pl-4 pb-4 mt-20 ">
        <img src="@/assets/images/home/rightArr.png" alt="" srcset="" class="w-10">
        <span class="text-[#001949] text-4xl font-bold">{{ t('pages.contact.hk.title') }}</span>
      </div>
      <div class="py-10 flex justify-end relative">
        <div class="bg-white shadow px-10 py-20 absolute left-0 top-1/2 -translate-y-1/2 w-120 z-10">
          <div class="flex items-center gap-4">
            <img src="@/assets/images/contact/icon.png" alt="" class="h-8 w-auto">
            <span class="text-[#334CA8] text-[28px]">{{ t('pages.contact.ad') }}</span>
          </div>
          <p class="text-[#072867] text-[23px]">{{ t('pages.contact.hk.ad1') }} <br>{{ t('pages.contact.hk.ad2') }}</p>
          <div class="flex items-center gap-4 mt-15">
            <img src="@/assets/images/contact/icon2.png" alt="" class="h-8 w-auto">
            <span class="text-[#334CA8] text-[28px]">{{ t('pages.contact.ph') }}</span>
          </div>
          <p class="text-[#072867] text-[23px]">{{ t('pages.contact.hk.ph') }}</p>
        </div>
        <div class="w-240 h-140 p-0">
          <MapComponent :location="location1" height="100%" width="100%" :zoom="16" class="h-full w-full" />
        </div>
      </div>
      <div class="flex items-center gap-4 border-b border-[#001949] pl-4 pb-4 mt-10 ">
        <img src="@/assets/images/home/rightArr.png" alt="" srcset="" class="w-10">
        <span class="text-[#001949] text-4xl font-bold">{{ t('pages.contact.singapore.title') }}</span>
      </div>
      <div class="py-10 flex justify-end relative">
        <div class="bg-white shadow px-10 py-20 absolute left-0 top-1/2 -translate-y-1/2 w-120 z-10">
          <div class="flex items-center gap-4">
            <img src="@/assets/images/contact/icon.png" alt="" class="h-8 w-auto">
            <span class="text-[#334CA8] text-[28px]">{{ t('pages.contact.ad') }}</span>
          </div>
          <p class="text-[#072867] text-[23px]">{{ t('pages.contact.singapore.ad1') }} <br>{{
            t('pages.contact.singapore.ad2') }}</p>
          <div class="flex items-center gap-4 mt-15">
            <img src="@/assets/images/contact/icon2.png" alt="" class="h-8 w-auto">
            <span class="text-[#334CA8] text-[28px]">{{ t('pages.contact.ph') }}</span>
          </div>
          <p class="text-[#072867] text-[23px]">{{ t('pages.contact.singapore.ph') }}</p>
        </div>
        <div class="w-240 h-140 p-0">
          <MapComponent :location="location2" height="100%" width="100%" :preferredProvider="'google'" :zoom="16"
            class="h-full w-full" />
        </div>
      </div>
      <div class="flex items-center gap-4 border-b border-[#001949] pl-4 pb-4 mt-10 ">
        <img src="@/assets/images/home/rightArr.png" alt="" srcset="" class="w-10">
        <span class="text-[#001949] text-4xl font-bold">{{ t('pages.contact.china.title') }}</span>
      </div>

      <div class="py-10 flex justify-end relative">
        <div class="bg-white shadow  py-10 absolute left-0 top-1/2 -translate-y-1/2 w-120 z-10">
          <div class="flex items-center gap-4 px-2">
            <div class="bg-[#C1A894] w-2 h-12"></div>
            <p class="text-[#C1A894] text-4xl">{{ t('pages.contact.china.hz.title') }}</p>
          </div>
          <div class="flex items-center gap-4 mt-10 px-10">
            <img src="@/assets/images/contact/icon.png" alt="" class="h-8 w-auto">
            <span class="text-[#334CA8] text-[28px]">{{ t('pages.contact.ad') }}</span>
          </div>
          <p class="text-[#072867] text-[23px] px-10">{{ t('pages.contact.china.hz.ad1') }} <br>{{
            t('pages.contact.china.hz.ad2') }}</p>
          <div class="flex items-center gap-4 mt-10 px-10">
            <img src="@/assets/images/contact/icon2.png" alt="" class="h-8 w-auto">
            <span class="text-[#334CA8] text-[28px]">{{ t('pages.contact.ph') }}</span>
          </div>
          <p class="text-[#072867] text-[23px] px-10">{{ t('pages.contact.china.hz.ph') }}</p>
        </div>
        <div class="w-240 h-140 p-0">
          <MapComponent :location="location3" height="100%" width="100%" :zoom="16" class="h-full w-full" />
        </div>
      </div>
      <div class="py-10 flex justify-end relative">
        <div class="bg-white shadow  py-10 absolute left-0 top-1/2 -translate-y-1/2 w-120 z-10">
          <div class="flex items-center gap-4 px-2">
            <div class="bg-[#C1A894] w-2 h-12"></div>
            <p class="text-[#C1A894] text-4xl">{{ t('pages.contact.china.sh.title') }}</p>
          </div>
          <div class="flex items-center gap-4 mt-10 px-10">
            <img src="@/assets/images/contact/icon.png" alt="" class="h-8 w-auto">
            <span class="text-[#334CA8] text-[28px]">{{ t('pages.contact.ad') }}</span>
          </div>
          <p class="text-[#072867] text-[23px] px-10">{{ t('pages.contact.china.sh.ad1') }} <br>{{
            t('pages.contact.china.sh.ad2') }}</p>
          <div class="flex items-center gap-4 mt-10 px-10">
            <img src="@/assets/images/contact/icon2.png" alt="" class="h-8 w-auto">
            <span class="text-[#334CA8] text-[28px]">{{ t('pages.contact.ph') }}</span>
          </div>
          <p class="text-[#072867] text-[23px] px-10">{{ t('pages.contact.china.sh.ph') }}</p>
        </div>
        <div class="w-240 h-140 p-0">
          <MapComponent :location="location4" height="100%" width="100%" :zoom="16" class="h-full w-full" />
        </div>
      </div>
      <div class="py-10 flex justify-end relative">
        <div class="bg-white shadow  py-10 absolute left-0 top-1/2 -translate-y-1/2 w-120 z-10">
          <div class="flex items-center gap-4 px-2">
            <div class="bg-[#C1A894] w-2 h-12"></div>
            <p class="text-[#C1A894] text-4xl">{{ t('pages.contact.china.sz.title') }}</p>
          </div>
          <div class="flex items-center gap-4 mt-10 px-10">
            <img src="@/assets/images/contact/icon.png" alt="" class="h-8 w-auto">
            <span class="text-[#334CA8] text-[28px]">{{ t('pages.contact.ad') }}</span>
          </div>
          <p class="text-[#072867] text-[23px] px-10">{{ t('pages.contact.china.sz.ad1') }} <br>{{
            t('pages.contact.china.sz.ad2') }}<br>{{
              t('pages.contact.china.sz.ad3') }}</p>
          <div class="flex items-center gap-4 mt-10 px-10">
            <img src="@/assets/images/contact/icon2.png" alt="" class="h-8 w-auto">
            <span class="text-[#334CA8] text-[28px]">{{ t('pages.contact.ph') }}</span>
          </div>
          <p class="text-[#072867] text-[23px] px-10">{{ t('pages.contact.china.sz.ph') }}</p>
        </div>
        <div class="w-240 h-140 p-0">
          <MapComponent :location="location5" height="100%" width="100%" :zoom="16" class="h-full w-full" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import MapComponent from '@/components/MapComponent.vue'
import type { MapLocation } from '../../../types/tencent-map'
const { t } = useI18n()

const location1: MapLocation = {
  longitude: 114.159409,
  latitude: 22.283287,
  address: '',
  title: '拔萃资本有限责任公司'
}
const location2: MapLocation = {
  longitude: 103.85135,
  latitude: 1.27901,
  address: '',
  title: '拔萃资本有限责任公司'
}
// const location2: MapLocation = {
//   longitude: 22.517522,
//   latitude: 22.296648,
//   address: '香港尖沙咀广东道25号港威大厦二座2602-2605室',
//   title: '拔萃财富（香港）- 港威大厦办公室'
// }
const location3: MapLocation = {
  longitude: 120.216268,
  latitude: 30.247197,
  address: '',
  title: '拔萃资本有限责任公司'
}
const location4: MapLocation = {
  longitude: 121.502775,
  latitude: 31.241725,
  address: '',
  title: '拔萃资本有限责任公司'
}
const location5: MapLocation = {
  longitude: 113.898808,
  latitude: 22.517522,
  address: '',
  title: '拔萃资本有限责任公司'
}
</script>

<style scoped></style>