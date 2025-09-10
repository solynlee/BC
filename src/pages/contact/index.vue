<template>
  <div>
    <div class="relative">
      <img src="@/assets/images/contact/bg.png" alt="" srcset="" class="w-full">
      <div class="bg-[#072766] px-10 text-white absolute top-29 w-[503px] left-38 ">
        <div class="pt-30 h-77">
          <p class="text-7xl font-bold mb-8">{{ t('pages.contact.banner.title') }}</p>
          <p class="text-4xl opacity-60">{{ t('pages.contact.banner.title1') }}</p>
        </div>

        <div class="w-45 h-3 bg-[#9F8570] mb-15"></div>
        <p class="text-5xl font-bold mt-8 mb-25 leading-18 h-38" :class="{ '!text-4xl !leading-11': isEn }">{{
          t('pages.contact.banner.desc') }}
          <br />{{
            t('pages.contact.banner.desc2') }}
        </p>

      </div>
      <p class="text-[#0B2859] opacity-60 pl-180 text-2xl pr-30 py-12">{{ t('pages.contact.desc') }}</p>
    </div>
    <div class="px-38 ">
      <div class="flex items-center gap-4 border-b border-[#072867] pl-4 pb-4 mt-20 ">
        <img src="@/assets/images/home/rightArr.png" alt="" srcset="" class="w-10">
        <span class="text-[#072867] text-4xl font-bold">{{ t('pages.contact.hk.title') }}</span>
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
          <MapComponent :location="location1" height="100%" width="100%" :zoom="18" class="h-full w-full" />
        </div>
      </div>
      <div class="flex items-center gap-4 border-b border-[#072867] pl-4 pb-4 mt-10 ">
        <img src="@/assets/images/home/rightArr.png" alt="" srcset="" class="w-10">
        <span class="text-[#072867] text-4xl font-bold">{{ t('pages.contact.singapore.title') }}</span>
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
          <MapComponent :location="location2" height="100%" width="100%" :zoom="18" class="h-full w-full" />
        </div>
      </div>
      <div class="flex items-center gap-4 border-b border-[#072867] pl-4 pb-4 mt-10 ">
        <img src="@/assets/images/home/rightArr.png" alt="" srcset="" class="w-10">
        <span class="text-[#072867] text-4xl font-bold">{{ t('pages.contact.china.title') }}</span>
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
          <MapComponent :location="location3" height="100%" width="100%" :zoom="18" class="h-full w-full" />
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
          <MapComponent :location="location4" height="100%" width="100%" :zoom="18" class="h-full w-full" />
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
          <MapComponent :location="location5" height="100%" width="100%" :zoom="18" class="h-full w-full" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import MapComponent from '@/components/MapComponent.vue'
import type { MapLocation } from '../../../types/tencent-map'
const { t, locale } = useI18n()
import { computed } from 'vue'
const isEn = computed(() => locale.value === 'en')

// 注意：这些坐标需要是百度地图坐标系（BD09）
// 如果是从GPS坐标转换，需要先转换为百度坐标
const location1: MapLocation = {
  longitude: 114.166015,
  latitude: 22.289308,
  address: '',
  title: '拔萃资本有限责任公司'
}
const location2: MapLocation = {
  longitude: 103.85090998863218,
  latitude: 1.2783882069433086,
  address: '新加坡',
  title: '拔萃资本有限责任公司'
}
const location3: MapLocation = {
  longitude: 120.222795,
  latitude: 30.253430,
  address: '杭州市',
  title: '拔萃资本有限责任公司'
}
const location4: MapLocation = {
  longitude: 121.509376,
  latitude: 31.247369,
  address: '上海市',
  title: '拔萃资本有限责任公司'
}
const location5: MapLocation = {
  longitude: 113.905341,
  latitude: 22.523654,
  address: '广州市',
  title: '拔萃资本有限责任公司'
}
</script>

<style scoped></style>