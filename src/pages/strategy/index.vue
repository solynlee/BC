<template>
  <section>
    <div class="relative">
      <img src="@/assets/images/strategy/bg.png" alt="" srcset="" class="w-full">
      <div class="bg-[#072766] pl-14 pr-20 pt-30 text-white absolute top-29 w-140 left-38 ">
        <p class="text-6xl font-bold mb-8">{{ t('pages.strategy.banner.title') }}</p>
        <p class="text-4xl opacity-60">{{ t('pages.strategy.banner.title1') }}</p>
        <div class="w-45 h-3 bg-[#9F8570] mb-10 mt-18"></div>
        <p class="text-4xl opacity-60">{{ t('pages.strategy.banner.desc') }}</p>
        <p class="text-6xl font-bold mt-8 mb-25">{{ t('pages.strategy.banner.desc2') }}</p>
      </div>
    </div>
    <div class="text-[#f1f5fa] pl-34 py-16">
      <div class="pl-160 text-[#0B2859] text-xl leading-9">
        <p>• {{ t('pages.strategy.desc.title1') }} </p>
        <p>• {{ t('pages.strategy.desc.title2') }} </p>
        <p>• {{ t('pages.strategy.desc.title3') }} </p>
        <p>• {{ t('pages.strategy.desc.title4') }} </p>
        <p>• {{ t('pages.strategy.desc.title5') }} </p>
        <p>• {{ t('pages.strategy.desc.title6') }} </p>
      </div>
    </div>
    <div class="px-38 pb-30">
      <div class="mt-10 relative flex justify-end">
        <img src="@/assets/images/strategy/image1.png" alt="" srcset="" class="w-[56%]">
        <div class="bg-white w-[54%] absolute top-1/2 left-0 translate-y-[-50%] p-10">
          <div class="flex items-center gap-4">
            <img src="@/assets/images/home/rightArr.png" alt="" srcset="" class="w-10">
            <p class="text-[#C1A894] text-4xl font-bold"> {{ t('pages.strategy.item.title1') }}</p>
          </div>
          <div class="text-[28px] text-[#0B2859] mt-10 px-12 pb-6  border-l-11 border-[#345CAC]">
            <div class="w-full flex items-center justify-between border-b border-[#1946BA]">
              <p class="py-3">{{ t('pages.strategy.item.desc1') }}</p>
              <svg class="w-6 h-9 text-[#A37B24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <div class="w-full flex items-center justify-between border-b border-[#1946BA]">
              <p class="py-3">{{ t('pages.strategy.item.desc2') }}</p>
              <svg class="w-6 h-9 text-[#A37B24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-10 relative ">
        <img src="@/assets/images/strategy/image2.png" alt="" srcset="" class="w-[56%]">
        <div class="bg-white w-[54%] absolute top-1/2 right-0 translate-y-[-50%] p-10">
          <div class="flex items-center gap-4">
            <img src="@/assets/images/home/rightArr.png" alt="" srcset="" class="w-10">
            <p class="text-[#C1A894] text-4xl font-bold"> {{ t('pages.strategy.item.title2') }}</p>
          </div>
          <div class="text-[28px] text-[#0B2859] mt-10 px-12 pb-6  border-l-11 border-[#345CAC]">
            <div class="w-full flex items-center justify-between border-b border-[#1946BA]">
              <p class="py-3">{{ t('pages.strategy.item.desc3') }}</p>
              <svg class="w-6 h-9 text-[#A37B24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <div class="w-full flex items-center justify-between border-b border-[#1946BA]">
              <p class="py-3">{{ t('pages.strategy.item.desc4') }}</p>
              <svg class="w-6 h-9 text-[#A37B24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <div class="w-full flex items-center justify-between border-b border-[#1946BA]">
              <p class="py-3">{{ t('pages.strategy.item.desc5') }}</p>
              <svg class="w-6 h-9 text-[#A37B24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-10 relative flex justify-end">
        <img src="@/assets/images/strategy/image3.png" alt="" srcset="" class="w-[56%]">
        <div class="bg-white w-[54%] absolute top-1/2 left-0 translate-y-[-50%] p-10">
          <p class="text-[#C1A894] text-4xl font-bold"> {{ t('pages.strategy.item.title3') }}</p>
          <p class="text-[#072867] text-2xl mt-6 py-4">
            {{ t('pages.strategy.item.desc6') }}</p>
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
      </div>
    </div>
  </section>

</template>

<script setup lang="ts">

import { useI18n } from 'vue-i18n'

const { t } = useI18n()

</script>


<style scoped></style>
