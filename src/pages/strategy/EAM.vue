<template>
  <div>
    <div class=" relative">
      <img src="@/assets/images/strategy/office/bg.png" alt="" srcset="" class="w-full">
      <div
        class=" absolute left-0 top-1/2 -translate-y-1/2 pr-60 pl-30 border-l-20 border-[#072867] h-42 flex flex-col justify-around">
        <!-- <p class="text-[#9F8570] text-5xl">{{ t('pages.EAM.title2') }}</p> -->
        <p class="text-[#072867] text-7xl font-bold">{{ t('pages.EAM.title') }}</p>
      </div>
    </div>
    <div class="px-34 mb-30">
      <div class="flex items-center gap-8">
        <img src="@/assets/images/strategy/EAM/bg.png" alt="" srcset="" class="w-200 h-124 -translate-y-20">
        <p class="text-[#072867] text-2xl px-4 pb-40">{{ t('pages.EAM.desc') }}</p>
      </div>
      <div class="flex items-center gap-4 border-b border-[#072867] pl-4 pb-4 my-10 ">
        <img src="@/assets/images/home/rightArr.png" alt="" srcset="" class="w-10">
        <span class="text-[#072867] text-4xl font-bold">{{ t('pages.EAM.focused.title') }}</span>
      </div>
      <div class="text-[#072867] flex  items-center gap-5  mb-10">
        <img src="@/assets/images/strategy/EAM/icon1.png" alt="" srcset="" class="h-20">
        <div>
          <p class="text-[28px] font-bold"> {{ t('pages.EAM.focused.title2') }}</p>
          <p class="text-[23px]"> {{ t('pages.EAM.focused.desc2') }}</p>
        </div>
      </div>
      <div class="text-[#072867] flex  items-center gap-5  mb-10">
        <img src="@/assets/images/strategy/EAM/icon2.png" alt="" srcset="" class="h-20">
        <div>
          <p class="text-[28px] font-bold"> {{ t('pages.EAM.focused.title3') }}</p>
          <p class="text-[23px]"> {{ t('pages.EAM.focused.desc3') }}</p>
        </div>
      </div>
      <div class="text-[#072867] flex  items-center gap-5  mb-10">
        <img src="@/assets/images/strategy/EAM/icon3.png" alt="" srcset="" class="h-20">
        <div>
          <p class="text-[28px] font-bold"> {{ t('pages.EAM.focused.title4') }}</p>
          <p class="text-[23px]"> {{ t('pages.EAM.focused.desc4') }}</p>
        </div>
      </div>
      <div class="text-[#072867] flex  items-center gap-5  mb-10">
        <img src="@/assets/images/strategy/EAM/icon4.png" alt="" srcset="" class="h-20">
        <div>
          <p class="text-[28px] font-bold"> {{ t('pages.EAM.focused.title5') }}</p>
          <p class="text-[23px]"> {{ t('pages.EAM.focused.desc5') }}</p>
        </div>
      </div>
      <div class="flex items-center gap-4 border-b border-[#072867] pl-4 pb-4 my-20 ">
        <img src="@/assets/images/home/rightArr.png" alt="" srcset="" class="w-10">
        <span class="text-[#072867] text-4xl font-bold">{{ t('pages.EAM.strengths.title') }}</span>
      </div>
      <div class="text-[#072867] flex  items-center gap-5  mb-10">
        <img src="@/assets/images/strategy/EAM/icon5.png" alt="" srcset="" class="h-20">
        <div>
          <p class="text-[28px] font-bold"> {{ t('pages.EAM.strengths.title2') }}</p>
          <p class="text-[23px]"> {{ t('pages.EAM.strengths.desc2') }}</p>
        </div>
      </div>
      <div class="text-[#072867] flex  items-center gap-5  mb-10">
        <img src="@/assets/images/strategy/EAM/icon6.png" alt="" srcset="" class="h-20">
        <div>
          <p class="text-[28px] font-bold"> {{ t('pages.EAM.strengths.title3') }}</p>
          <p class="text-[23px]"> {{ t('pages.EAM.strengths.desc3') }}</p>
        </div>
      </div>
      <div class="text-[#072867] flex  items-center gap-5  mb-10">
        <img src="@/assets/images/strategy/EAM/icon7.png" alt="" srcset="" class="h-20">
        <div>
          <p class="text-[28px] font-bold"> {{ t('pages.EAM.strengths.title4') }}</p>
          <p class="text-[23px]"> {{ t('pages.EAM.strengths.desc4') }}</p>
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