<template>
  <div>
    <div class="relative">
      <img src="@/assets/images/about/bg.png" alt="" srcset="" class="w-full">
      <div class="bg-[#072766] pl-14 pr-20 pt-30 text-white absolute top-30 w-110 left-46">
        <p class="text-6xl font-bold mb-4">{{ t('pages.about.banner.title') }}</p>
        <p class="text-4xl opacity-60">{{ t('pages.about.banner.title1') }}</p>
        <div class="w-45 h-3 bg-[#9F8570] mb-10 mt-24"></div>
        <p class="text-4xl font-bold leading-14 mt-8 mb-30">{{ t('pages.about.banner.desc') }} <br />{{
          t('pages.about.banner.desc2') }}</p>
      </div>
      <p class="text-[#0B2859] opacity-60 pl-170 text-2xl pr-39 py-12">{{ t('pages.about.desc') }}</p>
    </div>
    <div class="flex items-center justify-center gap-10 mt-20">
      <p class="w-60 h-20 flex items-center justify-center text-3xl text-white font-bold bg-[#334CA8] ">
        {{ t('pages.about.tab.tab1') }}
      </p>
      <p class="w-60 h-20  flex items-center justify-center text-3xl opacity-40 text-white bg-[#334CA8] cursor-pointer"
        @click="router.push({ name: 'team' })">
        {{ t('pages.about.tab.tab2') }}
      </p>
      <p class="w-60 h-20  flex items-center justify-center text-3xl opacity-40 text-white bg-[#334CA8] cursor-pointer"
        @click="router.push({ name: 'licenses' })">
        {{ t('pages.about.tab.tab3') }}
      </p>
      <p class="w-60 h-20 flex items-center justify-center text-3xl opacity-40 text-white bg-[#334CA8] cursor-pointer"
        @click="router.push({ name: 'value' })">
        {{ t('pages.about.tab.tab4') }}
      </p>
    </div>
    <div class="my-20 px-38 relative mb-25">
      <div class="p-8 relative">
        <div class="w-full h-88 bg-[#C1A894] absolute top-0 left-0"></div>
        <img src="@/assets/images/about/image1.png" alt="" srcset="" class="w-full h-auto z-10 relative">
      </div>
      <img src="@/assets/images/about/bg3.png" alt="" srcset="" class="w-full absolute -bottom-25 left-0">
    </div>
    <div class="py-20">
      <p class="w-150 flex items-center justify-between mx-auto">
        <img src="@/assets/images/home/leftArr.png" alt="" srcset="" class="w-14">
        <span class="text-[#0E285C] text-5xl font-bold ">{{ t('pages.about.culture.title') }}</span>
        <img src="@/assets/images/home/rightArr.png" alt="" srcset="" class="w-14">
      </p>
      <div class="px-44 mt-15 flex gap-4">
        <div class="flex-1 text-center bg-white shadow-xs">
          <img src="@/assets/images/about/image2.png" alt="" srcset="" class="w-full h-auto">
          <p class="text-[#345CAC] text-4xl">{{ t('pages.about.culture.desc1') }}</p>
          <p class="text-[#0E285C] text-2xl my-10">{{ t('pages.about.culture.content1') }}<br />{{
            t('pages.about.culture.content2') }}</p>
        </div>
        <div class="flex-1 text-center bg-white shadow-xs">
          <img src="@/assets/images/about/image3.png" alt="" srcset="" class="w-full h-auto">
          <p class="text-[#345CAC] text-4xl">{{ t('pages.about.culture.desc2') }}</p>
          <p class="text-[#0E285C] text-2xl my-10">{{ t('pages.about.culture.content3') }}<br />{{
            t('pages.about.culture.content4') }}</p>
        </div>

        <div class="flex-1 text-center bg-white shadow-xs">
          <img src="@/assets/images/about/image4.png" alt="" srcset="" class="w-full h-auto">
          <p class="text-[#345CAC] text-4xl">{{ t('pages.about.culture.desc3') }}</p>
          <p class="text-[#0E285C] text-2xl my-10">{{ t('pages.about.culture.content5') }}<br />{{
            t('pages.about.culture.content6') }}</p>
        </div>
        <div class="flex-1 text-center bg-white shadow-xs">
          <img src="@/assets/images/about/image5.png" alt="" srcset="" class="w-full h-auto">
          <p class="text-[#345CAC] text-4xl">{{ t('pages.about.culture.desc4') }}</p>
          <p class="text-[#0E285C] text-2xl my-10">{{ t('pages.about.culture.content7') }}<br />{{
            t('pages.about.culture.content8') }}</p>
        </div>
      </div>
    </div>
    <div class="relative">
      <img src="@/assets/images/about/bg2.png" alt="" srcset="">
      <div class=" absolute w-full h-full top-0 left-0 px-80">
        <p class="w-150 flex items-center justify-between mx-auto my-20">
          <img src="@/assets/images/home/leftArr2.png" alt="" srcset="" class="w-14">
          <span class="text-white text-5xl font-bold ">{{ t('pages.about.honors') }}</span>
          <img src="@/assets/images/home/rightArr2.png" alt="" srcset="" class="w-14">
        </p>
        <img src="@/assets/images/about/image6.png" alt="" srcset="" class="w-full h-auto">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router';
const { t } = useI18n()

const router = useRouter()

</script>

<style scoped></style>