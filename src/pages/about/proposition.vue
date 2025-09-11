<template>
  <section>
    <div class="relative">
      <img src="@/assets/images/about/proposition/bg.png" alt="" srcset="" class="w-full">
      <div class="bg-[#072766] px-10 text-white absolute top-29 w-[503px] left-38 ">
        <div class="pt-30 h-77">
          <p class="text-7xl font-bold mb-8">{{ t('pages.about.banner.title') }}</p>
          <p class="text-4xl opacity-60">{{ t('pages.about.banner.title1') }}</p>
        </div>
        <div class="w-45 h-3 bg-[#9F8570] mb-15"></div>
        <template v-if="isEn">
          <p class="text-3xl font-bold mt-8 mb-25  leading-10">{{
            t('pages.about.banner.desc') }} <br />{{
              t('pages.about.banner.desc3') }} <br />{{
              t('pages.about.banner.desc2') }} <br />{{
              t('pages.about.banner.desc4') }}</p>
        </template>
        <template v-else>
          <p class="text-5xl font-bold mt-8 mb-25 leading-18">{{
            t('pages.about.banner.desc') }}<br />{{
              t('pages.about.banner.desc2') }}</p>
        </template>
      </div>
      <p class="text-[#0B2859] opacity-60 pl-180 leading-9 text-xl pr-20 py-12">{{ t('pages.proposition.desc') }}</p>
    </div>
    <div class="flex items-center justify-center gap-10 mt-20 text-3xl text-white text-center"
      :class="{ '!text-2xl': isEn }">
      <p @click="router.push({ name: 'about' })"
        class="w-60 h-20 flex items-center justify-center  opacity-40 text-white font-bold bg-[#334CA8] cursor-pointer">
        {{ t('pages.about.tab.tab1') }}
      </p>
      <p class="w-60 h-20  flex items-center justify-center opacity-40 text-white bg-[#334CA8] "
        @click="router.push({ name: 'team' })">
        {{ t('pages.about.tab.tab2') }}
      </p>
      <p class="w-60 h-20  flex items-center justify-center text-white bg-[#334CA8] cursor-pointer">
        {{ t('pages.about.tab.tab3') }}
      </p>
      <p class="w-60 h-20 flex items-center justify-center  opacity-40 text-white bg-[#334CA8] cursor-pointer"
        @click="router.push({ name: 'value' })">
        {{ t('pages.about.tab.tab4') }}
      </p>
      <p class="w-80 h-20 flex items-center justify-center opacity-40  bg-[#334CA8] cursor-pointer"
        @click="router.push({ name: 'licenses' })">
        {{ t('pages.about.tab.tab5') }}
      </p>
    </div>

    <div class="px-38 py-20">
      <div class="flex items-center gap-4 border-b border-[#072867] pl-4 pb-4 mt-20 mb-10">
        <img src="@/assets/images/home/rightArr.png" alt="" srcset="" class="w-10">
        <span class="text-[#072867] text-4xl font-bold">{{ t('pages.proposition.institutions.title') }}</span>
      </div>
      <div class="p-8 flex justify-between gap-8 text-[#0E285C] text-xl">
        <div class="flex flex-col flex-1">
          <img :src="imageUrl1" alt="" srcset="">
          <div class="py-6 px-6 border-l border-[#072766]">
            <p>{{ t('pages.proposition.institutions.item1.desc1') }}</p>
            <p>{{ t('pages.proposition.institutions.item1.desc2') }}</p>
            <p>{{ t('pages.proposition.institutions.item1.desc3') }}</p>
            <p class="pl-16">{{ t('pages.proposition.institutions.item1.desc4') }}</p>
            <p>{{ t('pages.proposition.institutions.item1.desc5') }}</p>
          </div>
        </div>
        <div class="flex flex-col flex-1">
          <img :src="imageUrl2" alt="" srcset="" class="w-full h-auto">
          <div class="py-6 pl-6 border-l border-[#072766] flex-1">
            <p>{{ t('pages.proposition.institutions.item2.desc1') }}</p>
          </div>
        </div>
        <div class="flex flex-col flex-1">
          <img :src="imageUrl3" alt="" srcset="" class="w-full h-auto">
          <div class="py-6  pl-6  border-l border-[#072766] flex-1">
            <p>{{ t('pages.proposition.institutions.item3.desc1') }}</p>
          </div>
        </div>
      </div>
      <div class="flex items-center gap-4 border-b border-[#072867] pl-4 pb-4 mt-20 mb-10">
        <img src="@/assets/images/home/rightArr.png" alt="" srcset="" class="w-10">
        <span class="text-[#072867] text-4xl font-bold">{{ t('pages.proposition.compliance.title') }}</span>
      </div>
      <p class="text-xl text-[#0E285C] px-20 ">{{ t('pages.proposition.compliance.desc') }}</p>
      <div class="flex items-center gap-4 border-b border-[#072867] pl-4 pb-4 mt-20 mb-10">
        <img src="@/assets/images/home/rightArr.png" alt="" srcset="" class="w-10">
        <span class="text-[#072867] text-4xl font-bold">{{ t('pages.proposition.standard.title') }}</span>
      </div>
      <p class="text-xl text-[#0E285C] px-20 ">{{ t('pages.proposition.standard.desc') }}</p>
      <div class="flex items-center gap-4 border-b border-[#072867] pl-4 pb-4 mt-20 mb-10">
        <img src="@/assets/images/home/rightArr.png" alt="" srcset="" class="w-10">
        <span class="text-[#072867] text-4xl font-bold">{{ t('pages.proposition.transparency.title') }}</span>
      </div>
      <p class="text-xl text-[#0E285C] px-20 ">{{ t('pages.proposition.transparency.desc') }}</p>
      <div class="p-20 flex items-center gap-20">
        <img src="@/assets/images/about/proposition/image10.png" alt="" srcset="" class="w-180 h-auto">
        <p class="text-xl text-[#0E285C]  pr-12" :class="{ '!pr-1': isEn }">{{ t('pages.proposition.content') }}</p>
      </div>
    </div>
  </section>

</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router';
const { t, locale } = useI18n()
import image1 from '@/assets/images/about/proposition/image1.png'
import image2 from '@/assets/images/about/proposition/image2.png'
import image3 from '@/assets/images/about/proposition/image3.png'
import image4 from '@/assets/images/about/proposition/image4.png'
import image5 from '@/assets/images/about/proposition/image5.png'
import image6 from '@/assets/images/about/proposition/image6.png'
import image7 from '@/assets/images/about/proposition/image7.png'
import image8 from '@/assets/images/about/proposition/image8.png'
import image9 from '@/assets/images/about/proposition/image9.png'

const imageUrl1 = computed(() => {
  if (locale.value === 'zh-CN') {
    return image1;
  } else if (locale.value === 'zh-TW') {
    return image4;
  } else {
    return image7;
  }
})
const imageUrl2 = computed(() => {
  if (locale.value === 'zh-CN') {
    return image2;
  } else if (locale.value === 'zh-TW') {
    return image5;
  } else {
    return image8;
  }
})
const imageUrl3 = computed(() => {
  if (locale.value === 'zh-CN') {
    return image3;
  } else if (locale.value === 'zh-TW') {
    return image6;
  } else {
    return image9;
  }
})

const router = useRouter()

const isEn = computed(() => locale.value === 'en')
</script>

<style scoped lang="scss">
/* 基础样式保持 */
</style>
