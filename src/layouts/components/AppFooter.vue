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
            <div>
              <img src="@/assets/images/footer/code.png" alt="关注二维码" class="w-30  bg-[#0c2b57] h-auto mb-4">
              <p>关注二维码</p>
            </div>
            <div>
              <img src="@/assets/images/footer/code.png" alt="" class="w-30 bg-[#0c2b57] h-auto mb-4">
              <p>关注公众号</p>
            </div>
          </div>
        </div>

        <!-- 免责声明 -->
        <div class="flex justify-center items-center flex-col">
          <p @click="showDisclaimer"
            class="font-bold cursor-pointer w-54 text-[#031E4F]  text-center leading-relaxed border-l-4 border-[#031E4F] border-r-4 text-2xl mb-4">
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
import { ref } from 'vue'

const { t } = useI18n()
const disclaimerModalRef = ref<InstanceType<typeof DisclaimerModal> | null>(null)
const showDisclaimer = () => {
  if (disclaimerModalRef.value) {
    disclaimerModalRef.value.showDisclaimer()
  }
}

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