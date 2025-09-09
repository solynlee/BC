<template>
  <div>
    <div class=" relative">
      <img src="@/assets/images/strategy/planning/bg.png" alt="" srcset="" class="w-full">
      <div
        class=" absolute left-0 top-1/2 -translate-y-1/2 pl-30 border-l-20 border-[#072867] h-42 flex flex-col justify-around">

        <p class="text-[#9F8570] text-5xl">{{ t('pages.planning.title2') }}</p>
        <p class="text-[#072867] text-7xl font-bold">{{ t('pages.planning.title') }}</p>
      </div>
    </div>
    <div class="px-34 py-20">
      <div class="flex items-center gap-4 border-b border-[#072867] pl-4 pb-4 my-10 ">
        <img src="@/assets/images/home/rightArr.png" alt="" srcset="" class="w-10">
        <span class="text-[#072867] text-4xl font-bold">{{ t('pages.planning.focused.title') }}</span>
      </div>
      <div class="px-4 leading-10">
        <p class="text-[#082867] text-[23px]">{{ t('pages.planning.focused.desc') }}</p>
      </div>
      <div class="flex items-center gap-4 border-b border-[#072867] pl-4 pb-4 mt-20 mb-10 ">
        <img src="@/assets/images/home/rightArr.png" alt="" srcset="" class="w-10">
        <span class="text-[#072867] text-4xl font-bold">{{ t('pages.planning.strengths.title') }}</span>
      </div>
      <div class="py-4 ">
        <img :src="imageUrl1" alt="" srcset="" class="w-full">
      </div>
      <div class="flex items-center gap-4 border-b border-[#072867] pl-4 pb-4 mt-20  mb-10">
        <img src="@/assets/images/home/rightArr.png" alt="" srcset="" class="w-10">
        <span class="text-[#072867] text-4xl font-bold">{{ t('pages.planning.investment.title') }}</span>
      </div>
      <div class="px-4 leading-10">
        <p class="text-[#082867] text-[23px]">{{ t('pages.planning.investment.desc') }}</p>
      </div>
      <div class="flex items-center gap-4 border-b border-[#072867] pl-4 pb-4 mt-20 mb-10 ">
        <img src="@/assets/images/home/rightArr.png" alt="" srcset="" class="w-10">
        <span class="text-[#072867] text-4xl font-bold">{{ t('pages.planning.Cases') }}</span>
      </div>
      <div class="p-4 ">
        <img src="@/assets/images/strategy/planning/image2.png" alt="" srcset="" class="w-full">
      </div>
    </div>


  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
import image1 from '@/assets/images/strategy/planning/image1.png'
import image3 from '@/assets/images/strategy/planning/image3.png'
import image4 from '@/assets/images/strategy/planning/image4.png'
import { computed } from 'vue'
const imageUrl1 = computed(() => {
  if (locale.value === 'zh-CN') {
    return image1;
  } else if (locale.value === 'zh-TW') {
    return image4;
  } else {
    return image3;
  }
})

</script>

<style scoped></style>