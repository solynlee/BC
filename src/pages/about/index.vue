<template>
  <div>
    <div class="relative">
      <img src="@/assets/images/about/bg.png" alt="" srcset="" class="w-full">
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
      <p class="text-[#0B2859] opacity-60 pl-180 text-xl pr-32 py-12">{{ t('pages.about.desc') }}</p>
    </div>
    <div class="flex items-center justify-center gap-10 mt-20 text-3xl text-white text-center"
      :class="{ '!text-2xl': isEn }">
      <p class="w-60 h-20 flex items-center justify-center  font-bold bg-[#334CA8] ">
        {{ t('pages.about.tab.tab1') }}
      </p>
      <p class="w-60 h-20  flex items-center justify-center  opacity-40  bg-[#334CA8] cursor-pointer"
        @click="router.push({ name: 'team' })">
        {{ t('pages.about.tab.tab2') }}
      </p>
      <p class="w-60 h-20  flex items-center justify-center opacity-40 bg-[#334CA8] cursor-pointer"
        @click="router.push({ name: 'proposition' })">
        {{ t('pages.about.tab.tab3') }}
      </p>
      <p class="w-60 h-20 flex items-center justify-center opacity-40  bg-[#334CA8] cursor-pointer"
        @click="router.push({ name: 'value' })">
        {{ t('pages.about.tab.tab4') }}
      </p>
      <p class="w-80 h-20 flex items-center justify-center opacity-40  bg-[#334CA8] cursor-pointer"
        @click="router.push({ name: 'licenses' })">
        {{ t('pages.about.tab.tab5') }}
      </p>
    </div>
    <div class="my-20 px-38 relative mb-25">
      <div class="p-8 relative">
        <div class="w-full h-88 bg-[#C1A894] absolute top-0 left-0"></div>
        <div class="w-full h-[619px] z-100 relative">
          <video ref="videoRef" class="video-js" style="width: 100%; height: 100%"></video>
        </div>
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
        <div class="flex-1 text-center bg-white shadow-xs cursor-pointer" @click="router.push({ name: 'culture' })">
          <img src="@/assets/images/about/image2.png" alt="" srcset="" class="w-full h-auto">
          <p class="text-[#345CAC] text-4xl">{{ t('pages.about.culture.desc1') }}</p>
          <p class="text-[#0E285C] text-2xl my-10">{{ t('pages.about.culture.content1') }}<br />{{
            t('pages.about.culture.content2') }}</p>
        </div>
        <div class="flex-1 text-center bg-white shadow-xs cursor-pointer" @click="router.push({ name: 'culture' })">
          <img src="@/assets/images/about/image3.png" alt="" srcset="" class="w-full h-auto">
          <p class="text-[#345CAC] text-4xl" :class="{ 'h-[5rem]': isEn }">{{ t('pages.about.culture.desc2') }}</p>
          <p class="text-[#0E285C] text-2xl my-10">{{ t('pages.about.culture.content3') }}<br />{{
            t('pages.about.culture.content4') }}</p>
        </div>

        <div class="flex-1 text-center bg-white shadow-xs cursor-pointer" @click="router.push({ name: 'culture' })">
          <img src="@/assets/images/about/image4.png" alt="" srcset="" class="w-full h-auto">
          <p class="text-[#345CAC] text-4xl">{{ t('pages.about.culture.desc3') }}</p>
          <p class="text-[#0E285C] text-2xl my-10">{{ t('pages.about.culture.content5') }}<br />{{
            t('pages.about.culture.content6') }}</p>
        </div>
        <div class="flex-1 text-center bg-white shadow-xs cursor-pointer" @click="router.push({ name: 'culture' })">
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
        <img :src="images" alt="" srcset="" class="w-full h-auto">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Videojs from 'video.js';
import 'video.js/dist/video-js.min.css';
import { computed, onMounted, ref, shallowRef } from 'vue';
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router';
const { t, locale } = useI18n()

import images6 from '@/assets/images/about/image6.png';
import images7 from '@/assets/images/about/image7.png';
import images8 from '@/assets/images/about/image8.png';

const images = computed(() => {
  if (locale.value === 'zh-CN') {
    return images6;
  } else if (locale.value === 'zh-TW') {
    return images7;
  } else {
    return images8;
  }
})
import mp4Url from '@/assets/video/2.mp4';
import imgUrl from '@/assets/images/about/image1.png';
const router = useRouter()

const isEn = computed(() => locale.value === 'en')

const videoRef = ref(null);
const videoInstance = shallowRef(); //提高性能
const potions = {
  sources: [
    // 两种播放格式
    {
      type: 'video/mp4',
      src: mp4Url,
    },
    // {
    //   src: 'https://gcalic.v.myalicdn.com/gc/jsh02_1/index.m3u8?contentid=2820180516001',
    //   type: 'application/x-mpegURL',
    // },
  ],
  autoplay: false, //是否自动播放
  loop: false, //是否循环播放
  controls: true, //控制器
  preload: true, //是否预加载
  language: 'zh-CN', //显示的语言 中文
  playbackRates: [0.5, 1, 1.5, 2], //播放速度
  poster: imgUrl, //封面图
};
/**
 * 初始化video
 */
const initVideo = () => {
  if (!videoRef.value) return;
  // Videojs第一个参数可以使video标签的id或者目标标签元素，第二个参数为配置项。
  videoInstance.value = Videojs(videoRef.value, potions);
};
onMounted(() => {
  initVideo();

})

</script>

<style scoped>
:deep(.vjs-big-play-button) {

  display: none;

}
</style>
