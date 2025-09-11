<template>
  <div>
    <div class=" relative">
      <img src="@/assets/images/strategy/trust/bg.png" alt="" srcset="" class="w-full">
      <div
        class=" absolute left-0 top-1/2 -translate-y-1/2 pl-30 border-l-20 border-[#072867] h-42 flex flex-col justify-around">
        <p class="text-[#072867] text-7xl font-bold">{{ t('pages.trust.title') }}</p>
        <!-- <p class="text-[#9F8570] text-5xl">{{ t('pages.trust.title2') }}</p> -->
      </div>
    </div>
    <div class="px-34 ">
      <div class="flex  gap-8">
        <img src="@/assets/images/strategy/trust/image1.png" alt="" srcset="" class="w-200 h-124 -translate-y-20">
        <p class="text-[#072867] text-2xl px-4 pt-30">{{ t('pages.trust.desc') }}</p>
      </div>
      <div class="flex items-center gap-4 border-b border-[#072867] pl-4 pb-4 my-10 ">
        <img src="@/assets/images/home/rightArr.png" alt="" srcset="" class="w-10">
        <span class="text-[#072867] text-4xl font-bold">{{ t('pages.trust.focused.title') }}</span>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div class="bg-[#FFFFFF] text-center py-10">
          <p class="text-[36px] font-bold text-[#9F8570] leading-20">{{ t('pages.trust.focused.title2') }}</p>
          <p class="text-[#082867] text-xl">{{ t('pages.trust.focused.desc2') }}<br />{{
            t('pages.trust.focused.desc3') }}</p>
        </div>
        <div class="bg-[#FFFFFF] text-center py-10">
          <p class="text-[36px] font-bold text-[#9F8570] leading-20">{{ t('pages.trust.focused.title3') }}</p>
          <p class="text-[#082867] text-xl">{{ t('pages.trust.focused.desc4') }}<br />{{
            t('pages.trust.focused.desc5') }}</p>
        </div>
        <div class="bg-[#FFFFFF] text-center p-10">
          <p class="text-[36px] font-bold text-[#9F8570] leading-20">{{ t('pages.trust.focused.title4') }}</p>
          <p class="text-[#082867] text-xl">{{ t('pages.trust.focused.desc6') }}<br />{{
            t('pages.trust.focused.desc7') }}</p>
        </div>
        <div class="bg-[#FFFFFF] text-center py-10">
          <p class="text-[36px] font-bold text-[#9F8570] leading-20">{{ t('pages.trust.focused.title5') }}</p>
          <p class="text-[#082867] text-xl">{{ t('pages.trust.focused.desc8') }}<br />{{
            t('pages.trust.focused.desc9') }}</p>
        </div>
      </div>
      <div class="flex items-center gap-4 border-b border-[#072867] pl-4 pb-4 mt-20 mb-10 ">
        <img src="@/assets/images/home/rightArr.png" alt="" srcset="" class="w-10">
        <span class="text-[#072867] text-4xl font-bold">{{ t('pages.trust.strengths.title') }}</span>
      </div>
      <div class="px-4 leading-10">
        <div class="flex items-center gap-4">
          <div class="w-3 h-3 bg-[#C1A894] rounded-full"></div>
          <p class="text-[#082867] text-[23px]">{{ t('pages.trust.strengths.desc2') }}</p>
        </div>
        <div class="flex items-center gap-4">
          <div class="w-3 h-3 bg-[#C1A894] rounded-full"></div>
          <p class="text-[#082867] text-[23px]">{{ t('pages.trust.strengths.desc3') }}</p>
        </div>
        <div class="flex items-center gap-4">
          <div class="w-3 h-3 bg-[#C1A894] rounded-full"></div>
          <p class="text-[#082867] text-[23px]">{{ t('pages.trust.strengths.desc4') }}</p>
        </div>
      </div>
      <div class="flex items-center gap-4 border-b border-[#072867] pl-4 pb-4 mt-20  mb-10">
        <img src="@/assets/images/home/rightArr.png" alt="" srcset="" class="w-10">
        <span class="text-[#072867] text-4xl font-bold">{{ t('pages.trust.investment.title') }}</span>
      </div>
    </div>
    <div class="bg-[#EAF0F8] pl-50 pr-34 py-10 flex items-center gap-16">
      <img :src="imageUrl2" alt="" srcset="" class="w-auto h-91">
      <div class="text-[#072867]">
        <p class="text-[#9F8570] text-[32px] font-bold">{{ t('pages.trust.investment.title2') }}</p>
        <div class="pt-6 pl-8 pr-8">
          <p class="text-[26px] font-bold">{{ t('pages.trust.investment.desc2') }}</p>
          <p class="text-[23px] ">{{ t('pages.trust.investment.desc3') }}</p>
          <p class="text-[26px] font-bold mt-6">{{ t('pages.trust.investment.desc4') }}</p>
          <p class="text-[23px] ">{{ t('pages.trust.investment.desc5') }}</p>
        </div>
      </div>
    </div>
    <div class="px-34 py-16">
      <p class="text-[#9F8570] text-[32px] font-bold">{{ t('pages.trust.investment.title3') }}</p>
      <p class="text-[23px] text-[#072867]">{{ t('pages.trust.investment.desc6') }}</p>
      <p class="text-[#9F8570] text-[32px] font-bold mt-10">{{ t('pages.trust.investment.title4') }}</p>
      <p class="text-[23px] text-[#072867]">{{ t('pages.trust.investment.desc7') }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
import image2 from '@/assets/images/strategy/trust/image2.png'
import image3 from '@/assets/images/strategy/trust/image3.png'
import image4 from '@/assets/images/strategy/trust/image4.png'

const imageUrl2 = computed(() => {
  if (locale.value === 'zh-CN') {
    return image2;
  } else if (locale.value === 'zh-TW') {
    return image3;
  } else {
    return image4;
  }
})
</script>

<style scoped></style>