<template>
  <div>
    <div class=" relative">
      <img src="@/assets/images/strategy/trust/bg.png" alt="" srcset="" class="w-full">
      <div
        class=" absolute left-0 top-1/2 -translate-y-1/2 pl-30 border-l-20 border-[#072867] h-42 flex flex-col justify-around">
        <p class="text-[#072867] text-7xl font-bold">{{ t('pages.company.title') }}</p>
        <!-- <p class="text-[#9F8570] text-5xl">{{ t('pages.company.title2') }}</p> -->
      </div>
    </div>
    <div class="px-34 py-20">
      <div class="flex items-center gap-4 border-b border-[#072867] pl-4 pb-4 my-10 ">
        <img src="@/assets/images/home/rightArr.png" alt="" srcset="" class="w-10">
        <span class="text-[#072867] text-4xl font-bold">{{ t('pages.company.focused.title') }}</span>
      </div>
      <div class="px-4 leading-10">
        <p class="text-[#082867] text-[23px]">{{ t('pages.company.focused.desc') }}</p>
      </div>
      <div class="flex items-center gap-4 border-b border-[#072867] pl-4 pb-4 mt-20 mb-10 ">
        <img src="@/assets/images/home/rightArr.png" alt="" srcset="" class="w-10">
        <span class="text-[#072867] text-4xl font-bold">{{ t('pages.company.strengths.title') }}</span>
      </div>
      <div class="px-4 leading-10">

        <p class="text-[#082867] text-[23px]">{{ t('pages.company.strengths.desc') }}</p>

      </div>
      <div class="flex items-center gap-4 border-b border-[#072867] pl-4 pb-4 mt-20  mb-10">
        <img src="@/assets/images/home/rightArr.png" alt="" srcset="" class="w-10">
        <span class="text-[#072867] text-4xl font-bold">{{ t('pages.company.investment.title') }}</span>
      </div>
      <div class="px-4 leading-10">
        <p class="text-[#082867] text-[23px]">{{ t('pages.company.investment.desc') }}</p>
      </div>
    </div>


  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped></style>