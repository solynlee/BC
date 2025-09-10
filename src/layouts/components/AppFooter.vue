<template>
  <footer>
    <div class="h-8 bg-[#C1A894]"></div>
    <div class="gradient-to-navy py-10 text-xl px-25">
      <div>
        <!-- 主要内容区域 -->
        <div class="flex justify-between items-center mb-4">
          <!-- 左侧Logo -->
          <div class="flex-shrink-0">
            <img src="@/assets/images/footer/logo.png" alt="Logo" class="h-24 w-auto">
          </div>

          <!-- 右侧二维码 -->
          <div class="flex gap-5 text-center text-[#0c2b57]">
            <div class="flex items-center justify-end gap-2">
              <div class="text-right">
                <p class="text-[#A37B24] text-2xl">Fllow US</p>
                <p>{{ t(`footer.Follow2`) }}</p>
              </div>
              <img src="@/assets/images/footer/code1.png" alt="关注二维码" class="w-30   h-auto mb-2">
              <img src="@/assets/images/footer/code2.png" alt="" class="w-30 h-auto mb-2">
            </div>
          </div>
        </div>
        <div class="p-10" v-if="showTable">
          <table class="w-full border-collapse border border-[#b9a495] table-fixed">
            <colgroup>
              <col class="w-1/6">
              <col class="w-1/6">
              <col class="w-5/12">
              <col class="w-1/4">
            </colgroup>
            <thead>
              <tr>
                <th class="text-2xl  py-4 font-bold text-center bg-[#a28672] text-white">
                  {{ t('pages.licenses.table.col1') }}
                </th>
                <th class="text-2xl  py-4 font-bold text-center bg-[#a28672] text-white">
                  {{ t('pages.licenses.table.col2') }}
                </th>
                <th class="text-2xl  py-4 font-bold text-center bg-[#a28672] text-white">
                  {{ t('pages.licenses.table.col3') }}
                </th>
                <th class="text-2xl  py-4 font-bold text-center bg-[#a28672] text-white">
                  {{ t('pages.licenses.table.col4') }}
                </th>
              </tr>
            </thead>
            <tbody class="text-[#002e68]">
              <tr>
                <td class="text-2xl font-bold p-4 px-6 border-r border-b border-[#b9a495] text-center ">
                  {{ t('pages.licenses.asset.col1') }}</td>
                <td class="text-xl py-4 px-6 border-r border-b border-[#b9a495] text-algin-justify">{{
                  t('pages.licenses.asset.col2') }}
                </td>
                <td class="text-xl p-4 px-6 border-r border-b border-[#b9a495] text-algin-justify">{{
                  t('pages.licenses.asset.col3') }}</td>
                <td class="text-xl p-4 px-6 border-r border-b border-[#b9a495] text-algin-justify">{{
                  t('pages.licenses.asset.col4') }}
                </td>
              </tr>
              <tr>
                <td class="text-xl font-bold p-4 px-10 border-r border-b border-[#b9a495] text-center "
                  :class="{ '!text-2xl': isEn }">
                  {{ t('pages.licenses.capital.col1') }}</td>
                <td class="text-xl py-4 px-6 border-r border-b border-[#b9a495] text-algin-justify">{{
                  t('pages.licenses.capital.col2') }}
                </td>
                <td class="text-xl p-4 px-6 border-r border-b border-[#b9a495] text-algin-justify">{{
                  t('pages.licenses.capital.col3') }}</td>
                <td class="text-xl p-4 px-6 border-r border-b border-[#b9a495] text-algin-justify">{{
                  t('pages.licenses.capital.col4') }}
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="4"
                  class="text-xl text-[#727e9b] italic p-4 border-r border-b border-[#a28672] text-algin-justify">
                  {{ t('pages.licenses.disclaimer') }}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <!-- 免责声明 -->
        <div class="flex justify-center items-center flex-col">
          <p @click="showDisclaimer"
            class="cursor-pointer w-54 text-[#031E4F]  text-center leading-relaxed border-l-3 border-[#031E4F] border-r-3 text-xl mb-4">
            {{ t('footer.btn') }}
          </p>
          <p class="w-full text-center  text-[#42526e] leading-relaxed">
            Copyright © 2025 拔萃资本集团 All Rights Reserved
          </p>
        </div>
      </div>
    </div>
    <DisclaimerModal ref="disclaimerModalRef" />
  </footer>
</template>


<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import DisclaimerModal from '@/components/DisclaimerModal.vue'
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
const showTable = ref(false)
const { t, locale } = useI18n()
const isEn = computed(() => locale.value === 'en')
const disclaimerModalRef = ref<InstanceType<typeof DisclaimerModal> | null>(null)
const showDisclaimer = () => {
  if (disclaimerModalRef.value) {
    disclaimerModalRef.value.showDisclaimer()
  }
}
const route = useRoute()
watch(() => route.name, (newVal) => {

  if (newVal === 'home') {
    showTable.value = true
  } else {
    showTable.value = false
  }
}, { immediate: true })


</script>


<style scoped></style>

<style type="text/tailwindcss">
@layer utilities {

  /* 直接使用#00234e色值，不定义额外变量 */
  .gradient-to-navy {
    background: -webkit-linear-gradient(top,
        #fff 0%,
        #E1D7CE 100%);
    /* 标准语法（补充角度值增强兼容性） */
    background: linear-gradient(180deg,
        #fff 0%,
        #E1D7CE 100%);
  }

}
</style>