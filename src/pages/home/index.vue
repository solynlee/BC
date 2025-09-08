<template>
  <div class="min-h-screen">
    <div class="relative">
      <img src="@/assets/images/home/bg.png" alt="" srcset="" class="w-full object-cover">
      <div class="absolute bottom-0 left-0 w-full flex items-center justify-center flex-col">
        <p class="text-white text-7xl font-bold mb-18">{{ t('pages.home.banner.title') }}</p>
        <div class="flex items-start justify-around w-full  pb-12">
          <div class="data-block border-r w-70">
            <p class="data-title">{{ t('pages.home.banner.stats.wealthManagement') }}</p>
            <p class="data-description">{{ t('pages.home.banner.stats.wealthManagementDesc') }}</p>
          </div>
          <div class="data-block border-r  w-70">
            <p class="data-title">{{ t('pages.home.banner.stats.years') }}</p>
            <p class="data-description">{{ t('pages.home.banner.stats.yearsDesc') }}</p>
          </div>
          <div class="data-block border-r flex-1">
            <p class="data-title">{{ t('pages.home.banner.stats.regions') }}</p>
            <p class="data-description">{{ t('pages.home.banner.stats.regionsDesc') }}<br>{{
              t('pages.home.banner.stats.regionsDesc2') }}</p>
          </div>
          <div class="data-block border-r w-54">
            <p class="data-title">{{ t('pages.home.banner.stats.partnerInstitutions') }}</p>
            <p class="data-description">{{ t('pages.home.banner.stats.partnerInstitutionsDesc') }}</p>
          </div>
          <div class="data-block flex-1">
            <p class="data-title">{{ t('pages.home.banner.stats.licenses') }}</p>
            <p class="data-description">
              {{ t('pages.home.banner.stats.licensesDesc') }}<br>{{ t('pages.home.banner.stats.licensesDesc2') }}<br>{{
                t('pages.home.banner.stats.licensesDesc3') }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-[#F1F5FA] py-30 px-38">
      <p class="w-150 flex items-center justify-between mx-auto">
        <img src="@/assets/images/home/leftArr.png" alt="" srcset="" class="w-14 ">
        <span class="text-[#031E4F] text-5xl font-bold">{{ t('pages.home.product.title') }}</span>
        <img src="@/assets/images/home/rightArr.png" alt="" srcset="" class="w-14">
      </p>
      <p class="text-center text-[#072867] text-2xl leading-relaxed mt-12">
        {{ t('pages.home.product.content') }}<br />
        {{ t('pages.home.product.content2') }}</p>
      <p class="text-center text-[#072867] text-2xl leading-relaxed">
        {{ t('pages.home.product.content3') }}<br />
        {{ t('pages.home.product.content4') }}</p>
      <div class="mt-20 relative">
        <img src="@/assets/images/home/concept.png" alt="" srcset="" class="w-[56%]">
        <div class="bg-white w-[54%] absolute top-1/2 right-0 translate-y-[-50%] p-10">
          <p class="text-[#C1A894] text-4xl font-bold"> {{ t('pages.home.product.concept.title') }}</p>
          <p class="text-[#072867] text-2xl  mt-6">
            {{ t('pages.home.product.concept.content') }}</p>
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
      <div class="mt-10 relative flex justify-end">
        <img src="@/assets/images/home/ema.png" alt="" srcset="" class="w-[56%]">
        <div class="bg-white w-[54%] absolute top-1/2 left-0 translate-y-[-50%] p-10">
          <p class="text-[#C1A894] text-4xl font-bold"> {{ t('pages.home.product.ema.title') }}</p>
          <p class="text-[#072867] text-2xl mt-6 py-4">
            {{ t('pages.home.product.ema.content') }}</p>
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
    <div class="bg-[#F1F5FA] py-18 px-38 relative">
      <img src="@/assets/images/home/bg2.png" alt="" srcset="" class="w-full absolute left-0 top-0">
      <div class="relative">
        <p class="w-150 flex items-center justify-between mx-auto">
          <img src="@/assets/images/home/leftArr2.png" alt="" srcset="" class="w-14">
          <span class="text-white text-5xl font-bold ">{{ t('pages.home.fund.title') }}</span>
          <img src="@/assets/images/home/rightArr2.png" alt="" srcset="" class="w-14">
        </p>
        <p class="text-center text-[#FFFFFF] text-2xl leading-relaxed mt-9">
          {{ t('pages.home.fund.content') }}<br />
          {{ t('pages.home.fund.content2') }}</p>
        <div class="flex gap-6 mt-15">
          <div class="flex-1 gradient-to-navy1 flex flex-col items-center text-white">
            <img src="@/assets/images/home/image1.png" alt="" srcset="" class="w-full">
            <p class="text-4xl font-bold mb-3">{{ t('pages.home.fund.fund1.title') }}</p>
            <p class="text-2xl">{{ t('pages.home.fund.fund1.content') }}</p>
            <div class="flex items-center mb-8 mt-12 gap-4">
              <div class="text-xl  border-b border-white ">
                {{ t('pages.home.product.btn')
                }}</div>
              <svg class="w-6 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
          <div class="flex-1 gradient-to-navy1 flex flex-col items-center text-white">
            <img src="@/assets/images/home/image2.png" alt="" srcset="" class="w-full">
            <p class="text-4xl font-bold mb-3">{{ t('pages.home.fund.fund2.title') }}</p>
            <p class="text-2xl">{{ t('pages.home.fund.fund2.content') }}</p>
            <div class="flex items-center mb-8 mt-12 gap-4">
              <div class="text-xl  border-b border-white ">
                {{ t('pages.home.product.btn')
                }}</div>
              <svg class="w-6 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
          <div class="flex-1 gradient-to-navy1 flex flex-col items-center text-white">
            <img src="@/assets/images/home/image3.png" alt="" srcset="" class="w-full">
            <p class="text-4xl font-bold mb-3">{{ t('pages.home.fund.fund3.title') }}</p>
            <p class="text-2xl">{{ t('pages.home.fund.fund3.content') }}</p>
            <div class="flex items-center mb-8 mt-12 gap-4">
              <div class="text-xl  border-b border-white ">
                {{ t('pages.home.product.btn')
                }}</div>
              <svg class="w-6 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-[url('@/assets/images/home/bg3.png')] bg-cover bg-center bg-no-repeat py-26 px-38">
      <p class="w-150 flex items-center justify-between mx-auto">
        <img src="@/assets/images/home/leftArr.png" alt="" srcset="" class="w-14 ">
        <span class="text-[#031E4F] text-5xl font-bold">{{ t('pages.home.investment.title') }}</span>
        <img src="@/assets/images/home/rightArr.png" alt="" srcset="" class="w-14">
      </p>
      <p class="text-center text-[#072867] text-2xl leading-relaxed mt-12">
        {{ t('pages.home.investment.content') }}<br />
        {{ t('pages.home.investment.content2') }}</p>
      <div class="mt-20 relative">
        <img src="@/assets/images/home/image4.png" alt="" srcset="" class="w-[56%]">
        <div class="bg-white w-[54%] absolute top-1/2 right-0 translate-y-[-50%] p-10">

          <p class="text-[#072867] text-2xl  mt-6">
            {{ t('pages.home.investment.desc') }}</p>
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
    <div class="bg-[url('@/assets/images/home/bg4.png')] bg-cover bg-center bg-no-repeat py-26 px-38 text-[#FFFFFF]">
      <p class="w-150 flex items-center justify-between mx-auto">
        <img src="@/assets/images/home/leftArr2.png" alt="" srcset="" class="w-14">
        <span class="text-white text-5xl font-bold ">{{ t('pages.home.choose.title') }}</span>
        <img src="@/assets/images/home/rightArr2.png" alt="" srcset="" class="w-14">
      </p>
      <p class="text-center  text-2xl leading-relaxed mt-9">
        {{ t('pages.home.choose.content') }}<br />
        {{ t('pages.home.choose.content2') }}</p>
      <div class="grid grid-cols-3 gap-15 mt-5 ">
        <div class="text-center cursor-pointer h-full pt-20">
          <div class="flex-1 mx-auto mb-8">
            <img src="@/assets/images/home/image5.png" alt="" srcset="" class="w-full h-auto aspect-4-3 ">
          </div>
          <p class="text-2xl font-bold mb-5">{{
            t('pages.home.choose.choose1.title') }}</p>
          <p class="text-lg leading-relaxed">{{
            t('pages.home.choose.choose1.content') }} <br>
            {{ t('pages.home.choose.choose1.content2') }}</p>
        </div>
        <div class="text-center cursor-pointer h-full">
          <div class="flex-1 mx-auto mb-8 relative">
            <img src="@/assets/images/home/image6.png" alt="" srcset="" class="w-full h-auto aspect-4-3 ">
            <div class="absolute bottom-0 left-0 w-full h-ful text-white px-8 pb-20">
              <div class="h-1 w-20 bg-[#A37B24] mx-auto mb-4"></div>
              <p class="text-2xl font-bold mb-5">{{
                t('pages.home.choose.choose2.title') }}</p>
              <p class="text-lg leading-relaxed">{{
                t('pages.home.choose.choose2.content') }} <br>
                {{ t('pages.home.choose.choose2.content2') }}</p>
            </div>
            <div
              class="h-14 w-14 rounded-full bg-[#C1A894] flex items-center justify-center absolute -bottom-7 right-1/2 translate-x-1/2">
              <svg class="w-6 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

        </div>
        <div class="text-center cursor-pointer h-full pt-20">
          <div class="flex-1 mx-auto mb-8">
            <img src="@/assets/images/home/image7.png" alt="" srcset="" class="w-full h-auto aspect-4-3 ">
          </div>
          <div class="px-15">
            <p class="text-2xl font-bold mb-5">{{
              t('pages.home.choose.choose3.title') }}</p>
            <p class="text-lg leading-relaxed">{{
              t('pages.home.choose.choose3.content') }} <br>
              {{ t('pages.home.choose.choose3.content2') }}</p>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

</script>

<style scoped>
@reference "tailwindcss";

.data-block {
  @apply flex flex-col items-center text-center px-8 h-40;
}

.data-block.border-r {
  @apply border-r border-white/30;
}

.data-title {
  @apply text-[#C1A894] text-4xl font-bold mb-4;
}

.data-description {
  @apply text-[#98a4b8] text-xl leading-relaxed;
}
</style>

<style type="text/tailwindcss">
@layer utilities {

  .gradient-to-navy1 {
    background: -webkit-linear-gradient(top,
        #fff 0%,
        #A48871 55%);
    /* 标准语法（补充角度值增强兼容性） */
    background: linear-gradient(180deg,
        #fff 0%,
        #A48871 55%);
  }

}
</style>