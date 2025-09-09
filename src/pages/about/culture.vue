<template>
  <div>
    <div class=" relative">
      <img src="@/assets/images/about/culture/bg.png" alt="" srcset="" class="w-full">
      <div
        class=" absolute left-0 top-1/2 -translate-y-1/2 pl-30 border-l-20 border-[#C1A894] h-42 flex flex-col justify-around">

        <p class="text-[#C1A894] text-5xl">{{ t('pages.culture.title2') }}</p>
        <p class="text-white text-7xl font-bold">{{ t('pages.culture.title') }}</p>
      </div>
    </div>
    <div class="px-34 py-20">
      <div class="flex items-center gap-4 border-b border-[#072867] pl-4 pb-4 my-10 ">
        <img src="@/assets/images/home/rightArr.png" alt="" srcset="" class="w-10">
        <span class="text-[#072867] text-4xl font-bold">{{ t('pages.culture.genes.title') }}</span>
      </div>
      <div class="px-4 leading-10 mb-10">
        <p class="text-[#082867] text-[23px]">{{ t('pages.culture.genes.desc') }}</p>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <div class="flex">
          <img src="@/assets/images/about/culture/image1.png" alt="" srcset="" class="w-1/2 h-auto">
          <div class="w-1/2 h-full">
            <div class="h-2/3 bg-[#072867] flex flex-col justify-between p-8 ">
              <p class="text-5xl text-[#C1A894] font-bold text-center">{{ t('pages.culture.item1.title') }}</p>
              <div class="text-2xl text-white italic">
                <p class="text-left">{{ t('pages.culture.item1.desc') }}</p>
                <p class="text-right">{{ t('pages.culture.item1.desc2') }}</p>
              </div>
            </div>
            <div class="h-1/3 bg-white text-[#072867] p-8">
              <p class="text-2xl font-bold ">{{ t('pages.culture.item1.title2') }}</p>
              <div class="text-2xl font-light mt-4" :class="{ '!text-xl': isEn }">
                <p>{{ t('pages.culture.item1.desc3') }}</p>
                <p>{{ t('pages.culture.item1.desc4') }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex">
          <img src="@/assets/images/about/culture/image2.png" alt="" srcset="" class="w-1/2 h-auto">
          <div class="w-1/2 h-full">
            <div class="h-2/3 bg-[#072867] flex flex-col justify-between p-8 ">
              <p class="text-5xl text-[#C1A894] font-bold text-center">{{ t('pages.culture.item2.title') }}</p>
              <div class="text-2xl text-white italic">
                <p class="text-left">{{ t('pages.culture.item2.desc') }}</p>
                <p class="text-right">{{ t('pages.culture.item2.desc2') }}</p>
              </div>
            </div>
            <div class="h-1/3 bg-white text-[#072867] p-8">
              <p class="text-2xl font-bold ">{{ t('pages.culture.item2.title2') }}</p>
              <div class="text-2xl font-light mt-4" :class="{ '!text-xl': isEn }">
                <p>{{ t('pages.culture.item2.desc3') }}</p>
                <p>{{ t('pages.culture.item2.desc4') }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex">
          <img src="@/assets/images/about/culture/image3.png" alt="" srcset="" class="w-1/2 h-auto">
          <div class="w-1/2 h-full">
            <div class="h-2/3 bg-[#072867] flex flex-col justify-between p-8 ">
              <p class="text-5xl text-[#C1A894] font-bold text-center">{{ t('pages.culture.item3.title') }}</p>
              <div class="text-2xl text-white italic" :class="{ '!text-xl': isEn }">
                <p class="text-left">{{ t('pages.culture.item3.desc') }}</p>
                <p class="text-right">{{ t('pages.culture.item3.desc2') }}</p>
              </div>
            </div>
            <div class="h-1/3 bg-white text-[#072867] p-8">
              <p class="text-2xl font-bold ">{{ t('pages.culture.item3.title2') }}</p>
              <div class="text-2xl font-light mt-4" :class="{ '!text-xl': isEn }">
                <p>{{ t('pages.culture.item3.desc3') }}</p>
                <p>{{ t('pages.culture.item3.desc4') }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex">
          <img src="@/assets/images/about/culture/image4.png" alt="" srcset="" class="w-1/2 h-auto">
          <div class="w-1/2 h-full">
            <div class="h-2/3 bg-[#072867] flex flex-col justify-between p-8 ">
              <p class="text-5xl text-[#C1A894] font-bold text-center">{{ t('pages.culture.item4.title') }}</p>
              <div class="text-2xl text-white italic">
                <p class="text-left">{{ t('pages.culture.item4.desc') }}</p>
                <p class="text-right">{{ t('pages.culture.item4.desc2') }}</p>
              </div>
            </div>
            <div class="h-1/3 bg-white text-[#072867] p-8">
              <p class="text-2xl font-bold ">{{ t('pages.culture.item4.title2') }}</p>
              <div class="text-2xl font-light mt-4" :class="{ '!text-xl': isEn }">
                <p>{{ t('pages.culture.item4.desc3') }}</p>
                <p>{{ t('pages.culture.item4.desc4') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
const isEn = computed(() => locale.value === 'en')
</script>

<style scoped></style>