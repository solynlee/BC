<template>
  <div>
    <div class=" relative">
      <img src="@/assets/images/strategy/trust/bg.png" alt="" srcset="" class="w-full">
      <div
        class=" absolute left-0 top-1/2 -translate-y-1/2 pl-30 border-l-20 border-[#072867] h-42 flex flex-col justify-around">
        <p class="text-[#072867] text-7xl font-bold">{{ t('pages.business.title') }}</p>
        <p class="text-[#9F8570] text-5xl">{{ t('pages.business.title2') }}</p>
      </div>
    </div>
    <div class="px-34 ">
      <div class="flex items-center gap-4 border-b border-[#072867] pl-4 pb-4 my-10 ">
        <img src="@/assets/images/home/rightArr.png" alt="" srcset="" class="w-10">
        <span class="text-[#072867] text-4xl font-bold">{{ t('pages.business.focused.title') }}</span>
      </div>
      <div class="grid grid-cols-3 gap-4">
        <div class="bg-[#FFFFFF] text-center py-10">
          <p class="text-[36px] font-bold text-[#9F8570] leading-20">{{ t('pages.business.focused.title2') }}</p>
          <p class="text-[#082867] text-[23px]">{{ t('pages.business.focused.desc2') }}</p>
        </div>
        <div class="bg-[#FFFFFF] text-center py-10">
          <p class="text-[36px] font-bold text-[#9F8570] leading-20">{{ t('pages.business.focused.title3') }}</p>
          <p class="text-[#082867] text-[23px]">{{ t('pages.business.focused.desc3') }}<br />{{
            t('pages.business.focused.desc4') }}</p>
        </div>
        <div class="bg-[#FFFFFF] text-center py-10">
          <p class="text-[36px] font-bold text-[#9F8570] leading-20">{{ t('pages.business.focused.title4') }}</p>
          <p class="text-[#082867] text-[23px]">{{ t('pages.business.focused.desc5') }}<br />{{
            t('pages.business.focused.desc6') }}</p>
        </div>

      </div>
      <div class="flex items-center gap-4 border-b border-[#072867] pl-4 pb-4 mt-20 mb-10 ">
        <img src="@/assets/images/home/rightArr.png" alt="" srcset="" class="w-10">
        <span class="text-[#072867] text-4xl font-bold">{{ t('pages.business.strengths.title') }}</span>
      </div>
      <div class="px-4 leading-10">
        <div class="flex items-center gap-4">

          <p class="text-[#082867] text-[23px]">{{ t('pages.business.strengths.desc2') }}</p>
        </div>
      </div>
      <div class="flex items-center gap-4 border-b border-[#072867] pl-4 pb-4 mt-20  mb-10">
        <img src="@/assets/images/home/rightArr.png" alt="" srcset="" class="w-10">
        <span class="text-[#072867] text-4xl font-bold">{{ t('pages.business.investment.title') }}</span>
      </div>
    </div>
    <div class="bg-[#EAF0F8] pl-40  py-10 flex items-center gap-20">
      <img :src="imageUrl" alt="" srcset="" class="w-auto h-91">
      <div class="text-[#072867]">
        <p class="text-[#9F8570] text-[32px] font-bold">{{ t('pages.business.investment.title2') }}</p>
        <p class="text-xl">{{ t('pages.business.investment.desc2') }}</p>
        <p class="text-[#9F8570] text-[32px] font-bold mt-8">{{ t('pages.business.investment.title3') }}</p>
        <p class="text-xl">{{ t('pages.business.investment.desc3') }}</p>
        <p class="text-xl">{{ t('pages.business.investment.desc4') }}</p>
        <p class="text-[#9F8570] text-[32px] font-bold mt-8">{{ t('pages.business.investment.title4') }}</p>
        <p>
          <span class="text-[22px] font-bold ">{{ t('pages.business.investment.desc5') }}</span>
          <span class="text-xl">{{ t('pages.business.investment.desc6') }}</span>
        </p>
        <p>
          <span class="text-[22px] font-bold ">{{ t('pages.business.investment.desc7') }}</span>
          <span class="text-xl">{{ t('pages.business.investment.desc8') }}</span>
        </p>
        <p>
          <span class="text-[22px] font-bold ">{{ t('pages.business.investment.desc9') }}</span>
          <span class="text-xl">{{ t('pages.business.investment.desc10') }}</span>
        </p>
        <p>
          <span class="text-[22px] font-bold ">{{ t('pages.business.investment.desc11') }}</span>
          <span class="text-xl">{{ t('pages.business.investment.desc12') }}</span>
        </p>
        <p>
          <span class="text-[22px] font-bold ">{{ t('pages.business.investment.desc13') }}</span>
          <span class="text-xl">{{ t('pages.business.investment.desc14') }}</span>
        </p>

      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
import image from '@/assets/images/strategy/business/image.png'
import image2 from '@/assets/images/strategy/business/image2.png'
import image3 from '@/assets/images/strategy/business/image3.png'
import { computed } from 'vue'

const imageUrl = computed(() => {
  if (locale.value === 'zh-CN') {
    return image;
  } else if (locale.value === 'zh-TW') {
    return image2;
  } else {
    return image3;
  }
})
</script>

<style scoped></style>