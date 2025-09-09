<template>
  <div>
    <div class=" relative">
      <img src="@/assets/images/strategy/office/bg.png" alt="" srcset="" class="w-full">
      <div
        class=" absolute left-0 top-1/2 pr-60 -translate-y-1/2 pl-30 border-l-20 border-[#072867] h-42 flex flex-col justify-around">
        <p class="text-[#9F8570] text-5xl">{{ t('pages.office.title2') }}</p>
        <p class="text-[#072867] text-7xl font-bold">{{ t('pages.office.title') }}</p>
      </div>
    </div>
    <div class="px-34 mb-30">
      <div class="flex items-center gap-8">
        <img src="@/assets/images/strategy/office/image.png" alt="" srcset="" class="w-200 h-124 -translate-y-20">
        <p class="text-[#072867] text-2xl px-8 pb-20">{{ t('pages.office.desc') }}</p>
      </div>
      <div class="flex items-center gap-4 border-b border-[#072867] pl-4 pb-4 my-10 ">
        <img src="@/assets/images/home/rightArr.png" alt="" srcset="" class="w-10">
        <span class="text-[#072867] text-4xl font-bold">{{ t('pages.office.focused.title') }}</span>
      </div>
      <div class="text-[#072867] flex  items-center gap-5  mb-10">
        <img src="@/assets/images/strategy/office/icon1.png" alt="" srcset="" class="h-20">
        <div>
          <p class="text-[28px] font-bold"> {{ t('pages.office.focused.title2') }}</p>
          <p class="text-[23px]"> {{ t('pages.office.focused.desc2') }}</p>
        </div>
      </div>
      <div class="text-[#072867] flex  items-center gap-5  mb-10">
        <img src="@/assets/images/strategy/office/icon2.png" alt="" srcset="" class="h-20">
        <div>
          <p class="text-[28px] font-bold"> {{ t('pages.office.focused.title3') }}</p>
          <p class="text-[23px]"> {{ t('pages.office.focused.desc3') }}</p>
        </div>
      </div>
      <div class="text-[#072867] flex  items-center gap-5  mb-10">
        <img src="@/assets/images/strategy/office/icon3.png" alt="" srcset="" class="h-20">
        <div>
          <p class="text-[28px] font-bold"> {{ t('pages.office.focused.title4') }}</p>
          <p class="text-[23px]"> {{ t('pages.office.focused.desc4') }}</p>
        </div>
      </div>


      <div class="flex items-center gap-4 border-b border-[#072867] pl-4 pb-4 my-20 ">
        <img src="@/assets/images/home/rightArr.png" alt="" srcset="" class="w-10">
        <span class="text-[#072867] text-4xl font-bold">{{ t('pages.office.strengths.title') }}</span>
      </div>
      <div class="text-[#072867] flex  items-center gap-5  mb-10">
        <img src="@/assets/images/strategy/office/icon4.png" alt="" srcset="" class="h-20">
        <div>
          <p class="text-[28px] font-bold"> {{ t('pages.office.strengths.title2') }}</p>
          <p class="text-[23px]"> {{ t('pages.office.strengths.desc2') }}</p>
        </div>
      </div>
      <div class="text-[#072867] flex  items-center gap-5  mb-10">
        <img src="@/assets/images/strategy/office/icon5.png" alt="" srcset="" class="h-20">
        <div>
          <p class="text-[28px] font-bold"> {{ t('pages.office.strengths.title3') }}</p>
          <p class="text-[23px]"> {{ t('pages.office.strengths.desc3') }}</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped></style>