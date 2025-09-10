<template>
  <section>
    <div class="relative">
      <img src="@/assets/images/about/bg.png" alt="" srcset="" class="w-full">
      <div class="bg-[#072766] px-14  pt-30 text-white absolute top-30 w-130 left-40">
        <p class="text-6xl font-bold mb-4">{{ t('pages.about.banner.title') }}</p>
        <p class="text-4xl opacity-60">{{ t('pages.about.banner.title1') }}</p>
        <div class="w-45 h-3 bg-[#9F8570] mb-10 mt-24"></div>
        <p class="text-5xl font-bold mt-8 mb-30" :class="{ '!text-3xl  !leading-10': isEn }">{{
          t('pages.about.banner.desc') }} <br />{{
            t('pages.about.banner.desc3') }} <br />{{
            t('pages.about.banner.desc2') }} <br />{{
            t('pages.about.banner.desc4') }}</p>
      </div>
      <p class="text-[#0B2859] opacity-60 pl-180 text-xl pr-32 py-12 "></p>
    </div>
    <div class="flex items-center justify-center gap-10 mt-40 mb-20 text-3xl text-white text-center"
      :class="{ '!text-2xl': isEn }">
      <p class="w-60 h-20 flex items-center justify-center opacity-40  font-bold bg-[#334CA8] "
        @click="router.push({ name: 'about' })">
        {{ t('pages.about.tab.tab1') }}
      </p>
      <p class="w-60 h-20  flex items-center justify-center opacity-40  bg-[#334CA8] cursor-pointer"
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
      <p class="w-80 h-20 flex items-center justify-center   bg-[#334CA8] ">
        {{ t('pages.about.tab.tab5') }}
      </p>
    </div>
    <div class="px-38 pb-20">
      <table class="w-full border-collapse border border-[#b9a495] table-fixed">
        <colgroup>
          <col class="w-1/6">
          <col class="w-1/6">
          <col class="w-5/12">
          <col class="w-1/4">
        </colgroup>
        <thead>
          <tr>
            <th class="text-2xl py-8 font-bold text-center bg-[#a28672] text-white">
              {{ t('pages.licenses.table.col1') }}
            </th>
            <th class="text-2xl py-8 font-bold text-center bg-[#a28672] text-white">
              {{ t('pages.licenses.table.col2') }}
            </th>
            <th class="text-2xl py-8 font-bold text-center bg-[#a28672] text-white">
              {{ t('pages.licenses.table.col3') }}
            </th>
            <th class="text-2xl py-8 font-bold text-center bg-[#a28672] text-white">
              {{ t('pages.licenses.table.col4') }}
            </th>
          </tr>
        </thead>
        <tbody class="text-[#002e68]">
          <tr>
            <td class="text-2xl font-bold py-8 px-2 border-r border-b border-[#b9a495] text-center ">
              {{ t('pages.licenses.asset.col1') }}</td>
            <td class="text-xl p-6 border-r border-b border-[#b9a495] text-algin-justify">{{
              t('pages.licenses.asset.col2') }}</td>
            <td class="text-xl p-6 border-r border-b border-[#b9a495] ">{{
              t('pages.licenses.asset.col3') }}</td>
            <td class="text-xl p-8 border-r border-b border-[#b9a495] text-algin-justify">{{
              t('pages.licenses.asset.col4') }}</td>
          </tr>
          <tr>
            <td class="text-xl font-bold py-8 px-10 border-r border-b border-[#b9a495] text-center "
              :class="{ '!text-2xl': isEn }">
              {{ t('pages.licenses.capital.col1') }}</td>
            <td class="text-xl p-6 border-r border-b border-[#b9a495] text-algin-justify">{{
              t('pages.licenses.capital.col2') }}</td>
            <td class="text-xl p-6 border-r border-b border-[#b9a495] text-algin-justify">{{
              t('pages.licenses.capital.col3') }}</td>
            <td class="text-xl p-8 border-r border-b border-[#b9a495] text-algin-justify">{{
              t('pages.licenses.capital.col4') }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="4"
              class="text-xl text-[#727e9b] italic p-8 border-r border-b border-[#a28672] text-algin-justify">
              {{ t('pages.licenses.disclaimer') }}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  </section>

</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router';
const { t, locale } = useI18n()
const isEn = computed(() => locale.value === 'en')
const router = useRouter()

</script>

<style scoped lang="scss">
/* 基础样式保持 */
</style>