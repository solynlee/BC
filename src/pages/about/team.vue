<template>
  <section>
    <div class="relative">
      <img src="@/assets/images/about/team/bg1.png" alt="" srcset="" class="w-full">
      <div class="bg-[#072766] pl-14 pr-20 pt-30 text-white absolute top-30 w-110 left-46">
        <p class="text-6xl font-bold mb-4">{{ t('pages.about.banner.title') }}</p>
        <p class="text-4xl opacity-60">{{ t('pages.about.banner.title1') }}</p>
        <div class="w-45 h-3 bg-[#9F8570] mb-10 mt-24"></div>
        <p class="text-4xl font-bold leading-14 mt-8 mb-30">{{ t('pages.about.banner.desc') }} <br />{{
          t('pages.about.banner.desc2') }}</p>
      </div>
      <p class="text-[#0B2859] opacity-60 pl-170 text-2xl pr-39 py-12">{{ t('pages.team.desc') }}</p>
    </div>
    <div class="flex items-center justify-center gap-10 mt-20">
      <p @click="router.push({ name: 'about' })"
        class="w-60 h-20 flex items-center justify-center text-3xl opacity-40 text-white font-bold bg-[#334CA8] cursor-pointer">
        {{ t('pages.about.tab.tab1') }}
      </p>
      <p class="w-60 h-20  flex items-center justify-center text-3xl  text-white bg-[#334CA8] ">
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
    <div class="px-38 my-20 relative">
      <div class="relative px-4 mb-36">
        <img src="@/assets/images/about/team/image1.png" alt="" srcset="" class="w-160 h-auto relative z-10">
        <div class="w-210 h-full bg-white shadow absolute right-0 -bottom-16 pl-60 pr-20 ">
          <div class="bg-[#345CAC] h-4 w-40"></div>
          <p class="text-[#C1A894] font-bold text-5xl mt-20 mb-2">{{ t('pages.team.Sun.name') }}</p>
          <p class="text-[#C1A894] text-3xl">{{ t('pages.team.Sun.postion') }}</p>
          <p class="mt-10 text-xl text-[#0E285C]">{{ t('pages.team.Sun.desc') }}</p>
          <p class="mt-4 text-xl text-[#0E285C]">{{ t('pages.team.Sun.desc2') }}</p>
          <p class="mt-4 text-xl text-[#0E285C]">{{ t('pages.team.Sun.desc3') }}</p>
          <p class="mt-4 text-xl text-[#0E285C]">{{ t('pages.team.Sun.desc4') }}</p>
        </div>
      </div>
      <div class="flex items-center gap-4 border-b border-[#001949] pl-4 pb-4">
        <img src="@/assets/images/home/rightArr.png" alt="" srcset="" class="w-10">
        <span class="text-[#001949] text-4xl font-bold">{{ t('pages.team.core') }}</span>
      </div>
      <div class="px-4 mt-10 grid grid-cols-2 gap-8">
        <div class="pt-32 relative">
          <img src="@/assets/images/about/team/image2.png" alt="" srcset="" class="w-auto h-68 absolute top-0 left-0">
          <div class="bg-white shadow py-10 px-7">
            <div class="text-[#C1A894] pl-74 mb-20">
              <p class="text-4xl font-bold">{{ t('pages.team.Feng.name') }}</p>
              <p class="text-2xl mt-2 ">{{ t('pages.team.Feng.postion') }}</p>
            </div>
            <div class="text-[#0E285C] text-xl pl-8 pr-4  py-4 border-l-8 border-[#345CAC]">
              <p>{{ t('pages.team.Feng.desc') }}</p>
              <p class="my-3">{{ t('pages.team.Feng.desc2') }}</p>
              <p class="mb-10">{{ t('pages.team.Feng.desc3') }}</p>
            </div>
          </div>
        </div>
        <div class="pt-32 relative">
          <img src="@/assets/images/about/team/image2.png" alt="" srcset="" class="w-auto h-68 absolute top-0 left-0">
          <div class="bg-white shadow py-10 px-7">
            <div class="text-[#C1A894] pl-74 mb-20">
              <p class="text-4xl font-bold">{{ t('pages.team.Feng.name') }}</p>
              <p class="text-2xl mt-2 ">{{ t('pages.team.Feng.postion') }}</p>
            </div>
            <div class="text-[#0E285C] text-xl pl-8 pr-4  py-4 border-l-8 border-[#345CAC]">
              <p>{{ t('pages.team.Feng.desc') }}</p>
              <p class="my-3">{{ t('pages.team.Feng.desc2') }}</p>
              <p class="mb-10">{{ t('pages.team.Feng.desc3') }}</p>
            </div>
          </div>
        </div>
        <div class="pt-32 relative">
          <img src="@/assets/images/about/team/image2.png" alt="" srcset="" class="w-auto h-68 absolute top-0 left-0">
          <div class="bg-white shadow py-10 px-7">
            <div class="text-[#C1A894] pl-74 mb-20">
              <p class="text-4xl font-bold">{{ t('pages.team.Feng.name') }}</p>
              <p class="text-2xl mt-2 ">{{ t('pages.team.Feng.postion') }}</p>
            </div>
            <div class="text-[#0E285C] text-xl pl-8 pr-4  py-4 border-l-8 border-[#345CAC]">
              <p>{{ t('pages.team.Feng.desc') }}</p>
              <p class="my-3">{{ t('pages.team.Feng.desc2') }}</p>
              <p class="mb-10">{{ t('pages.team.Feng.desc3') }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center gap-4 border-b border-[#001949] pl-4 pb-4 mt-20 mb-10">
        <img src="@/assets/images/home/rightArr.png" alt="" srcset="" class="w-10">
        <span class="text-[#001949] text-4xl font-bold">{{ t('pages.team.manag') }}</span>
      </div>
      <div class="px-4 mt-10 grid grid-cols-2 gap-8">
        <div class="pt-32 relative">
          <img src="@/assets/images/about/team/image2.png" alt="" srcset=""
            class="w-auto h-68 absolute top-0 left-1/2 -translate-x-1/2">
          <div class="bg-white shadow pt-48 pb-10 px-7">
            <div class="text-[#C1A894] text-center ">
              <p class="text-4xl font-bold">{{ t('pages.team.Feng.name') }}</p>
              <p class="text-2xl mt-2 ">{{ t('pages.team.Feng.postion') }}</p>
            </div>
            <div class="text-[#0E285C] text-xl pl-8 pr-4  py-4 border-l-8 border-[#345CAC]">
              <p>{{ t('pages.team.Feng.desc') }}</p>
              <p class="my-3">{{ t('pages.team.Feng.desc2') }}</p>
              <p class="mb-10">{{ t('pages.team.Feng.desc3') }}</p>
            </div>
          </div>
        </div>
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

<style scoped></style>