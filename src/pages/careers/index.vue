<template>
  <section>
    <div class="relative">
      <img src="@/assets/images/careers/bg.png" alt="" srcset="" class="w-full">
      <div class="bg-[#072766] px-10 text-white absolute top-29 w-[503px] left-38 ">
        <div class="pt-30 h-77">
          <p class="text-7xl font-bold mb-8">{{ t('pages.careers.banner.title') }}</p>
          <p class="text-4xl opacity-60">{{ t('pages.careers.banner.title1') }}</p>
        </div>
        <div class="w-45 h-3 bg-[#9F8570] mb-8"></div>
        <p class="text-5xl font-bold" :class="{ '!text-4xl !leading-11': isEn }">{{ t('pages.careers.banner.desc') }}
        </p>
        <p class="text-5xl font-bold mt-4 mb-25 leading-18 pr-10" :class="{ '!text-4xl !leading-11': isEn }">{{
          t('pages.careers.banner.desc2') }}
          <br />{{
            t('pages.careers.banner.desc3') }}
        </p>

      </div>
    </div>
    <div class="relative">
      <div class="pl-50  pt-85 h-180" :class="{ '!pt-60': isEn }">
        <p class="text-[#072867] text-2xl w-102">{{ t('pages.careers.desc') }}</p>
        <div class="flex items-center gap-4 mt-10 cursor-pointer" @click="router.push('/careers/acquisition')">
          <div class="bg-[#334CA8] w-10 h-10 flex items-center justify-center rounded-full">
            <svg class="w-6 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <div class="text-[#334CA8] text-xl border-b border-[#334CA8]">{{ t('pages.home.product.btn')
          }}</div>
        </div>
      </div>
      <img src="@/assets/images/careers/image1.png" alt="" srcset=""
        class="w-180 h-auto absolute bottom-26 right-44 z-90">
      <img src="@/assets/images/careers/image2.png" alt="" srcset="" class="w-full h-auto">
    </div>
    <div class="px-38 py-30">
      <div class="flex items-center gap-4 border-b border-[#072867] pl-4 pb-4">
        <img src="@/assets/images/home/rightArr.png" alt="" srcset="" class="w-10">
        <span class="text-[#072867] text-4xl font-bold">{{ t('pages.careers.desc2') }}</span>
      </div>
      <div class="px-10 py-16 grid grid-cols-3 gap-4">
        <div class="bg-white p-10 flex flex-col" v-for="item in list" :key="item.id">
          <p class="text-[#9F8570] text-4xl font-bold"> {{ item.jobTitle }}</p>
          <p class="text-2xl text-[#072867] my-10 flex-1 " v-html="item.abstract">

          </p>
          <div class="flex items-center justify-between gap-4">
            <p class="text-2xl text-[#072867] opacity-60 line-clamp-1 "> {{ item.workPlace }}</p>
            <div class="flex items-center gap-4  cursor-pointer"
              @click="router.push({ name: 'careersDetail', query: { code: item.jobCode } })">
              <div class="bg-[#334CA8] w-10 h-10 flex items-center justify-center rounded-full">
                <svg class="w-6 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
const { t, locale } = useI18n()
import { useCustomApiWithAutoRefresh } from '@/utils/useAutoRefreshApi'
import api from '@/utils/http'
import { computed } from 'vue'
const isEn = computed(() => locale.value === 'en')
const router = useRouter()
interface Job {
  id: string,
  jobTitle: string
  abstract: string
  workPlace: number,
  jobCode: string
}

const { data: list } = useCustomApiWithAutoRefresh<Job[]>(() => api.get({
  url: '/api/front/jobs/list',

}))


</script>


<style scoped></style>
