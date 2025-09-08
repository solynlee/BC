<template>
  <section>
    <div class="relative">
      <img src="@/assets/images/about/value/bg.png" alt="" srcset="" class="w-full">
      <div class="bg-[#072766] pl-10 pr-20 pt-30 text-white absolute top-30 w-120 left-46">
        <p class="text-6xl font-bold mb-4">{{ t('pages.about.banner.title') }}</p>
        <p class="text-4xl opacity-60">{{ t('pages.about.banner.title1') }}</p>
        <div class="w-45 h-3 bg-[#9F8570] mb-10 mt-24"></div>
        <p class="text-4xl font-bold mt-8 mb-30" :class="{ '!text-3xl  !leading-10': isEn }">{{
          t('pages.about.banner.desc') }} <br />{{
            t('pages.about.banner.desc3') }} <br />{{
            t('pages.about.banner.desc2') }} <br />{{
            t('pages.about.banner.desc4') }}</p>
      </div>
      <p class="text-[#0B2859] opacity-60 pl-180 text-xl pr-20 py-12">{{ t('pages.value.desc') }}<br />{{
        t('pages.value.desc2') }}</p>
    </div>
    <div class="flex items-center justify-center gap-10 mt-20 text-3xl text-white text-center"
      :class="{ '!text-2xl': isEn }">
      <p @click="router.push({ name: 'about' })"
        class="w-60 h-20 flex items-center justify-center opacity-40 text-white font-bold bg-[#334CA8] cursor-pointer">
        {{ t('pages.about.tab.tab1') }}
      </p>
      <p class="w-60 h-20  flex items-center justify-center  opacity-40 text-white bg-[#334CA8] cursor-pointer"
        @click="router.push({ name: 'team' })">
        {{ t('pages.about.tab.tab2') }}
      </p>
      <p class="w-60 h-20  flex items-center justify-center opacity-40  text-white bg-[#334CA8] cursor-pointer"
        @click="router.push({ name: 'proposition' })">
        {{ t('pages.about.tab.tab3') }}
      </p>
      <p class="w-60 h-20 flex items-center justify-center   text-white bg-[#334CA8] ">
        {{ t('pages.about.tab.tab4') }}
      </p>
    </div>
    <!-- <div class="relative">
      <img src="@/assets/images/about/value/bg.png" alt="" srcset="" class="w-full">
      <div class="bg-[#072766] pl-14 pr-20 pt-30 text-white absolute top-30 w-110 left-46">
        <p class="text-6xl font-bold mb-4">{{ t('pages.about.banner.title') }}</p>
        <p class="text-4xl opacity-60">{{ t('pages.about.banner.title1') }}</p>
        <div class="w-45 h-3 bg-[#9F8570] mb-10 mt-24"></div>
        <p class="text-4xl font-bold leading-14 mt-8 mb-30">{{ t('pages.about.banner.desc') }} <br />{{
          t('pages.about.banner.desc2') }}</p>
      </div>
      <p class="text-[#0B2859] opacity-60 pl-170 text-2xl pr-38 py-12">{{ t('pages.value.desc') }}<br />{{
        t('pages.value.desc2') }}</p>
    </div>
    <div class="flex items-center justify-center gap-10 mt-20">
      <p @click="router.push({ name: 'about' })"
        class="w-60 h-20 flex items-center justify-center text-3xl opacity-40 text-white font-bold bg-[#334CA8] cursor-pointer">
        {{ t('pages.about.tab.tab1') }}
      </p>
      <p class="w-60 h-20  flex items-center justify-center text-3xl opacity-40 text-white bg-[#334CA8] cursor-pointer"
        @click="router.push({ name: 'team' })">
        {{ t('pages.about.tab.tab2') }}
      </p>
      <p class="w-60 h-20  flex items-center justify-center text-3xl opacity-40  text-white bg-[#334CA8] cursor-pointer"
        @click="router.push({ name: 'proposition' })">
        {{ t('pages.about.tab.tab3') }}
      </p>
      <p class="w-60 h-20 flex items-center justify-center text-3xl  text-white bg-[#334CA8] ">
        {{ t('pages.about.tab.tab4') }}
      </p>
    </div> -->
    <div class="my-28 px-38 ">

      <div class="mt-10 p-4 h-200 relative">
        <img src="@/assets/images/insights/image4.png" alt="" srcset="" class="w-240">
        <div class="bg-white h-120 w-170 absolute bottom-0 right-8 z-20 p-15">
          <p class="text-[#072867] font-bold text-3xl line-clamp-2">{{ t('pages.insights.insight.title1') }}</p>
          <p class="text-[#072867] text-2xl mt-10 mb-15 line-clamp-5">
            {{ t('pages.insights.insight.desc1') }}</p>
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
        <div class="w-37 h-88 bg-[#C1A894] absolute bottom-40 right-0 z-1"></div>
      </div>
      <div class="mt-10 bg-white pl-80  p-10 relative">
        <img src="@/assets/images/insights/image5.png" alt="" srcset="" class="absolute left-10 -top-10 w-60 h-auto">
        <div class="flex justify-between  gap-10">
          <div>
            <p class="text-[#0B2859] font-bold text-3xl line-clamp-1 mb-8">{{ t('pages.insights.insight.title2') }}
            </p>
            <p class="text-[#001949] opacity-60 text-2xl line-clamp-2">{{ t('pages.insights.insight.desc2') }}</p>
          </div>
          <div class="flex items-center gap-4 mt-8 cursor-pointer">
            <div class="bg-[#334CA8] w-10 h-10 flex items-center justify-center rounded-full">
              <svg class="w-6 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>

          </div>
        </div>
      </div>
      <div class="mt-20 bg-white pl-80  p-10 relative">
        <img src="@/assets/images/insights/image6.png" alt="" srcset="" class="absolute left-10 -top-10 w-60 h-auto">
        <div class="flex justify-between  gap-10">
          <div>
            <p class="text-[#0B2859] font-bold text-3xl line-clamp-1 mb-8">{{ t('pages.insights.insight.title3') }}
            </p>
            <p class="text-[#001949] opacity-60 text-2xl line-clamp-2">{{ t('pages.insights.insight.desc3') }}</p>
          </div>
          <div class="flex items-center gap-4 mt-8 cursor-pointer">
            <div class="bg-[#334CA8] w-10 h-10 flex items-center justify-center rounded-full">
              <svg class="w-6 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router';
const { t, locale } = useI18n()

const router = useRouter()

const isEn = computed(() => locale.value === 'en')

</script>

<style scoped></style>