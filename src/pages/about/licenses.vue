<template>
  <section>
    <div class="relative">
      <img src="@/assets/images/about/licenses/bg.png" alt="" srcset="" class="w-full">
      <div class="bg-[#072766] pl-14 pr-20 pt-30 text-white absolute top-30 w-110 left-46">
        <p class="text-6xl font-bold mb-4">{{ t('pages.about.banner.title') }}</p>
        <p class="text-4xl opacity-60">{{ t('pages.about.banner.title1') }}</p>
        <div class="w-45 h-3 bg-[#9F8570] mb-10 mt-24"></div>
        <p class="text-4xl font-bold leading-14 mt-8 mb-30">{{ t('pages.about.banner.desc') }} <br />{{
          t('pages.about.banner.desc2') }}</p>
      </div>
      <p class="text-[#0B2859] opacity-60 pl-170 text-2xl pr-39 py-12">{{ t('pages.licenses.desc') }}</p>
    </div>
    <div class="flex items-center justify-center gap-10 mt-20">
      <p @click="router.push({ name: 'about' })"
        class="w-60 h-20 flex items-center justify-center text-3xl opacity-40 text-white font-bold bg-[#334CA8] cursor-pointer">
        {{ t('pages.about.tab.tab1') }}
      </p>
      <p class="w-60 h-20  flex items-center justify-center text-3xl opacity-40 text-white bg-[#334CA8] "
        @click="router.push({ name: 'team' })">
        {{ t('pages.about.tab.tab2') }}
      </p>
      <p class="w-60 h-20  flex items-center justify-center text-3xl  text-white bg-[#334CA8] cursor-pointer">
        {{ t('pages.about.tab.tab3') }}
      </p>
      <p class="w-60 h-20 flex items-center justify-center text-3xl opacity-40 text-white bg-[#334CA8] cursor-pointer"
        @click="router.push({ name: 'value' })">
        {{ t('pages.about.tab.tab4') }}
      </p>
    </div>
    <div class="px-38 py-20">
      <div class="flex items-center gap-4 border-b border-[#001949] pl-4 pb-4 mt-20 mb-10">
        <img src="@/assets/images/home/rightArr.png" alt="" srcset="" class="w-10">
        <span class="text-[#001949] text-4xl font-bold">{{ t('pages.licenses.institutions.title') }}</span>
      </div>
      <div class="p-8 flex justify-between gap-8 text-[#0E285C] text-xl">
        <div class="flex flex-col flex-1">
          <img src="@/assets/images/about/licenses/image1.png" alt="" srcset="">
          <div class="py-6 px-6 border-l border-[#072766]">
            <p>{{ t('pages.licenses.institutions.item1.desc1') }}</p>
            <p>{{ t('pages.licenses.institutions.item1.desc2') }}</p>
            <p>{{ t('pages.licenses.institutions.item1.desc3') }}</p>
            <p class="pl-16">{{ t('pages.licenses.institutions.item1.desc4') }}</p>
            <p>{{ t('pages.licenses.institutions.item1.desc5') }}</p>
          </div>
        </div>
        <div class="flex flex-col flex-1">
          <img src="@/assets/images/about/licenses/image2.png" alt="" srcset="" class="w-full h-auto">
          <div class="py-6 pl-6 pr-8 border-l border-[#072766] flex-1">
            <p>{{ t('pages.licenses.institutions.item2.desc1') }}</p>
          </div>
        </div>
        <div class="flex flex-col flex-1">
          <img src="@/assets/images/about/licenses/image3.png" alt="" srcset="" class="w-full h-auto">
          <div class="py-6  pl-6 pr-8 border-l border-[#072766] flex-1">
            <p>{{ t('pages.licenses.institutions.item3.desc1') }}</p>
          </div>
        </div>
      </div>
      <div class="flex items-center gap-4 border-b border-[#001949] pl-4 pb-4 mt-20 mb-10">
        <img src="@/assets/images/home/rightArr.png" alt="" srcset="" class="w-10">
        <span class="text-[#001949] text-4xl font-bold">{{ t('pages.licenses.compliance.title') }}</span>
      </div>
      <p class="text-xl text-[#0E285C] px-20 ">{{ t('pages.licenses.compliance.desc') }}</p>
      <div class="flex items-center gap-4 border-b border-[#001949] pl-4 pb-4 mt-20 mb-10">
        <img src="@/assets/images/home/rightArr.png" alt="" srcset="" class="w-10">
        <span class="text-[#001949] text-4xl font-bold">{{ t('pages.licenses.standard.title') }}</span>
      </div>
      <p class="text-xl text-[#0E285C] px-20 ">{{ t('pages.licenses.standard.desc') }}</p>
      <div class="flex items-center gap-4 border-b border-[#001949] pl-4 pb-4 mt-20 mb-10">
        <img src="@/assets/images/home/rightArr.png" alt="" srcset="" class="w-10">
        <span class="text-[#001949] text-4xl font-bold">{{ t('pages.licenses.transparency.title') }}</span>
      </div>
      <p class="text-xl text-[#0E285C] px-20 ">{{ t('pages.licenses.transparency.desc') }}</p>
      <div class="p-20 flex items-center gap-20">
        <img src="@/assets/images/about/licenses/image4.png" alt="" srcset="" class="w-180 h-auto">
        <p class="text-xl text-[#0E285C]  pr-12">{{ t('pages.licenses.content') }}</p>
      </div>
    </div>
  </section>

</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router';
const { t } = useI18n()

const router = useRouter()

</script>

<style scoped lang="scss">
/* 基础样式保持 */
</style>